import React, { useEffect, useState } from 'react';
import './category.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import categories from '../../data/category.json';
import data from '../../data/data.json';
import newsApi from '../../api/newsApi';
import NewsList from '../../components/NewsList/NewsList';
import SlideNews from './../../components/SlideNews/SlideNews';
import { useNavigate, useParams } from 'react-router-dom';
import vietnamfy from '../../utils/slug-vietnamese';

const Category = () => {
  const [items, setItems] = useState(data);
  const { category } = useParams();
  const navigate = useNavigate();
  const currentCate = categories.filter(
    (item) => item.title === vietnamfy(category)
  )[0];
  useEffect(() => {
    if(!currentCate) {
      navigate('/error-page')
    } else {
      const getData = async () => {
        const params = {
          country: 'us',
          category: currentCate.cate,
        };
        const response = await newsApi.getNewsTopHeadline(params);
        if(response.articles) {
          setItems(response.articles);
        }
      };
      getData();
    }
  }, [currentCate]);
  return (
    <div className='category'>
      <PageHeader />
      {items && <div className='container'>
        <div className='outstanding'>
          <h2>Nổi bật</h2>
          <SlideNews data={items.slice(0,5)} />
        </div>
        <div className='list-news'>
          <div className='left'>
            <h2>Tin mới</h2>
            <NewsList items={items.slice(6,)} type={'1'} />
          </div>
          <div className='right'>
            <h2>Đề xuất</h2>
            <NewsList items={items.slice(9,)} type={'default'} />
          </div>
        </div>
      </div>}
    </div>
  );
};

export default Category;
