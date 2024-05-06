import React from 'react'
import logo from '../logo.svg';

export default function CarList() {

  const cars = [
    {
      car: "Toyota",
      image: logo
    },
    {
      car: "Volvo",
      image: logo
    },
    {
      car: "Saab",
      image: logo
    }, {
      car: "Ford",
      image: logo
    }];


  return (
    <div className='carsListComponent'>
      <h3 style={{width: "100%"}}>Cars component</h3>
      {
      cars.map((item,i)=>{
      return <div className='carsList' key={i}>
        <h2 key={i+5*2} >{item.car}</h2>
        <img key={i+3*3} src={item.image} alt="logo" />
      </div>
    })}</div>
  )
}
