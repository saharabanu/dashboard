import React from 'react'
import Invest from './Invest'
import Transaction from './Transaction'

const DashBodyRight = () => {
  return (
    <>
        <section className='right'>
            <Invest/>
            <Transaction/>
        </section>
    </>
  )
}

export default DashBodyRight