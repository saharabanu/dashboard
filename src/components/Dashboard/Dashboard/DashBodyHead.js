import React from 'react'
import BTC from '../../../images/BTC.png'
import visa from '../../../images/visa.png';
import CardShip from '../../../images/card chip.png';
import ETH from '../../../images/card chip.png';
import masterCard from '../../../images/master card.png';
import Card from './Card';
import Details from './Details';
import Payment from './Payment';
import Chart from './Chart';

const DashBodyHead = () => {
  return (
    <>

           <section className="middle">
               <div className="header">
               <h1>Overview</h1>
               <input type="date" />
               </div>

              <Card/>
               <Details/>
                <Payment/>
                <Chart />
                
              

              


               {/* <!-- chart stat  -->  */}
               {/* <canvas id="chart">
              
               </canvas> */}


               {/* <!-- chart end  --> */}



        </section>
    </>
  )
}

export default DashBodyHead