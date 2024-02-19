import React from 'react'
import Appbar from '../components/Appbar'
import Balance from '../components/Balance'
import User from '../components/User'

const Dashboard = () => {
  return (
    <div className=''>
        <Appbar logo={"Payments App"} user={"U"}/>
        <Balance balance={1000000}/>
        <User/>
    </div>
  )
}

export default Dashboard