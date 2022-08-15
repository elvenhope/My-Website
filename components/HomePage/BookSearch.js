import React, { useRef, useState } from 'react'
import axios from "axios";
import style from '../../styles/BookSearch/BookSearch.module.scss'

export default function BookSearch() {
    const inputEl = useRef();
    let [BookData, setBookData] = useState([]) 

    function updateData(NewData) {
        setBookData(prev => NewData.docs)
        console.log(BookData)
    }

    function sendQuery() {
        const BookName = inputEl.current.value;
        axios.get("http://openlibrary.org/search.json?title=" + BookName).then((response) => {
            console.log(response.data)
            updateData(response.data)
        });
    }
    return (
        <div className={style.ParentContainer}>
            <div className={style.ContainerDiv}>
                <p className={style.InputTitle}>Enter a book name:</p>
                <input type='text' ref={inputEl} />
                <div className={style.SubmitBtn} onClick={sendQuery}><p>Submit Query</p></div>
            </div>
            <div className={style.ResultContainer}>
                {BookData.map((Book, index) => {
                return (
                    <div key={index} className={style.Result}>
                        <div className={style.Image}>
                            <img src={'https://covers.openlibrary.org/b/isbn/' + (Book.isbn != null ? Book.isbn[0] : null) + '-M.jpg'} ></img>
                        </div>
                        <div className={style.title}>{Book.title}</div>
                        <div>{Book.isbn != null ? Book.isbn[0] : null}</div>
                    </div>
                )
                })}
            </div>
        </div>
    )
}
