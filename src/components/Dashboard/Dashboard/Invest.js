import React from 'react'

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
        <img src="./images//uniliver.png" alt=""/>
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
        <img src="./images/tesla.png" alt=""/>
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
        <img src="./images/monster.png" alt=""/>
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
        <img src="./images/mcdonalds.png" alt=""/>
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