
import { BackTop } from 'antd';
import { Outlet } from 'react-router-dom';
import StyledFooter from '../components/StyledFooter/StyledFooter';
import StyledHeader from '../components/StyledHeader/StyledHeader';


const MainPage = () => {
  
  return (
    <>
    <StyledHeader/>
      <div>
        <Outlet/>
      </div>
      <StyledFooter/>
      <BackTop/>
    </>
  );
};

export default MainPage;
