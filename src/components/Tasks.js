import Task from "./Task"

function Tasks({ tasks, onDelete, toggleReminder, onAdd }) {

    return (
        <>
            {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} toggleReminder={toggleReminder} />))}
        </>
    )


}

export default Tasks

// [
//     {
//         id: 1,
//         text: 'Doctors Appointment',
//         day: '5th March at 2:30 pm',
//         reminder: true
//     },
//     {
//         id: 2,
//         text: 'School Meeting',
//         day: '6th March at 11:30 pm',
//         reminder: true
//     },
//     {
//         id: 3,
//         text: 'Food Shopping',
//         day: '5th March at 6:00 pm',
//         reminder: true
//     },
//     {
//         id: 4,
//         text: 'Watch movie with friends',
//         day: '10th March at 4:00 pm',
//         reminder: true
//     }
// ]