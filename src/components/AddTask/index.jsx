import React from 'react'
import Button from '../UI/Button';
import s from './style.module.css'

export default function AddTask({addTask}) {

    const submit = event => {
        event.preventDefault();
        const {day, type, description} = event.target;

        addTask(description.value, +type.value, +day.value)

        day.value = 1;
        type.value = 1;
        description.value = '';
    }

    const days = [
        { id: 1, title: 'Понедельник', value: 1 },
        { id: 2, title: 'Вторник', value: 2 },
        { id: 3, title: 'Среда', value: 3 },
        { id: 4, title: 'Четверг', value: 4 },
        { id: 5, title: 'Пятница', value: 5 },
        { id: 6, title: 'Суббота', value: 6 },
        { id: 7, title: 'Воскресенье', value: 7 }
    ];

    const taskType = [
        { id: 1, title: 'Важное', value: 1 },
        { id: 2, title: 'Неважное', value: 2 }
    ];

    return (
        <form className={s.form} onSubmit={submit}>
            <div className={s.form_block}>
                <div className={s.selects_block}>
                    <select name='day'>
                        {
                            days.map(({ id, value, title }) => <option key={id} value={value}>{title}</option>)
                        }
                    </select>
                    <select name='type'>
                        {
                            taskType.map(({ id, value, title }) => <option key={id} value={value}>{title}</option>)
                        }
                    </select>
                </div>
                <input type="text" name='description' placeholder='Описание' />
            </div>
            <Button>Добавить</Button>
        </form>
    )
}
