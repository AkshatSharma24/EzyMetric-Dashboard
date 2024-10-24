import React from 'react'
import { BsMenuButtonWideFill } from 'react-icons/bs'
import { IoMdAnalytics } from "react-icons/io";
import { SiGoogleadsense } from "react-icons/si";
import {  LineChart, Line, BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } 
from 'recharts';

function Home() {

  const data = [
    {
      name: '2020',
      Data_Analyzed: 4000,
      Rest_Data: 2400,
      amt: 2400,
    },
    {
      name: '2021',
      Data_Analyzed: 3000,
      Rest_Data: 1398,
      amt: 2210,
    },
    {
      name: '2022',
      Data_Analyzed: 2000,
      Rest_Data: 9800,
      amt: 2290,
    },
    {
      name: '2023',
      Data_Analyzed: 2780,
      Rest_Data: 3908,
      amt: 2000,
    },
    {
      name: '2024',
      Data_Analyzed: 1890,
      Rest_Data: 4800,
      amt: 2181,
    },
  ];
  
  
  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>Dashboard</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Leads</h3>
            <SiGoogleadsense className='card_icon' />
          </div>
          <h1>300</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Analytics</h3>
            <IoMdAnalytics className='card_icon' />
          </div>
          <h1>30</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Report</h3>
            <BsMenuButtonWideFill className='car_icon'/>
          </div>
          <h1>100</h1>
        </div>
      </div>

      <div className='charts'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Data_Analyzed" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="Rest_Data" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>


      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Data_Analyzed" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Rest_Data" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

      </div>
    </main>
  )
}

export default Home