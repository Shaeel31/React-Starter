import React from 'react'
import Button from './Button';
import AddTask from './AddTask';

function Header({ title, showAddTask, setShowAddTask }) {
    return (
        <header className='header'>
            <h1 > {title} </h1>
            <Button color="green" text={showAddTask ? "Close" : "Add"} onClick={setShowAddTask} />
        </header>
    )
}

Header.defaultProps = {
    title: "React"
}

export default Header


// We are using {title} to destructure title property from props
// We can also pass props as a property and than use props.title in the template to access title property from props

// const styling = {
//     color: "red", backgroundColor: "black"
// }

{/* To add Inline Styling */ }
{/* <h1 style={styling}>Welcome to {title} Crashcourse</h1> */ }