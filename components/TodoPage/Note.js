import React from 'react'
import style from '../../styles/TodoList/Note.module.scss'

export default function Note({data}) {
  return (
    <div className={style.Container}>
        <p>{data.id}. </p>
        <p>{data.Task}</p>
    </div>
  )
}
