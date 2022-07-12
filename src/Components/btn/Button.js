import {Button } from 'react-bootstrap';


const importedButton = (anything) => {
    // const numButtonDrip = {
    //     width: "60px",
    //     height: "60px",
    //     backgroundColor: "Maroon",
    //     padding: "10px",
    //     margin: "4px",
    //     borderColor: "Black",
    //     borderRadius: "32px",
    //     fontWeight: "Bold",
    //     fontSize: "20px"
    // }
    const handleClick = () => anything.onClick(anything.increment);
    return (
        <>
            {
                anything.increment === 1 ||
                anything.increment === 2 ||
                anything.increment === 3 ||
                anything.increment === 4 ||
                anything.increment === 5 ||
                anything.increment === 6 ||
                anything.increment === 7 ||
                anything.increment === 8 ||
                anything.increment === 9 ||
                anything.increment === 0 ? 
                <Button className="numButtonDrip" onClick={handleClick}>{anything.increment}</Button> :
                <Button className="operatorButtonDrip" onClick={handleClick}>{anything.increment}</Button>
            }
        
        </>
        // <Button onClick={handleClick}>
        //     {anything.increment}
        // </Button>
    )
}
export default importedButton;