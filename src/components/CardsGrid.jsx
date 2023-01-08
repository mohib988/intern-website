import React from 'react'
import Pagination from './Pagination'

const CardsGrid = ({cardType, qty, grid}) => {
    return (
        <>
            <section className="re-cards">
                <section className="re-header">
                    <span className="re-shown">
                        Showing <span>41-60</span> of <span>944</span> jobs
                    </span>
                </section>
                <section className={`re-cards-grid ${grid} `}>
                    {Array(qty).fill(cardType)}
                </section>
                <Pagination number={5} />
            </section>
        </>
    )
}

export default CardsGrid