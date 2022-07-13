import React from 'react';
import { Link } from 'react-router-dom';
import './styled-footer.scss';
import logo from '../../assets/logo.svg';
import icon from '../../assets/icon.png';
import { Button } from 'antd';
import {MailOutlined} from "@ant-design/icons"

const StyledFooter = () => {
  return (
    <div className='footer container'>
      <div className='footer__content-top'>
        <div className='footer__content__menus'>
          <div className='footer__content__menu'>
            <Link to='/'>Trang chủ</Link>
            <Link to='/'>Video</Link>
            <Link to='/'>Podcasts</Link>
            <Link to='/'>Ảnh</Link>
            <Link to='/'>Mới nhất</Link>
            <Link to='/'>Xem nhiều</Link>
            <Link to='/'>Tin nóng</Link>
          </div>
          <div className='footer__content__menu'>
            <Link to='/'>Thời sự</Link>
            <Link to='/'>Góc nhìn</Link>
            <Link to='/'>Thế giới</Link>
            <Link to='/'>Kinh doanh</Link>
            <Link to='/'>Giải trí</Link>
          </div>
          <div className='footer__content__menu'>
            <Link to='/'>Thể thao</Link>
            <Link to='/'>Pháp luật</Link>
            <Link to='/'>Giáo dục</Link>
            <Link to='/'>Sức khỏe</Link>
            <Link to='/'>Đời sống</Link>
            <Link to='/'>Du lịch</Link>
          </div>
          <div className='footer__content__menu'>
            <Link to='/'>Khoa học</Link>
            <Link to='/'>Số hóa</Link>
            <Link to='/'>Xe</Link>
            <Link to='/'>Ý kiến</Link>
            <Link to='/'>Tâm sự</Link>
            <Link to='/'>Hài</Link>
          </div>
        </div>
        <div className='footer__content__contact'>
          <div className='item'>
            <p>Tải ứng dụng</p>
            <div className="link">
              <Button>
                <img width={20} height={20} src={icon} alt='icon' />
                VnExpress
              </Button>
              <Button>
                <img width={20} height={20} src={icon} alt='icon' />
                International
              </Button>
            </div>
          </div>
          <div className='item'>
            <p>Liên hệ</p>
            <div className="link">
              <Link to={'/'}>
                <MailOutlined />
                Tòa soạn
              </Link>
              <Link to={'/'}>
                <img width={20} height={20} src={icon} alt='icon' />
                Hợp tác bản quyền
              </Link>
            </div>
          </div>
          <div className='item'>
            <p>Đường dây nóng</p>
            <div className="link">
              <div>
                <p>083.888.0123</p>
                <span>(Hà Nội)</span>
              </div>
              <div>
                <p>082.233.3555</p>
                <span>(TP. Hồ Chí Minh)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer__content-bottom'>
        
          <div className='logo'>
            <img src={logo} alt='' style={{ borderRadius: '10px' }} />
            <Link to='/'>Báo điện tử</Link>
          </div>
          <div className="address">
                <p>Tổng biên tập: Phạm Hiếu</p>
                <p>Địa chỉ: Tầng 5, Tòa nhà FPT, 17 phố Duy Tân, Cầu Giấy, Hà Nội</p>
                <p>Điện thoại: 024 7300 8899 - máy lẻ 4500</p>
            </div>
      </div>
    </div>
  );
};

export default StyledFooter;
