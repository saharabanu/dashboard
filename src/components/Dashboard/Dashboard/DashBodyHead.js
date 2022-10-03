import React from 'react'
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
               
                <Chart/>
               
                
              

              


               {/* <!-- chart stat  -->  */}
               {/* <canvas id="chart">
              
               </canvas> */}


               {/* <!-- chart end  --> */}



        </section>
    </>
  )
}

export default DashBodyHead