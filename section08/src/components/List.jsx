import "./List.css";
import TodoItem from "./TodoItem.jsx";
import {useState} from "react";

const List = ({todos, onUpdate, onDelete}) => {
    const [keyword, setKeyword] = useState('');
    const onChangeKeyword = (e) => {
      setKeyword(e.target.value);
    }

    const getFilteredData = () => {
        if(keyword === '') {
            return todos;
        } else {
            return todos.filter(todo => todo.content
                .toLowerCase()
                .includes(keyword.toLowerCase())
            );
        }
    }

    const filteredTodos = getFilteredData();

    return <div className="List">
        <h4>Todo List 🌱</h4>
        <input onChange={onChangeKeyword} value={keyword} placeholder='검색어를 입력하세요'/>
        <div className='todos_wrapper'>
            {
                filteredTodos.map(todo => {
                    return <TodoItem
                        key={todo.id}
                        id={todo.id}
                        isChecked={todo.isChecked}
                        content={todo.content}
                        date={todo.date}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    />
                })
            }
        </div>
    </div>;
}

export default List;