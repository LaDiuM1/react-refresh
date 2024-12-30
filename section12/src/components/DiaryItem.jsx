import "./DiaryItem.css";
import Button from "./Button.jsx";
import getEmotionImage from "../util/get-emotion-image.js";
import {useNavigate} from "react-router-dom";

const DiaryItem = ({id, createdDate, emotionId, content}) => {
    const nav = useNavigate();
    return (<>
        <div
            onClick={() => nav(`/diary/${id}`)}
            className={'DiaryItem'}>
            <div className={`img_section img_section_${emotionId}`}>
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
                onClick={() => nav(`/edit/${id}`)}
                className={'button_section'}>
                <Button text={'수정하기'}/>
            </div>
        </div>

    </>);
}

export default DiaryItem;