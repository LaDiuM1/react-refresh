import {useSearchParams} from "react-router-dom";

// 쿼리스트링 방식 파라미터 관리
const Home = () => {
  const [params, setParams] = useSearchParams();
  console.log(params.get('value'));

  return <div>home</div>
}

export default Home;