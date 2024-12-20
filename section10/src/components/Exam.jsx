import {useReducer} from "react";

// reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
    return state + action.data;
}

const Exam = () => {
    const PLUS_VALUE = 5;
    const MINUS_VALUE = -5;

    // dispatch : 발송하다, 급송하다.
    // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
    const [state, dispatch] = useReducer(reducer, 0);

    const onClickUpdateValue = (value) => {
        // 인수: 상태가 어떻게 변화되길 원하는지
        // -> 액션 객체
        dispatch({
            data: value
        });
    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => onClickUpdateValue(PLUS_VALUE)}>+</button>
            <button onClick={() => onClickUpdateValue(MINUS_VALUE)}>-</button>
        </div>
    )
}

export default Exam;