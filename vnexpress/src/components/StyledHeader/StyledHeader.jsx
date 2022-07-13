import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import icon from '../../assets/icon.png';
import categories from '../../data/category.json';
import './styled-header.scss';
import {
  ClockCircleOutlined,
  UserOutlined,
  HomeOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { Layout, Button, Input, Dropdown, Menu } from 'antd';
import moment from 'moment';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import slugify from '../../utils/vietnamese-slug';
import StyledModal from './../StyledModal/StyledModal';
const { Header } = Layout;

const SubCategory = (props) => {
  const { sub, title } = props.data;
  const items = sub.map((item, index) => {
    return {
      key: index,
      label: <Link to={`${slugify(title)}/${slugify(item)}`}>{item}</Link>,
    };
  });
  return (
    <Menu
      style={{ width: 200, marginTop: '10px', borderTop: '1px solid #b52759' }}
      items={items}
    />
  );
};
const StyledHeader = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const navigate = useNavigate();
  return (
    <Header className={'styled-header'}>
      <div className='container-header'>
        <div className='left'>
          <Button
            onClick={() => {
              console.log(isShowModal);
              setIsShowModal(!isShowModal);
            }}
            className='btn-all-trigger'
          >
            <MenuFoldOutlined />
          </Button>
          <Link to={'/'}>
            <img src={logo} alt='logo' />
          </Link>
          <div className='space'></div>
          <span className='time-now'>{moment().format('dddd L')}</span>
        </div>
        <div className='right'>
          <Link className='right-btn' to={'/'}>
            <Button>
              <ClockCircleOutlined />
              Mới nhất
            </Button>
          </Link>
          <Link className='right-btn' to='/'>
            <Button>
              <img width={20} height={20} src={icon} alt='icon' />
              International
            </Button>
          </Link>
          <div className='space'></div>
          <Input.Search
            className='styled-input'
            placeholder='Tìm kiếm'
            onSearch={(value) => {
              value !== ''
                ? navigate('search/' + value)
                : alert('Hãy nhập gì đó !!');
            }}
          ></Input.Search>
          <Link to={'/'}>
            <Button className='login-btn'>
              <UserOutlined />
              Đăng nhập
            </Button>
          </Link>
        </div>
      </div>
      <div className='shrink-header'>
        <Link to={'/'} className='back-home'>
          <HomeOutlined />
        </Link>
        {categories.map((cate, index) => (
          <div key={index} className='category'>
            <Dropdown overlay={<SubCategory data={cate} />}>
              <NavLink
                to={slugify(cate.title)}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {cate.title}
              </NavLink>
            </Dropdown>
          </div>
        ))}
        <Button
          onClick={() => {
            console.log(isShowModal);
            setIsShowModal(!isShowModal);
          }}
          className='btn-all-category'
        >
          Tất cả
          <MenuFoldOutlined />
        </Button>
      </div>
      <StyledModal isShowModal={isShowModal} setIsShowModal={setIsShowModal} />
    </Header>
  );
};

export default StyledHeader;
