import React from 'react'
import DataTable from '../../components/table/DataTable'
import DataGridDemo from '../../components/table/TrashTable'
import DashboardCards from '../../DashboardCard/DashboardCards '

const Home = () => {
  return (
    <div className='max-w-[1400px] m-auto md:px-4'>
      <div>
        <DashboardCards/>
      </div>
      <DataGridDemo/>
    </div>
  )
}

export default Home
