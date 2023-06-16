import React, { useState } from 'react';
import './Search.css';
import { Mic, SearchOutlined } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { actionTypes } from '../reducer';

function Search({hideButtons = false}) {
  // eslint-disable-next-line no-unused-vars
  const [{term}, dispatch] = useStateValue();
 

    const [input, setInput] = useState('');
    // In react-router-dom v6 useHistory() is replaced by useNavigate().
    const  navigate =useNavigate();

    const search = e => {
        e.preventDefault();

        console.log('You hit the search button')

        dispatch({
          type: actionTypes.SET_SEARCH_TERM,
          term:input
        })
        // do something  with input... come back and fix

        navigate('/search');
    }

  return (
    <form className='search'>
      <div className='search__input'>
          <SearchOutlined  className='search__inputIcon'/>
          <input value={input} onChange={e => setInput(e.target.value)}/>
          <Mic />
      </div>
      {!hideButtons ?(
          <div className='search__buttons'>
          <Button type='submit' variant='outlined' onClick={search}>Google Search</Button>
          <Button variant='outlined'>I'm Feeling Lucky</Button>
      </div>
      ):(
        <div className='search__buttons'>
        <Button className='search__buttonsHidden' type='submit' variant='outlined' onClick={search}>Google Search</Button>
        <Button className='search__buttonsHidden' variant='outlined'>I'm Feeling Lucky</Button>
    </div>
      )}     
    </form>
  )
}

export default Search
