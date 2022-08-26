import React, { useRef, useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import style from '../../styles/TodoList/TodoList.module.scss'
import axios from 'axios';
import Note from '../../components/TodoPage/Note';

export default function TodoList() {
    const inputEl = useRef();
    const [Notes, UpdateNotes] = useState([])
    const [Loading, setLoading] = useState(false)

    async function GetNotes() {
        setLoading(true)
        let response = await axios.post("/api/getData").then((response) => {
            setLoading(false)
            UpdateNotes(response.data)
        });
    }

    async function SubmitNote() {
        const value = inputEl.current.value;
        inputEl.current.value = "";
        let data = { Task: value }
        setLoading(true)
        let response = await axios.post('/api/sendData', data)
            .then((response) => {
                console.log(response)
            })
            .catch((e) => { console.log(e) }
            )
        GetNotes()
    }

    useEffect(() => {
        GetNotes();
    }, [])

    return (
        <Layout>
            <div className={style.container}>
                <div className={style.titleDiv}><p>Post Your Note!</p></div>
                <div className={style.ContentDiv}>
                    <div><p>Enter: </p></div>
                    <div className={style.InputDiv}>
                        <input type='text' ref={inputEl} />
                    </div>
                    <div className={style.SubmitBtn} onClick={SubmitNote}>
                        <p>Submit Note!</p>
                    </div>
                </div>
                <div className={style.ResultDiv}>
                    <div className={Loading ? style.loader : style.NotLoading}>
                        <div className={style.ldsellipsis}><div></div><div></div><div></div><div></div></div>
                    </div>
                    {Notes.length > 0 ? Notes.map((Object, index) => <Note data={Object} key={index} order={index} />) : null}
                </div>
            </div>
        </Layout>
    )
}
