import Button from "./Button.jsx";
import "./DiaryList.css"
import DiaryItem from "./DiaryItem.jsx";
import {useContext} from "react";
import {DiaryStateContext} from "../App.jsx";

const DiaryList = () => {
    const data = useContext(DiaryStateContext);

    return (
        <div className='DiaryList'>
            <div className='menu_bar'>
                <select>
                    <option value='latest'>최신순</option>
                    <option value='oldest'>오래된 순</option>
                </select>
                <Button text='새 일기 쓰기' type='POSITIVE'/>
            </div>
            <div className='list_wrapper'>
                {
                    data.map(item => {
                        return <DiaryItem
                            key={item.id}
                            createdDate={item.createdDate}
                            emotionId={item.emotionId}
                            content={item.content}
                        />
                    })
                }
            </div>
        </div>
    );

}

export default DiaryList;