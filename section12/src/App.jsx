import './App.css';
import {Route, Routes} from "react-router-dom";
import Diary from "./pages/Diary.jsx";
import New from "./pages/New.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Edit from "./pages/Edit.jsx";
import {createContext, useReducer, useRef} from "react";

const mockData = [
    {
        id: 1,
        createdDate: new Date('2024-12-01').getTime(),
        emotionId: 1,
        content: '1번 일기 내용'
    },
    {
        id: 2,
        createdDate: new Date('2024-11-05').getTime(),
        emotionId: 2,
        content: '2번 일기 내용'
    },
    {
        id: 3,
        createdDate: new Date('2025-01-06').getTime(),
        emotionId: 4,
        content: '4번 일기 내용'
    },
    {
        id: 4,
        createdDate: new Date('2024-12-30').getTime(),
        emotionId: 5,
        content: '5번 일기 내용'
    }
]

function reducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return [action.data, ...state];
        case 'UPDATE': {
            return state.map(item => (String(item.id) === String(action.data.id) ? action.data : item));
        }
        case 'DELETE':
            return state.filter(item => String(item.id) !== String(action.data.id));
    }
}

export const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(5);

    // 새로운 일기 추가
    const onCreate = (createdDate, emotionId, content) => {
        dispatch({
            id: idRef.current++,
            type: 'CREATE',
            data: {
                createdDate,
                emotionId,
                content
            }
        });

    }

    // 기존 일기 수정
    const onUpdate = (id, createdDate, emotionId, content) => {
        dispatch({
            type: 'UPDATE',
            data: {
                id,
                createdDate,
                emotionId,
                content
            }
        });

    }

    // 기존 일기 삭제
    const onDelete = (id) => {
        dispatch({
            type: 'DELETE',
            data: {
                id
            }
        })
    }


    return (
        <>
            {/*<button onClick={() => onCreate(new Date().getTime(), 2, '테스트')}>생성 테스트</button>*/}
            {/*<button onClick={() => onUpdate(1, new Date().getTime(), 3, '1번 수정')}>수정 테스트</button>*/}
            {/*<button onClick={() => onDelete(1)}>삭제 테스트</button>*/}

            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider
                    value={{
                        onCreate,
                        onUpdate,
                        onDelete
                    }}
                >
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/new' element={<New/>}/>
                        <Route path='/diary/:id' element={<Diary/>}/>
                        <Route path='/edit/:id' element={<Edit/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        </>
    )
}

export default App
