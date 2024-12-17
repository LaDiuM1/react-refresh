import {useState} from "react";

const Bulb = () => {
    const [light, setLight] = useState('OFF');

    const switchLightState = () => {
        setLight(light === 'OFF' ? 'ON' : 'OFF');
    }
    console.log(light);
    return <>
        <div>
            {
                light === 'ON' ?
                    (<h1 style={{backgroundColor: 'orange'}}>ON</h1>) :
                    (<h1 style={{backgroundColor: 'gray'}}>OFF</h1>)
            }
        </div>

        <div>
            <button onClick={switchLightState}>{light === 'ON' ? '끄기' : '켜기'}</button>
        </div>
    </>
}

export default Bulb;