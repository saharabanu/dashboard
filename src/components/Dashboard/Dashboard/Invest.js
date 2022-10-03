import React from 'react'
import uni from '../../../images/uniliver.png';
import tesla from '../../../images/tesla.png';
import monstar from '../../../images/monster.png';
import mcd from '../../../images/mcdonalds.png';

const Invest = () => {
  return (
    <>
    
         <div className="investments">
    <div className="header">
        <h1>Investments</h1>
        <a href="#">More <span className="material-icons-sharp">
            chevron_right
            </span></a>
    </div>
    <div className="investment">
        <img src={uni} alt=""/>
        <h4>Uniliver</h4>
        <div className="date-time">
            <p>7 Nov 2021</p>
            <small className="text-muted">9.14pm</small>
        </div>
        <div className="bonds">
            <p>1470</p>
            <small className="text-muted">Bonds</small>
        </div>
        <div className="amount">
            <p>$76859</p>
            <small className="danger">-4.27%</small>
        </div>
    </div>
    <div className="investment">
        <img src={tesla} alt=""/>
        <h4>Tesla</h4>
        <div className="date-time">
            <p>7 Nov 2021</p>
            <small className="text-muted">9.14pm</small>
        </div>
        <div className="bonds">
            <p>1470</p>
            <small className="text-muted">Bonds</small>
        </div>
        <div className="amount">
            <p>$76859</p>
            <small className="success">-4.27%</small>
        </div>
    </div>
    <div className="investment">
        <img src={monstar} alt=""/>
        <h4>Monstar</h4>
        <div className="date-time">
            <p>7 Nov 2021</p>
            <small className="text-muted">9.14pm</small>
        </div>
        <div className="bonds">
            <p>1470</p>
            <small className="text-muted">Bonds</small>
        </div>
        <div className="amount">
            <p>$76859</p>
            <small className="success">94.27%</small>
        </div>
    </div>
    <div className="investment">
        <img src={mcd} alt=""/>
        <h4>MacDonalds</h4>
        <div className="date-time">
            <p>7 Nov 2021</p>
            <small className="text-muted">9.14pm</small>
        </div>
        <div className="bonds">
            <p>1470</p>
            <small className="text-muted">Bonds</small>
        </div>
        <div className="amount">
            <p>$76859</p>
            <small className="danger">9-4.27%</small>
        </div>
    </div>
   </div>
  
    </>
  )
}

export default Invest