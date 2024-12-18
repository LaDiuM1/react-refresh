import './App.css'
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
import {useRef, useState} from "react";

const mockData = [
    {
        id: 0,
        isChecked : false,
        content: 'React 공부하기',
        date: new Date().getTime()
    },
    {
        id: 1,
        isChecked : false,
        content: '빨래하기',
        date: new Date().getTime()
    },
    {
        id: 2,
        isChecked : false,
        content: '노래 연습하기',
        date: new Date().getTime()
    }
];

function App() {
    const [todos, setTodos] = useState(mockData);
    const idRef = useRef(3);
    
    const onCreate = (content) => {
        const newTodo = {
            id: idRef.current++,
            isChecked: false,
            content: content,
            date: new Date().getTime()
        }

        setTodos([
            newTodo,
            ...todos
        ]);
    }
    
    const onUpdate = (id) => {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                return {...todo, isChecked: !todo.isChecked};
            }
            return todo;
        }))
    }

    const onDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return(
    <div className={'App'}>
        <Header/>
        <Editor onCreate={onCreate}/>
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
    )
}

export default App
