import "./DiaryItem.css";
import Button from "./Button.jsx";
import getEmotionImage from "../util/get-emotion-image.js";
import {useNavigate} from "react-router-dom";

const DiaryItem = ({id, createdDate, emotionId, content}) => {
    const nav = useNavigate();

    const goDiaryPage = () => {
        nav(`/diary/${id}`);
    };

    const goEditPage = () => {
        nav(`/edit/${id}`);
    };

    return (<>
        <div className={'DiaryItem'}>
            <div onClick={goDiaryPage}
                 className={`img_section img_section_${emotionId}`}>
                <img src={getEmotionImage(emotionId)}/>
            </div>
            <div
                onClick={() => nav(`/diary/${id}`)}
                className={'info_section'}>
                <div className={'created_date'}>
                    {new Date(createdDate).toLocaleDateString()}
                </div>
                <div className={'content'}>
                    {content}
                </div>
            </div>
            <div
                onClick={goEditPage}
                className={'button_section'}>
                <Button text={'수정하기'}/>
            </div>
        </div>

    </>);
}

export default DiaryItem;