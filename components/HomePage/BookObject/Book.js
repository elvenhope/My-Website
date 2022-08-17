import React from 'react'
import style from '../../../styles/BookObject/Book.module.scss'
import BookImage from './BookImage'

export default function Book({ data }) {
    function SeeMore() {
        if (data.isbn != null) {
            let url = "https://openlibrary.org/isbn/" + data.isbn[0];
            window.open(url, '_blank').focus();
        } else (
            alert("Sorry, this book has no additional link")
        )
    }
    return (
        <div className={style.Result}>
            <BookImage IsbnGroup={data.isbn} key={data.isbn} />
            <div className={style.InfoZone}>
                <p className={style.title}>{data.title}</p>
                <p>{data.isbn != null ? "ISBN: " + data.isbn[0] : "No ISBN"}</p>
                <p>{data.author_name != null ? "Author: " + data.author_name[0] : "No Known Author"}</p>
                <p>{data.publish_year != null ? "Publish Year: " + data.publish_year[0] : "No Known Publish Date"}</p>
                <p>{data.publisher != null ? "Publisher: " + data.publisher[0] : "No Known Publisher"}</p>
            </div>
            <div className={style.Button} onClick={SeeMore}>
                <p>See More</p>
            </div>
        </div>
        // <div key={index} className={style.Result}>   <div className={style.Image}>
        //     <img className={checkImage(Book.isbn) == true ? style.activeImage : style.d_none}
        //         src={'https://covers.openlibrary.org/b/isbn/' + (Book.isbn != null ? Book.isbn[0] : null) + '-M.jpg'} ></img>
        //     <img className={Book.isbn == null ? style.InactiveImage : style.d_none}
        //         src='https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'></img>
        // </div>
        //     <div className={style.title}>{Book.title}</div>
        //     <div>{Book.isbn != null ? Book.isbn[0] : null}</div>
        // </div>
    )
}
