import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import style from '../../styles/NasaPicture/NasaPicture.module.scss'
import axios from "axios";

export default function index() {
    const [ImageLink, UpdateLink] = useState('');
    const [Data, updateData] = useState({})
    const [Loading, updateLoading] = useState(true)
    const api_key = "WMqzUuB9Cpsx1xrYZTk9MAf4U9NNSs2vGQlQSeBL"

    async function getImage() {
        let response = await axios.get("https://api.nasa.gov/planetary/apod?api_key=" + api_key).then((response) => {
            UpdateLink(response.data.hdurl)
            updateData(response.data)
            updateLoading(false)
        });
    }
    useEffect(() => {
        getImage()
    }, []);
    return (
        <Layout>
            <div className={style.ParentContainer}>
                <div className={style.TextContainer}>
                    <div className={style.TitleDiv}>
                        <p>{Data.title}</p>
                    </div>
                    <div className={style.DescDiv}>
                        <p>{Data.explanation}</p>
                    </div>
                </div>
                <div className={style.Container}>
                    {!Loading ? <img src={ImageLink}></img> :
                        <div className={style.ldsellipsis}><div></div><div></div><div></div><div></div></div>}
                </div>
            </div>
        </Layout >
    )
}