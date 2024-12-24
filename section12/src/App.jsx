import './App.css';
import {Routes, Route} from "react-router-dom";
import Diary from "./pages/Diary.jsx";
import New from "./pages/New.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  return (
      <>
        <div>Hello</div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new' element={<New/>}/>
          <Route path='/diary' element={<Diary/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </>
  )
}

export default App
