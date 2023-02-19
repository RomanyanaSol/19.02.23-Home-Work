import React from 'react'
import Day from '../Day'
import s from './style.module.css'


export default function DaysList({days, clearDay, deleteTask}) {
  return (
    <div className={s.container}>
      {
        days
        .filter(({tasks}) => tasks.length !== 0)
        .map(day => <Day key={day.id} {...day} clearDay={clearDay} deleteTask={deleteTask}/>)
      }
    </div>
  )
}
