import React from 'react'
import style from '../../styles/TodoList/Note.module.scss'

export default function Note({data, order}) {
  return (
    <div className={style.Container}>
        <p>{order + 1}. </p>
        <p>{data.task}</p>
    </div>
  )
}
