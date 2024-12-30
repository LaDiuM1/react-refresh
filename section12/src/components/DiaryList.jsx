import Button from "./Button.jsx";
import "./DiaryList.css"
import DiaryItem from "./DiaryItem.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const DiaryList = ({pivotData}) => {
    const nav = useNavigate();

    const [sortType, setSortType] = useState('latest');

    const onChangeSortType = (e) => {
      setSortType(e.target.value);
    }

    const getSortedData = () => {
        switch (sortType) {
            case 'latest' : {
                return pivotData.toSorted((o1, o2) =>
                    Number(o2.createdDate) - Number(o1.createdDate)
                )
            }
            case 'oldest' : {
                return pivotData.toSorted((o1, o2) =>
                    Number(o1.createdDate) - Number(o2.createdDate)
                )
            }
        }
    }

    const sortedData = getSortedData();

    return (
        <div className='DiaryList'>
            <div className='menu_bar'>
                <select onChange={onChangeSortType}>
                    <option value='latest'>최신순</option>
                    <option value='oldest'>오래된 순</option>
                </select>
                <Button onClick={() => nav('/new')}
                        text='새 일기 쓰기'
                        type='POSITIVE'/>
            </div>
            <div className='list_wrapper'>
                {
                    sortedData.map(item => {
                        return <DiaryItem
                            key={item.id}
                            {...item}
                        />
                    })
                }
            </div>
        </div>
    );

}

export default DiaryList;