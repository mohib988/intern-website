import React from 'react'
import Checkbox from './Checkbox'
import { GoLocation } from 'react-icons/go'
import { useDispatch } from 'react-redux'
import { getPostByArea } from '../actions/jobPost'

const Filter = () => {
    const dispatch=useDispatch()
    const initial={location:"karachi",paid:'true'}
    const onSubmit=(e)=>{
        const form={location:e.target.value}
        dispatch(getPostByArea(form))
    }
    return (
        <>

            <section className="filter">
                <section className="filter-header">
                    <h3>Advance Filter</h3>
                    <span>Reset</span>
                </section>
                <section className="filter-location">
                    <GoLocation style={{ fill: '#abaaad' }} />
                    <select name="location" id="" className='location' onClick={onSubmit}>
                        <option value="karachi">Karachi</option>
                        <option value="lahore">Lahore</option>
                    </select>
                </section>
                <section className="filter-industry">
                    <h3>Industry</h3>
                    <ul className="filter-list">
                        <Checkbox industry="All" number={180} defaultChecked="true" label="all" />
                        <Checkbox industry="Software" number={12} label="sw" />
                        <Checkbox industry="Finance" number={23} label="fi" />
                        <Checkbox industry="Recruiting" number={43} label="rec" />
                        <Checkbox industry="Management" number={65} label="mg" />
                        <Checkbox industry="Advertising" number={76} label="ad" />
                    </ul>
                </section>
                <hr className='hr' />
                <section className="filter-allowance">
                    <h3>Allowance</h3>
                    <ul className="filter-list">
                    <div className="cb-container">
          <input type="checkbox" id={"paid"} className='cb'  name='paid'
          value={true}onChange={console.log("a")} />
          <label htmlFor={"paid"}>
            paid
          </label>

        </div>
        <div className="cb-container">
          <input type="checkbox" id={"unpaid"} className='cb'  name='paid'
           value={true}
          onChange={console.log("a")}
           />
          <label htmlFor={"unpaid"}>
            unpaid
          </label>
        </div>
                       
                    </ul>
                </section>
                <hr className='hr' />
                <section className="filter-job_type">
                    <h3>Job type</h3>
                    <ul className="filter-list">
                        <Checkbox industry="Full-Time" number={20} defaultChecked="true" label="ft" />
                        <Checkbox industry="Part-Time" number={24} label="pt" />
                    </ul>
                </section>
            </section>
        </>
    )
}

export default Filter