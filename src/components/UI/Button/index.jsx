import React from 'react';
import s from './style.module.css'

export default function Button({children, onClick}) {
  return (
    <button className={s.button} onClick={onClick}>{children}</button>
  )
}
