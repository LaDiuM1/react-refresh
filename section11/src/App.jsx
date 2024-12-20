import './App.css'
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
import {createContext, useCallback, useMemo, useReducer, useRef} from "react";

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

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreate = useCallback(content => {
        dispatch({
            type: 'create',
            data: {
                id: idRef.current++,
                isChecked: false,
                content: content,
                date: new Date().getTime()
            }
        })
    }, []);

    const onUpdate = useCallback(id => {
        dispatch({
            id: id,
            type: 'update'
        });
    }, []);

    const onDelete = useCallback(id => {
        dispatch({
            id: id,
            type: 'delete'
        });
    }, []);

    const memoizedDispatch = useMemo(() => {
        return {onCreate, onUpdate, onDelete};
    }, []);

    return(
    <div className={'App'}>
        <Header/>

        <TodoStateContext.Provider value={todos}>
            <TodoDispatchContext.Provider
                value={memoizedDispatch}
            >
                <Editor/>
                <List/>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>

    </div>
    )
}

export default App
