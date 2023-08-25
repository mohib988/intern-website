import React from 'react'
import Pagination from './Pagination'
import CompanyCard from './CompanyCard'
import { useDispatch,useSelector} from 'react-redux'
import FindJobCard from './FindJobCard'
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom'


const CardsGrid = (props) => {
    
    const {isLoading}=useSelector(state=>state.centralStore)

    if(isLoading){
      return   <div style={{width:"115px",margin:"auto"}}><ReactLoading color='black' type="spin" height={337} width={115} /></div>
    }
function getcomponent(name,tomap){
    if(name==="companies"){
    
        return(
        tomap.map((i,j)=>{
            return <Link  to={`${i.userId}`}style={{textDecoration: 'none' }}><CompanyCard company={i}key={j}/></Link>
        }))

    }
    if(name==="job"){
        return(
        tomap.map((i,j)=>{
            return <FindJobCard post={i}key={j}/>
        }))
    }
        // {Array(8).fill(cardType)}
        // return <CompanyCard/>

}

// if(isLoading){
//     return<ReactLoading color='black' type="spin" height={337} width={115} />
// }

    return (
        <>
            <section className="re-cards">
                <section className="re-header">
                    <span className="re-shown">
                        Showing <span>41-60</span> of <span>944</span> jobs
                    </span>
                </section>
                <section className={`re-cards-grid ${props.grid} `}>
                  {getcomponent(props.type,props.tomap)}
                </section>
                <Pagination number={5} type={props.type} />
            </section>
        </>
    )
}

export default CardsGrid