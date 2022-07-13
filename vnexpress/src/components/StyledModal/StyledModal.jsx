import { Modal,  Button } from 'antd';
import './styled-modal.scss';
import React, { useEffect } from 'react';
import categories from '../../data/category.json';
import {MailOutlined} from "@ant-design/icons";
import icon from '../../assets/icon.png';

import { Link } from 'react-router-dom';
import slugify from '../../utils/vietnamese-slug';

const StyledModal = (props) => {

  const handleCancel = () => {
    props.setIsShowModal(false);
  };
  useEffect(() => {
    console.log(props.isShowModal);
  }, [props.isShowModal]);
  return (
    <div>
      <Modal
        visible={props.isShowModal}
        onCancel={handleCancel}
        footer={null}
        className={'styled-ant-modal'}
      >
        <div className='modal__content'>
            <div className="modal__content-header ">
              <h2>Tất cả chuyên mục</h2>
            </div>
          <div className='container'>
            <div className='left'>
              {categories &&
                categories.map((cate) => (
                  <div key={cate.id} className='modal__content-item'>
                    <Link onClick={() => handleCancel()} to={slugify(cate.title)}>{cate.title}</Link>
                    {cate.sub.map((sub, index) => (
                      <Link onClick={() => handleCancel()} to={slugify(cate.title)} key={index}>
                        {sub}
                      </Link>
                    ))}
                  </div>
                ))}
            </div>
            <div className='right'>
              <div>
                <Link onClick={() => handleCancel()} to={'/'}>Podcasts</Link>
                <Link onClick={() => handleCancel()} to={'/'}>Ảnh</Link>
                <Link onClick={() => handleCancel()} to={'/'}>Infographics</Link>
              </div>
              <div>
                <Link onClick={() => handleCancel()} to={'/'}>Mới nhất</Link>
                <Link onClick={() => handleCancel()} to={'/'}>Xem nhiều</Link>
                <Link onClick={() => handleCancel()} to={'/'}>Tin nóng</Link>
              </div>
              <div>
                <Link onClick={() => handleCancel()} to={'/'}>Rao vặt</Link>
                <Link onClick={() => handleCancel()} to={'/'}>Startup</Link>
                <Link onClick={() => handleCancel()} to={'/'}>Vhome</Link>
                <Link onClick={() => handleCancel()} to={'/'}>eBook</Link>
                <Link onClick={() => handleCancel()} to={'/'}>eWork</Link>
              </div>
              <div>
                <Link onClick={() => handleCancel()} to={'/'}>Liên hệ</Link>
                <Link onClick={() => handleCancel()} to={'/'}>
                <MailOutlined />
                 Tòa soạn
                </Link>
                <Link onClick={() => handleCancel()} to={'/'}>Quảng cáo</Link>
                <Link onClick={() => handleCancel()} to={'/'}>
                <img width={20} height={20} src={icon} alt='icon' />
                 Hợp tác bản quyền
              </Link>
              </div>
              <div>
                <Link onClick={() => handleCancel()} to={'/'}>Tải ứng dụng</Link>
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
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default StyledModal;
