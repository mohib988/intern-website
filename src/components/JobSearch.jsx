import React from 'react';
import { FaSistrix } from 'react-icons/fa';
import {useState} from "react"
import { BsHandbag, BsGrid3X3Gap } from 'react-icons/bs';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import {items} from "../assets/data/items.js"
import { useDispatch,useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import {getPostsBySearch} from "../actions/jobPost.js"

const JobSearch = () => {
  const navigate=useNavigate()
  const [result, setResult] = useState("");
  // note: the id field is mandatory
  const {posts}=useSelector((state)=>state.centralStore)
const dispatch=useDispatch()  
 
const [searchItem,setSearchItem]=useState("")
  const handleOnSearch = (string, results) => {

// the string searched and for the second the results.
    console.log( string,results)
setSearchItem(string)    
 }

  
  const handleOnSelect = (item) => {
    // the item selected
    
    console.log(item)
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
            Get The <span>Job </span><br />You're  <span>Obssessed </span> With
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
            <div style={{ width: "40vw" ,cursor:"pointer"}}>
          <ReactSearchAutocomplete 
          items={items}
          onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            autoFocus
            formatResult={formatResult}
            // inputSearchString={result}
         
          />
          </div>
            <button 
            onClick={()=>{
navigate(`job/?search=${searchItem}`)
            }}
            className='job-search-button'> <FaSistrix className='search-logo'  
/> Search</button>
        </div>
    </div>
  )
}

export default JobSearch