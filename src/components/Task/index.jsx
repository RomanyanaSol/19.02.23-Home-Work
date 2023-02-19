import React, { useState } from 'react'
import DeleteButton from '../UI/Button/DeleteButton'
import s from './style.module.css'


export default function Task({ id, title, type, deleteTask }) {

  const [showDelete, setShowDelete] = useState(false);

  const style = {
    backgroundColor: type === 1 ? '#E74C3C' : '#1ABC9C'
  }

  return (
    <div
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}

      style={style}
      className={s.card}>
      {title}
      {
        showDelete
          ? <DeleteButton onClick={() => deleteTask(id)}>X</DeleteButton>
          : ''
      }
    </div>
  )
}
