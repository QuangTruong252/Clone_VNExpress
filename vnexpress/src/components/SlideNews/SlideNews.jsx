import React from 'react';
import { Slide } from 'react-slideshow-image';
import defaultImg from '../../constant/defaultImg';
import './slide-news.scss';

const SlideNews = (props) => {
    const data = props.data;
  return (
    <div className='mb-1'>
        <Slide slidesToShow={1} slidesToScroll={1} transitionDuration={200}>
            {data &&
              data.map((item, index) => (
                <a key={index} target="_blank" href={item.url}>
                  <div className='each-slide-effect'>
                    <div className='wrap'>
                      <img src={item.urlToImage || defaultImg} alt="img" />
                      <div className="info">
                        <p className='title'>{item.title}</p>
                        <span className='content'>{item.description}</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
          </Slide>
    </div>
  )
}

export default SlideNews