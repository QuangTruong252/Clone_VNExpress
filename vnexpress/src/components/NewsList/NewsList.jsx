import React from 'react';
import './news-list.scss';
import defaultImg from '../../constant/defaultImg';

import { List } from 'antd';



const NewsList = (props) => {
    const {items, type}  = props;
  return (
    <div className='news-list'>
      <List
        itemLayout='vertical'
        size='large'
        pagination={type !== "default" ? {
          onChange: (page) => {
            window.scroll({ top: 200, left: 0, behavior: 'smooth' });
          },
          pageSize: 5,
        } : null}
        className={type}
        dataSource={items}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            extra={
              <img
                width={type === "default" ? 80 : 272}
                alt='logo'
                src={item.urlToImage || defaultImg}
              />
            }
          >
            <List.Item.Meta
              title={<a style={{fontSize: type !== "default" ? "20px" : "15px"}} className='title' target="_blank" href={item.url}>{item.title}</a>}
            />
            {type !== "default" ? item.description : ""}
          </List.Item>
        )}
      />
    </div>
  );
};

export default NewsList;
