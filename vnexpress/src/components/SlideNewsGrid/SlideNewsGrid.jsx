import { Card, List } from 'antd';
import './slide-news-grid.scss';
import defaultImg from '../../constant/defaultImg';
import React, { useState, useEffect } from 'react';
import newsApi from '../../api/newsApi';
import data from '../../data/data.json';
const { Meta } = Card;

const SlideNewsGrid = (props) => {
  const [items, setItems] = useState(data.slice(0, 4));
  useEffect(() => {
    const getData = async () => {
      const params = {
        country: 'us',
        category: props.category,
      };
      const response = await newsApi.getNewsTopHeadline(params);
      setItems(response.articles.slice(0, 4));
    };
    getData();
  }, []);
  return (
    <div>
      <List
        grid={{
          gutter: 20,
        }}
        className='mb-1 styled-list'
        dataSource={items}
        renderItem={(item, index) => (
          <List.Item>
            {item && (
              <a target="_blank" href={item.url}>
                <Card
                  key={index}
                  hoverable
                  style={{
                    width: 250,
                    height: '100%',
                    borderRadius: '20px',
                    overflow: 'hidden',
                  }}
                  className="card-item"
                  cover={
                    <img
                      height={150}
                      alt='img'
                      src={item.urlToImage || defaultImg}
                    />
                  }
                >
                  <Meta
                    title={item.title}
                    description={item.description && item.description.slice(0, 150) + '...'}
                  />
                </Card>
              </a>
            )}
          </List.Item>
        )}
      />
    </div>
  );
};

export default SlideNewsGrid;
