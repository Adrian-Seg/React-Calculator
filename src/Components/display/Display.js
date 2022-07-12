const Display = (props) =>{
    const fontStyle = {
        color: "#EEEEEE",
        fontWeight: "Bold",
        fontSize: "30px"
    }
    return(
        <div style={fontStyle}>{props.message}</div>
    )
}
export default Display;