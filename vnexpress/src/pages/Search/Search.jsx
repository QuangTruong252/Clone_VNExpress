import React, { useEffect, useState } from 'react';
import './search.scss'
import { useParams } from 'react-router-dom';
import newsApi from '../../api/newsApi';
import NewsList from '../../components/NewsList/NewsList';
import data from '../../data/data.json';

const Search = () => {
    const [items, setItems] = useState();
    const {search_title} = useParams();
    useEffect(() => {
        const getData =  async () => {
            const params = {
                q: search_title,
                searchIn: "title",
            }
            const response = await newsApi.getNewsEverything(params);
            setItems(response.articles);
            console.log(response.articles);
        }
        getData();
    }, [search_title])
    return (
        <div className='search'>
            <div className="container">
                <h2>Kết quả</h2>
                <NewsList items={data} type={"1"}/>
            </div>
        </div>
  )
}

export default Search