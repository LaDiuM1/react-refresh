import "./DiaryItem.css";
import Button from "./Button.jsx";
import getEmotionImage from "../util/get-emotion-image.js";

const DiaryItem = ({createdDate, emotionId, content}) => {
    return (<>

        <div className={'DiaryItem'}>
            <div className={`img_section img_section_${emotionId}`}>
                <img src={getEmotionImage(emotionId)}/>
            </div>
            <div className={'info_section'}>
                <div className={'created_date'}>
                    {new Date(createdDate).toLocaleDateString()}
                </div>
                <div className={'content'}>
                    {content}
                </div>
            </div>
            <div className={'button_section'}>
                <Button text={'수정하기'} />
            </div>
        </div>

    </>);
}

export default DiaryItem;