
import PropTypes from "prop-types";
const Button =({text,color,onClick})=>{
    // const onClick=(e)=>{
    //     console.log("heheh yota on click ")
    // }
    return (
        <button className="btn" style={{backgroundColor:color}} onClick={onClick}>{text}</button>
    )
}

Button.prototype={
    text:PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}
Button.defaultProps={
    text:"Add",
    color: "red"
}



export default Button