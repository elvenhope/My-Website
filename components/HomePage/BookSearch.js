import React, { useRef, useState } from 'react'
import axios from "axios";
import style from '../../styles/BookSearch/BookSearch.module.scss'
import Book from './BookObject/Book';

export default function BookSearch() {
    const inputEl = useRef();
    let [BookData, setBookData] = useState([])
    let [Loading, setLoading] = useState(false)

    function updateData(NewData) {
        setBookData(prev => NewData.docs)
    }

    function sendQuery() {
        const BookName = inputEl.current.value;
        setLoading(true)
        axios.get("https://openlibrary.org/search.json?title=" + BookName).then((response) => {
            setLoading(false)
            updateData(response.data)
        });
    }

    function Clear() {
        inputEl.current.value = "";
        setBookData([])
    }

    return (
        <div className={style.ParentContainer}>
            <p className={[style.InputTitle, style.MobileVersion].join(" ")}>Enter a book name:</p>
            <div className={style.ContainerDiv}>
                <p className={[style.InputTitle, style.DesktopVersion].join(" ")}>Enter a book name:</p>
                <input type='text' ref={inputEl} />
                <div className={style.SubmitBtn} onClick={sendQuery}><p>Submit Query</p></div>
                <div className={style.SubmitBtn} onClick={Clear}><p>Clear</p></div>
            </div>
            <div className={style.ResultContainer}>
                <div className={Loading ? style.loader : style.NotLoading}>
                    <div className={style.ldsellipsis}><div></div><div></div><div></div><div></div></div>
                </div>
                {BookData.length > 0 ?
                    BookData.map((BookObject, index) => <Book data={BookObject} key={index} />) :
                    null}
            </div>
        </div>
    )
}
