import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../Component/Card'
import SearchBox from '../Component/SearchBox'

const ResultPage = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios.get('https://rent-cars-api.herokuapp.com/admin/car')
      .then(res => {
        setCars(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <div className='space'></div>
      <SearchBox />
      <div className='result-container'>
        <div className='row'>
          {cars && cars.map((car, index) => {
            return (
              <Card
                key={index}
                id={car.id}
                name={car.name}
                price={car.price}
                image={car.image}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ResultPage