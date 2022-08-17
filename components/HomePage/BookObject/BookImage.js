import React, { useState ,useEffect } from 'react'
import style from '../../../styles/BookObject/BookImage.module.scss'

export default function BookImage({ IsbnGroup }) {
    const [ImageLink, UpdateLink] = useState()
    const NoImageLink = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
    function SetUp() {
        if(IsbnGroup == null) {
            UpdateLink(NoImageLink)
        } else {
            checkImage(IsbnGroup)
        }
    }
    function checkImage(data) {
        var image = new Image();
        let url = data[0];
        image.onload = function () {
            if (this.width > 10) {
                //console.log("image exists:" + url, this.width, this.width > 10)
                UpdateLink('https://covers.openlibrary.org/b/isbn/' + IsbnGroup[0] + '-M.jpg')
            } else {
                //console.log("Image doesn't exists:" + url, this.width, this.width > 10)
                UpdateLink(NoImageLink)
            }
        }
        image.src = 'https://covers.openlibrary.org/b/isbn/' + url + '-M.jpg';
    }
    useEffect(() => {
        SetUp()
    }, []);
    return (
        <div className={style.Image}>
            <img className={style.activeImage} src={ImageLink}></img>
        </div>
    )
}
