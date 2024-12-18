import "./Editor.css";
import {useRef, useState} from "react";

const Editor = ({onCreate}) => {
    const [input, setInput] = useState('');
    const inputRef = useRef();
    const onChangeInput = (e) => {
        setInput(e.target.value);
    }

    const onSubmit = () => {
        if (input === '') {
            inputRef.current.focus();
            return;
        }
        onCreate(input);
        setInput('');
    }

    const onKeyDown = (e) => {
        if(e.key === 'Enter') {
            onSubmit();
        }
    }

    return <div className='Editor'>
        <input
            ref={inputRef}
            onKeyDown={onKeyDown}
            onChange={onChangeInput} type='text'
            value={input} placeholder='새로운 Todo...'/>
        <button
            onClick={onSubmit}
            type='button'>추가</button>
    </div>;
}

export default Editor;