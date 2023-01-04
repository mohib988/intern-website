import React from 'react'
import CdAndCpHeader from './CdAndCpHeader'
import { GoLocation } from 'react-icons/go'
import CompanyCard from './CompanyCard'
import Checkbox from './Checkbox'
import Pagination from './Pagination'

const BrowseCompanies = () => {
  return (
    <div className='browse-companies-container'>
        <CdAndCpHeader type="companies" />
        <section className="filter-cards-grid">
            <section className="filter">
                <section className="filter-header">
                    <h3>Advance Filter</h3>
                    <span>Reset</span>
                </section>
                <section className="filter-location">
                    <GoLocation style={{fill: '#abaaad'}} />
                    <select name="location" id="" className='location'>
                        <option value="location">Location</option>
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
                        <Checkbox industry="Paid" number={35} defaultChecked="true" label="paid" />
                        <Checkbox industry="Unpaid" number={36} label="unpaid" />
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
            <section className="cp-cards">
                <section className="cp-header">
                    <span className="cp-shown">
                        Showing <span>41-60</span> of <span>944</span> jobs
                    </span>
                </section>
                <section className="cp-cards-grid">
                    <CompanyCard />
                    <CompanyCard />
                    <CompanyCard />
                    <CompanyCard />
                    <CompanyCard />
                    <CompanyCard />
                    <CompanyCard />
                    <CompanyCard />
                </section>
                <Pagination />
            </section>
        </section>
    </div>
  )
}

export default BrowseCompanies