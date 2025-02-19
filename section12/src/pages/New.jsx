import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import {useNavigate} from "react-router-dom";
import Editor from "../components/Editor.jsx";
import {useContext} from "react";
import {DiaryDispatchContext} from "../App"
import usePageTitle from "../hooks/usePageTitle.jsx";

const New = () => {
    const {onCreate} = useContext(DiaryDispatchContext)
    const nav = useNavigate();
    usePageTitle('새 일기 쓰기')


    const onSubmit = (input) => {
        onCreate(
            input.createdDate.getTime(),
            input.emotionId,
            input.content
        );
        nav('/', {replace: true});
    }
    return (
        <div>
            <Header title='새 일기 쓰기'
                    leftChild={<Button text='< 뒤로 가기'
                                       onClick={() => nav(-1)}></Button>}/>
            <Editor onSubmit={onSubmit}/>
        </div>
    )
}

export default New;