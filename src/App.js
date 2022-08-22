import React, { useState } from 'react'
import {LocationMarkerIcon } from '@heroicons/react/solid'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app lg:ml-96 lg:mr-96 mr-10 ml-10 mt-10 flex justify-center items-center flex-col">
      <div className="flex justify-center items-center">
        <input
        className='py-1 px-3 outline-0 rounded-sm'
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      {data.name !== undefined &&
      
      <div className="grid bg-gradient-to-r from-[#4EE2A4] to-[#0CC2A5] rounded-xl mt-14 opacity-90 w-64">
        <div className="w-full flex  justify-center flex-col items-center mt-4">
          <div className="flex">
          {data.name !== undefined && <LocationMarkerIcon className='h-7 w-7 text-white' />      }
                
            <p className='text-white text-lg'>{data.name}</p>
          </div>
          <div className="text-5xl text-white">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="bg-[#9A6EEC] text-white rounded-md inline-block px-2 mt-2">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="w-full flex  justify-center flex-col items-center mt-2 mb-4">
            <div className="flex  justify-center flex-col items-center">
              {data.main ? <p className='text-5xl text-white'>{data.main.humidity}%</p> : null}
              <p className='bg-[#FF0066] text-white rounded-md inline-block px-2 mt-2'>Humidity</p>
            </div>
            <div className="flex  justify-center flex-col items-center">
              {data.wind ? <p className='text-3xl text-white'>{data.wind.speed.toFixed()} KM/H</p> : null}
              <p className='bg-[#FEC918] text-white rounded-md inline-block px-2 mt-2'>Wind Speed</p>
            </div>
            <p className='mt-2 text-[#FF0066]'>Powered By <span className='text-white font-semibold'>Abdirahman dirie</span></p>
          </div>
        }



      </div>
      }
      

    </div>
  );
}

export default App;
