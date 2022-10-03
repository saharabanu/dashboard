import React from 'react'

const Details = () => {
  return (
    <>
        <div className="monthly-report">
                <div className="reprt">
                    <h3>Income</h3>
                    <div>
                        <details>
                           <h1>$29,734</h1>
                           <h6 className="success">+3.53%</h6>
                        </details>
                        <p className="text-muted">Compared to $26,456 last month</p>
                    </div>
                </div>
                <div className="reprt">
                    <h3>Expenses</h3>
                    <div>
                        <details>
                           <h1>$29,634</h1>
                           <h6 className="danger">-3.53%</h6>
                        </details>
                        <p className="text-muted">Compared to $45,456 last month</p>
                    </div>
                </div>
                <div className="reprt">
                    <h3>Cashback</h3>
                    <div>
                        <details>
                           <h1>$56,934</h1>
                           <h6 className="success">+3.53%</h6>
                        </details>
                        <p className="text-muted">Compared to $26,456 last month</p>
                    </div>
                </div>
                <div className="reprt">
                    <h3>TurnOver</h3>
                    <div>
                        <details>
                           <h1>$29,934</h1>
                           <h6 className="danger">-3.53%</h6>
                        </details>
                        <p className="text-muted">Compared to $26,456 last month</p>
                    </div>
                </div>
               </div>
    </>
  )
}

export default Details