import { DatePicker } from 'antd';
import './page-header.scss';
import categories from '../../data/category.json';
import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import vietnamfy from './../../utils/slug-vietnamese';

const PageHeader = props => {
    const {category} = useParams();
    const currentCate = categories.filter(item => item.title === vietnamfy(category))[0];
  return (
    <>
        {currentCate && <div className='page-header'>
            <div className="container">
                <div className="right">
                    <div className='title'>{currentCate.title}</div>
                    <div className="subs">
                        {currentCate.sub.map((item,index) => <NavLink key={index} to='/'>
                            {item}
                        </NavLink>)}
                    </div>
                </div>
                <div className="left">
                    <DatePicker/>
                    Xem theo ngày
                </div>
            </div>
        </div>}
    </>
  )
}


export default PageHeader