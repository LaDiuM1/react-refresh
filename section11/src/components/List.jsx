import "./List.css";
import TodoItem from "./TodoItem.jsx";
import {useContext, useMemo, useState} from "react";
import {TodoStateContext} from "../App.jsx";

const List = () => {
    const todos = useContext(TodoStateContext);
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


    const {totalCount, checkedCount, notCheckedCount} = useMemo(() => {
        console.log('getAnalyzedData 호출')
        const totalCount = todos.length;
        const checkedCount = todos.filter(todo => todo.isChecked).length;
        const notCheckedCount = totalCount - checkedCount;

        return {
            totalCount,
            checkedCount,
            notCheckedCount
        }
    }, [todos]);

    return <div className="List">
        <h4>Todo List 🌱</h4>
        <div>
            <div>total: {totalCount}</div>
            <div>checked: {checkedCount}</div>
            <div>notChecked: {notCheckedCount}</div>
        </div>
        <input onChange={onChangeKeyword} value={keyword} placeholder='검색어를 입력하세요'/>
        <div className='todos_wrapper'>
            {
                filteredTodos.map(todo => {
                    return <TodoItem
                        key={todo.id}
                        {...todo}
                    />
                })
            }
        </div>
    </div>;
}

export default List;