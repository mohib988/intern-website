import React from 'react';
import { FaSistrix } from 'react-icons/fa';
import {useState} from "react"
import { BsHandbag, BsGrid3X3Gap } from 'react-icons/bs';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import {items} from "../assets/data/items.js"
import { useDispatch,useSelector } from 'react-redux';

import {getPostsBySearch} from "../actions/jobPost.js"

const JobSearch = () => {
  const [result, setResult] = useState("");
  // note: the id field is mandatory
  const {posts}=useSelector((state)=>state.centralStore)
const dispatch=useDispatch()  

  const handleOnSearch = (string, results) => {
dispatch(getPostsBySearch(string))
// onSearch will have as the first callback parameter
// the string searched and for the second the results.
    // console.log( string,results)
    
console.log(string,results)  
  }

  const handleOnHover = (result) => {
    // the item hovered
    // document.getElementById("one").value=result

    // console.log(posts)
    
    setResult(result.name)
  }
  
  const handleOnSelect = (item) => {
    // the item selected
    
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        {/* <span style={{ display: 'block', textAlign: 'left' }}>id: {item}</span> */}
        <span style={{ display: 'block', textAlign: 'left' }}> {item.name}</span>
      </>
    )
  }

  return (
    <div className="job-search-container">
        <h1 className="job-search-header">
            Get The <span>Right Job </span><br />You Deserve
        </h1>
        <span className="total-jobs-listed">1,80,570 jobs listed here! Your dream job is waiting</span>
        <div className="job-search-input-container">
            <BsHandbag className='industry-logo' />
            <select name="industry" id="">
                <option value="industry">Industry</option>
                <option value="software">Software</option>
                <option value="finance">Finance</option>
                <option value="recruiting">Recruiting</option>
                <option value="management">Management</option>
                <option value="advertising">Advertising</option>
                <option value="development">Development</option>
            </select>
            <BsGrid3X3Gap className='keyword-logo' />
            {/* <input type="text" className="job-search-keyword" placeholder='Your Keyword...' /> */}
            <div style={{ width: 300 ,cursor:"pointer"}}>
          <ReactSearchAutocomplete 
          items={items}
          onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            // inputSearchString={result}
         
          />
          </div>
            <button className='job-search-button'> <FaSistrix className='search-logo' /> Search</button>
        </div>
    </div>
  )
}

export default JobSearch