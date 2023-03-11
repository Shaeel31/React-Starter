function Button({ color, text , onClick }) {
    return (
        <button onClick={onClick} className="btn" style={{ color: color }}> {text} </button>
    )
}

Button.defaultProps = {
    color: "green",
    text: "Hello"
}

// Button.propTypes = {
// text : PropTypes.string
// }

// Button.propTypes = {
//     color : PropTypes.string,
//     text : PropTypes.string.isRequired
// }

export default Button