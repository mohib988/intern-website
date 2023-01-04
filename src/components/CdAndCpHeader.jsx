import React from 'react'

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
                    {charArray.map((char) => (<li key={Math.random()}>{char}</li>))}
                </ul>
            </div>
        </section>
    </>
  )
}

export default CdAndCpHeader