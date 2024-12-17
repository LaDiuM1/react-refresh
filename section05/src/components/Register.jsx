// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import {useRef, useState} from "react";


const Register = () => {
    const [input, setInput] = useState({
        name: '',
        birth: '',
        country: '',
        bio: ''
    });

    const countRef = useRef(0);
    const inputRef = useRef();

    let count = 0;

    const onChangeInput = (e) => {
        // countRef.current++;
        count++;
        console.log(count);
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
    }

    const onSubmit = () => {
        if(input.name === '') {
            console.log(inputRef.current);
            // 이름을 입력하는 DOM 요소에 포커스
            inputRef.current.focus();
        }
    }

    return (
        <div>
            {countRef.current}
            <button onClick={() => {
                // countRef.current++;
                console.log(countRef.current)
            }}>
                ref + 1
            </button>

            <div>
                <input
                    ref={inputRef}
                    onChange={onChangeInput}
                    name = 'name'
                    value={input.name}
                    placeholder={'이름'}/>
            </div>
            <div>
                <input onChange={onChangeInput} name='birth' type='date' value={input.birth}/>
            </div>

            <div>
                <select onChange={onChangeInput} name='country' value={input.country}>
                    <option></option>
                    <option value='kr'>한국</option>
                    <option value='us'>미국</option>
                    <option value='uk'>영국</option>
                </select>
            </div>

            <div>
                <textarea onChange={onChangeInput} name='bio' value={input.bio}/>
            </div>

            <button onClick={onSubmit}>제출</button>

        </div>
    );
}

export default Register;