// 쿼리스트링 방식 파라미터 관리
import Button from "../components/Button.jsx";
import Header from "../components/Header.jsx";
import DiaryList from "../components/DiaryList.jsx";
import {useContext, useState} from "react";
import {DiaryStateContext} from "../App.jsx";

const getMonthlyData = (pivotDate, data) => {
    return data.filter(item => {
        let createDate = new Date(item.createdDate);
        return pivotDate.getFullYear() === createDate.getFullYear()
            && pivotDate.getMonth() === createDate.getMonth()
    });
}

const Home = () => {
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());

    const monthlyData = getMonthlyData(pivotDate, data);

    const onClickUpdateMonth = (type) => {
        let now = new Date(pivotDate);
        switch (type) {
            case 'PREV': {
                now.setMonth(now.getMonth() - 1);
                setPivotDate(now)
                return;
            }
            case 'NEXT': {
                now.setMonth(now.getMonth() + 1);
                setPivotDate(now)
            }
        }
    }

    return (<>
            <div>
                <Header title={
                    `${pivotDate.getFullYear()}년 
                    ${pivotDate.getMonth() + 1}월`
                }
                        leftChild={<Button text={'<'} onClick={() => onClickUpdateMonth('PREV')}/>}
                        rightChild={<Button text={'>'} onClick={() => onClickUpdateMonth('NEXT')}/>}
                />
                <DiaryList pivotData={monthlyData}/>
            </div>
        </>
    );
}

export default Home;