import {Button } from 'react-bootstrap';


const importedButton = (anything) => {
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