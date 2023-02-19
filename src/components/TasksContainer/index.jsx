import React, { useState } from 'react'
import AddTask from '../AddTask'
import DaysList from '../DaysList'

export default function TasksContainer() {

  const defaultState = [
    {
      id: 1, label: 'ПН', tasks: [
        { id: 1, title: 'поесть', type: 1 },
        { id: 2, title: 'поесть', type: 2 }
      ]
    },
    { id: 2, label: 'ВТ', tasks: [] },
    { id: 3, label: 'СР', tasks: [] },
    { id: 4, label: 'ЧТ', tasks: [] },
    { id: 5, label: 'ПТ', tasks: [] },
    {
      id: 6, label: 'СБ', tasks: [
        { id: 3, title: 'поесть', type: 1 },
        { id: 4, title: 'побегать', type: 2 }
      ]
    },
    { id: 7, label: 'ВС', tasks: [] }
  ]

  const [days, setDays] = useState(defaultState);

  const addTask = (title, type, day) => {
    setDays(pre => {
      const targetDay = pre.find(({ id }) => id === day);

      targetDay.tasks = [...targetDay.tasks, {
        id: Date.now(), title, type
      }];
      return [...pre]
    });
  }

  const deleteTask = (taskId) => {
    setDays(pre => pre.map(day => {
        day.tasks = day.tasks.filter(({ id }) => id !== taskId);
        return day
      })
    );
  }


  const clearDay = (day) => {
    setDays(pre => {
      const targetDay = pre.find(({ id }) => id === day);
      targetDay.tasks = [];
      return [...pre]
    });
  }



  return (
    <div>
      <AddTask addTask={addTask} />
      <DaysList days={days} clearDay={clearDay} deleteTask={deleteTask}/>
    </div>
  )
}
