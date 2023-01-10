import React from 'react'
import {Link} from "react-router-dom"
const CdAndCpHeader = ({type}) => {
  const charArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  return (
    <>
        <section className="cd_cp-header">
            <h2>Browse {type[0].toUpperCase() + type.substring(1)}</h2>
            <p className='cd_cp-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni,<br /> atque delectus molestias quis?
            </p>
            <div className="box-character">
                <ul className="box-character-list">
                    {charArray.map((char) => (<Link  style={{textDecoration:"None"}} to={`?search=${char}`} key={Math.random()} >{char}</Link>))}
                </ul>
            </div>
        </section>
    </>
  )
}

export default CdAndCpHeader