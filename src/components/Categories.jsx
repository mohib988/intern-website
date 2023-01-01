import React from 'react'
import { FaBullhorn, FaHandshake } from 'react-icons/fa'
import { GiOfficeChair, GiReceiveMoney } from 'react-icons/gi'
import { BsFillPersonFill, BsCode } from 'react-icons/bs'
import { RiCustomerServiceFill } from 'react-icons/ri'
import { TbWriting } from 'react-icons/tb'

const Categories = () => {
  return (
    <div className="categories-wrapper">
        <div className="categories-container">
            <h2 className="categories-header">
                One Platform <br /> Many <span>Solutions</span>
            </h2>
            <div className="categories-cards-container">
                <div className="categories-card" id='first-card'>
                    <div className="category-image"><FaBullhorn style={{fill: 'orange'}} /></div>
                    <div className="category-details">
                        <span className="category-name">
                            Marketing & Communication
                        </span>
                        <span className="category-jobsavailable">
                            10 Jobs Available
                        </span>
                    </div>
                </div>
                <div className="categories-card">
                    <div className="category-image"><BsFillPersonFill style={{fill: 'lightgreen'}} /></div>
                    <div className="category-details">
                        <span className="category-name">
                            Design & Development
                        </span>
                        <span className="category-jobsavailable">
                            32 Jobs Available
                        </span>
                    </div>
                </div>
                <div className="categories-card">
                    <div className="category-image"><BsCode style={{fill: 'red'}} /></div>
                    <div className="category-details">
                        <span className="category-name">
                            Human Resource
                        </span>
                        <span className="category-jobsavailable">
                            27 Jobs Available
                        </span>
                    </div>
                </div>
                <div className="categories-card">
                    <div className="category-image"><GiReceiveMoney style={{fill: 'hotpink'}} /></div>
                    <div className="category-details">
                        <span className="category-name">
                            Finance Management
                        </span>
                        <span className="category-jobsavailable">
                            5 Jobs Available
                        </span>
                    </div>
                </div>
                <div className="categories-card">
                    <div className="category-image"><FaHandshake style={{fill: 'aquamarine'}} /></div>
                    <div className="category-details">
                        <span className="category-name">
                            Business & Consulting
                        </span>
                        <span className="category-jobsavailable">
                            23 Jobs Available
                        </span>
                    </div>
                </div>
                <div className="categories-card">
                    <div className="category-image"><RiCustomerServiceFill style={{fill: 'brown'}} /></div>
                    <div className="category-details">
                        <span className="category-name">
                            Customer Support & Care
                        </span>
                        <span className="category-jobsavailable">
                            29 Jobs Available
                        </span>
                    </div>
                </div>
                <div className="categories-card">
                    <div className="category-image"><GiOfficeChair style={{fill: 'purple'}} /></div>
                    <div className="category-details">
                        <span className="category-name">
                            Project Management
                        </span>
                        <span className="category-jobsavailable">
                            10 Jobs Available
                        </span>
                    </div>
                </div>
                <div className="categories-card">
                    <div className="category-image"><TbWriting style={{fill: 'orange'}} /></div>
                    <div className="category-details">
                        <span className="category-name">
                            Content Writer
                        </span>
                        <span className="category-jobsavailable">
                            32 Jobs Available
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories