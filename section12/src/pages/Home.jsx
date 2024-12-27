// 쿼리스트링 방식 파라미터 관리
import Button from "../components/Button.jsx";
import Header from "../components/Header.jsx";
import DiaryList from "../components/DiaryList.jsx";

const Home = () => {

  return (<>
        <div>
          <Header title={'2024년 12월'}
                  leftChild={<Button text={'<'}/>}
                  rightChild={<Button text={'>'}/>}
          />
          <DiaryList/>
        </div>
      </>
  );
}

export default Home;