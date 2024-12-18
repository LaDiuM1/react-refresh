import './TodoItem.css';


const TodoItem = ({id, isChecked, content, date, onUpdate, onDelete}) => {
    return <div className='TodoItem'>
        <input onChange={() => onUpdate(id)} type='checkbox' checked={isChecked}/>
        <div className='content'>{content}</div>
        <div className='date'>{new Date(date).toLocaleDateString()}</div>
        <button onClick={() => onDelete(id)} type='button'>삭제</button>
    </div>
}

export default TodoItem;