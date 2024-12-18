import './App.css'
import Viewer from "./components/Viewer.jsx";
import Controller from "./components/Controller.jsx";
import {useState, useEffect, useRef} from "react";
import Even from "./components/Even.jsx";

function App() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    const isMount = useRef(false);
    // 1. 마운트 : 탄생
    useEffect(() => {
        console.log('mount');
    }, []);
    // 2. 업데이트 : 변화, 리렌더링
    useEffect(() => {
        if(!isMount.current) {
            isMount.current = true;
        } else {
            console.log('update');
        }
    });
    // 3. 언마운트 : 죽음
    // 의존성 배열
    // dependency array
    // deps

    function updateCount (value) {
        setCount(count + value);
    }

    return (
        <div className={"App"}>
            <h1>Simple Counter</h1>
            <section>
                <input onChange={(e) => {
                    setInput(e.target.value);
                }}/>
            </section>
            <section>
                <Viewer count={count}/>
                {count % 2 === 0 ? <Even/> : null}
            </section>
            <section>
                <Controller updateCount={updateCount}/>
            </section>
        </div>
    )
}

export default App;
