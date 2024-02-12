import { useState } from "react";

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000');

    const randomColorUtility = length => {
        return Math.floor(Math.random() * length)
    }

    const handleCreateRandomHexColor = () => {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';
        for (let i = 0; i < 6; i++){
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor);
    }

    const handleCreateRandomRgbColor = () => {

    }



    return (
        <div style={{height: '100vh', width: '100vw', background: `${color}`}}>
            <button onClick={()=> setTypeOfColor('hex')}>Generate Hex Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Generate RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
        </div>
        
    );
};

export default RandomColor;
