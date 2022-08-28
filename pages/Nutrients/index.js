import React, { useState, useRef } from 'react'
import Layout from '../../components/Layout'
import axios from "axios";
import style from "../../styles/Nutrients/Nutrients.module.scss"
import Recipe from '../../components/Nutrients/Recipe';

export default function Nutrients() {
    const inputEl = useRef();
    let [Recipes, setRecipeData] = useState([])
    let [Loading, setLoading] = useState(false)

    async function sendQuery() {
        setLoading(true)
        let response = await axios.post("/api/getNutrients", {
            params: {
                query: inputEl.current.value
            }
        }).then((response) => {
            setLoading(false)
            setRecipeData(response.data)
        });
    }
    
    function Clear() {
        setRecipeData([])
        inputEl.current.value = ''
    }

    return (
        <Layout>
            <div className={style.Header}>
                <p>Nutrients</p>
            </div>
            <div className={style.ContainerDiv}>
                <p className={[style.InputTitle, style.DesktopVersion].join(" ")}>Enter a Recipe:</p>
                <input type='text' ref={inputEl} />
                <div className={style.SubmitBtn} onClick={sendQuery}><p>Submit Query</p></div>
                <div className={style.SubmitBtn} onClick={Clear}><p>Clear</p></div>
            </div>
            <div className={style.ResultContainer}>
                <div className={Loading ? style.loader : style.NotLoading}>
                    <div className={style.ldsellipsis}><div></div><div></div><div></div><div></div></div>
                </div>
                {Object.keys(Recipes).length > 0 ?
                    Recipes.hits.map((RecipeObject, index) => <Recipe data={RecipeObject} key={index} />) :
                    null}
            </div>
        </Layout>
    )
}
