import React from 'react'
import { useState } from 'react';

function AddTask({ onAdd }) {
    const [text, setTask] = useState('')
    const [day, setDate] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        onAdd({ text, day, reminder })

        setTask('')
        setDate('')
        setReminder(false)
    }


    return (
        <form className='add-form' onSubmit={(e) => onSubmit(e)}>
            <div className='form-control'>
                <label>
                    Add Task
                </label>
                <input type="text" placeholder='Add Task' value={text} onChange={(e) => { setTask(e.target.value) }} />
            </div>
            <div className='form-control'>
                <label>
                    Add Day & Time
                </label>
                <input type="text" placeholder='Add Day & Time' value={day} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>
                    Set Reminder
                </label>
                <input type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type="submit" value="Save Task" className='btn btn-block' />
        </form>
    )
}

export default AddTask