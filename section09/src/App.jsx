import './App.css'
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
import {useReducer, useRef, useState} from "react";

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

function reducer(state, action) {

    switch (action.type) {
        case 'create' : return [action.data, ...state];
        case 'update' : {
            return state.map(todo => {
                if(todo.id === action.id) {
                    return {...todo, isChecked: !todo.isChecked};
                }
                return todo;
            });
        }
        case 'delete': return state.filter(todo => todo.id !== action.id);
        default: return state;
    }
}

function App() {
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreate = (content) => {
        dispatch({
            type: 'create',
            data: {
                id: idRef.current++,
                isChecked: false,
                content: content,
                date: new Date().getTime()
            }
        });
    }

    const onUpdate = (id) => {
        dispatch({
            id: id,
            type: 'update'
        });
    }

    const onDelete = (id) => {
        dispatch({
            id: id,
            type: 'delete'
        });
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
