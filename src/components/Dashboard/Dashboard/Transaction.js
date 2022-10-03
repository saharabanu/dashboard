import React from 'react'

const Transaction = () => {
  return (
    <>
        {/* <!-- right part start   --> */}


  


   <div className="recent-transactions">
    <div className="header">
        <h1>Recent Transactions</h1>
        <a href="#">More <span className="material-icons-sharp">
            chevron_right
            </span></a>
    </div>

    <div className="transaction">
        <div className="service">
            <div className="icon bg-purple-light purple">
                <span className="material-icons-sharp">
                    headphones
                    </span>
            </div>
            <div className="details">
                <h4>Music</h4>
                <p>20.8.2022</p>
            </div>
        </div>
        <div className="card-details ">
            <div className="card bg-danger">
                <img src="./images/visa.png" alt=""/>
            </div>
            <div className="details ">
               <p>*5465</p>
               <small className="text-muted">Credit Card</small>
            </div>
        </div>
        <h4>$20</h4>
    </div>
    <div className="transaction">
        <div className="service">
            <div className="icon bg-purple-light">
                <span className="material-icons-sharp purple">
                    shopping_bag
                    </span>
            </div>
            <div className="details">
                <h4>Shopping</h4>
                <p>7.8.2022</p>
            </div>
        </div>
        <div className="card-details ">
            <div className="card bg-primary">
                <img src="./images/visa.png" alt=""/>
            </div>
            <div className="details">
                <p>*5465</p>
               <small className="text-muted">Credit Card</small>
            </div>
        </div>
        <h4>$20</h4>
    </div>
    <div className="transaction">
        <div className="service">
            <div className="icon bg-success-light">
                <span className="material-icons-sharp">
                    restaurant
                    </span>
            </div>
            <div className="details">
                <h4>Restaurant</h4>
                <p>20.8.2022</p>
            </div>
        </div>
        <div className="card-details">
            <div className="card bg-primary">
                <img src="./images/master card.png" alt=""/>
            </div>
            <div className="details">
                <p>*5465</p>
                <small className="text-muted">Credit Card</small>
            </div>
        </div>
        <h4>$20</h4>
    </div>
    <div className="transaction">
        <div className="service">
            <div className="icon bg-danger-light">
                <span className="material-icons-sharp danger">
                    sports_esports
                    </span>
            </div>
            <div className="details">
                <h4>Games</h4>
                <p>20.8.2022</p>
            </div>
        </div>
        <div className="card-details">
            <div className="card bg-danger">
                <img src="./images/visa.png" alt=""/>
            </div>
            <div className="details">
                <p>*5465</p>
                <small className="text-muted">Credit Card</small>
            </div>
        </div>
        <h4>$20</h4>
    </div>
   </div>


 {/* <!-- right part end   --> */}
    </>
  )
}

export default Transaction