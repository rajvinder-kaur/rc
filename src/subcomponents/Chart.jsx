import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,ResponsiveContainer } from 'recharts';
const data = [{ name: 'Page A', uv: 400,  amt: 2400 }];
const dat = [
    { name: 'Laheriasarai', homes: 35 },
    { name: 'Bahadurpur', homes: 27 },
    { name: 'Madhopatti', homes: 22 },
    { name: 'Donar', homes: 18 },
    { name: 'Allalpatti', homes: 15 },
    { name: 'Benta', homes: 12 }
  ];


import React from 'react'

function Chart() {
  return (
      <BarChart  width={700} height={500} data={dat} className=' hidden md:block mx-auto '>
        <XAxis dataKey="name" stroke="#ccc" />
        <YAxis stroke="#ccc"/>
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="homes" fill="#D1683D" barSize={30}  />
    </BarChart>
  )
}

export default Chart