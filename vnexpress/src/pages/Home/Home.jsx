import React, { useEffect, useState } from 'react';
import SlideNews from '../../components/SlideNews/SlideNews';
import './home.scss';
import SlideNewsGrid from '../../components/SlideNewsGrid/SlideNewsGrid';
import outstanding from '../../data/outstanding.json';
import categories from '../../data/category.json';
import { Link } from 'react-router-dom';
import newsApi from '../../api/newsApi';
import moment from 'moment';

const Home = () => {
  const [newsToday, setNewsToday] = useState(outstanding);
  useEffect(() => {
    const getData = async () => {
      const params = {
        from: moment().format('L'),
        to:moment().format('L'),
        domains: "vnexpress.net"
      }
      const response = await newsApi.getNewsEverything(params);
      console.log(response.articles.slice(0,5));
      setNewsToday(response.articles.slice(0,5))
    };
    getData()
  }, [])
  return (
    <div className='home'>
      <div className='container'>
        <div className='section mb-1'>
          <div className='section__header'>
            <h2>Tin trong ngày</h2>
          </div>
          <SlideNews data={newsToday} />
        </div>
        {categories &&
          categories.map((category) => {
            return category.cate !== '' ? (
              <div key={category.id} className='section mb-1'>
                <div className='section__header'>
                  <h2>{category.title}</h2>
                  <div className='sub'>
                    {category.sub.slice(0,4).map((item, index) => (
                      <Link key={index} to='/'>
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
                <SlideNewsGrid category={category.cate} />
              </div>
            ) : (
              <></>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
