import React from 'react';
import BTC from '../../../images/BTC.png'
import visa from '../../../images/visa.png';
import CardShip from '../../../images/card chip.png';
import ETH from '../../../images/card chip.png';
import masterCard from '../../../images/master card.png';

const Card = () => {
  return (
    <>
         <div className="cards">
                {/* <!-- card 1 --> */}
                <div className="card">
                    <div className="top">
                        <div className="left">
                            <img src={BTC} alt="BTC"/>
                            <h2>BTC</h2>
                        </div>
                        <img src={visa} alt="visa" className="right"/>
                    </div>
                    <div className="middle">
                        <h1>$827.67</h1>
                        <img src={CardShip} alt="CardShip" className="chip"/>
                            
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <small>Card Holder</small>
                            <h5>John Doe</h5>
                        </div>
                        <div className="right">
                            <div className="expiry">
                                <small>Expire</small>
                            <h5>08/23</h5>
                            </div>
                            <div className="cvv">
                                <small>CVV</small>
                                <h5>123</h5>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- card1 end  -->
                <!-- card 2 --> */}
                <div className="card">
                    <div className="top">
                        <div className="left">
                            <img src={ETH}alt="ETH"/>
                            <h2>ETH</h2>
                            
                        </div>
                        <img src={masterCard} alt="" className="right"/>
                    </div>
                    <div className="middle">
                        <h1>$827.67</h1>
                        <img src={CardShip} alt="" className="chip"/>
                            
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <small>Card Holder</small>
                            <h5>John Doe</h5>
                        </div>
                        <div className="right">
                            <div className="expiry">
                                <small>Expire</small>
                            <h5>08/23</h5>
                            </div>
                            <div className="cvv">
                                <small>CVV</small>
                                <h5>123</h5>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- card1 end  -->
                <!-- card 3 --> */}
                <div className="card">
                    <div className="top">
                        <div className="left">
                            <img src={BTC} alt=""/>
                            <h2>BTC</h2>
                        </div>
                        <img src={visa} alt="" className="right"/>
                    </div>
                    <div className="middle">
                        <h1>$827.67</h1>
                        <img src={CardShip} alt="" className="chip"/>
                            
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <small>Card Holder</small>
                            <h5>John Doe</h5>
                        </div>
                        <div className="right">
                            <div className="expiry">
                                <small>Expire</small>
                            <h5>08/23</h5>
                            </div>
                            <div className="cvv">
                                <small>CVV</small>
                                <h5>123</h5>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- card1 end  --> */}
               </div>
    </>
  )
}

export default Card