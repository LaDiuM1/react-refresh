import './TodoItem.css';
import {memo, useContext} from "react";
import {TodoDispatchContext} from "../App.jsx";


const TodoItem = ({id, isChecked, content, date}) => {
    const {onUpdate, onDelete} = useContext(TodoDispatchContext);
    return <div className='TodoItem'>
        <input onChange={() => onUpdate(id)} type='checkbox' checked={isChecked}/>
        <div className='content'>{content}</div>
        <div className='date'>{new Date(date).toLocaleDateString()}</div>
        <button onClick={() => onDelete(id)} type='button'>삭제</button>
    </div>
}


// 고차 컴포넌트 (Higer order component, HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//     // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//     // T -> Props 바뀌지 않음 -> 리렌더링 X
//     // F -> Props 바뀜 - > 리렌더링 O
//
//     return !(prevProps.id !== nextProps.id
//         || prevProps.isChecked !== nextProps.isChecked
//         || prevProps.content !== nextProps.content
//         || prevProps.date !== nextProps.date);
// });

export default memo(TodoItem);