import React from 'react'
import { useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import Order from './Order';

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el=>summa += Number.parseFloat(el.price))
  return (<div> 
     {props.orders.map(el => (
    <Order onDelete={props.onDelete} key={el.id} item={el}/>
    ))}
    <p className='summa'> Сумма: {new Intl.NumberFormat().format(summa)} $ </p>
  </div>)
}
const showNothing = (props) => {
  return (<div className='empty'>
    <h2>Товаров нет</h2>
  </div>)
}

export default function Header (props) {
  const [cardOpen, setCardOpen] = useState(false)
  return (
    <header>
      <div>
        <span className='logo'>Hardware store</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaCartShopping onClick={() => setCardOpen(!cardOpen)} className={'shop-card-button'} />
        {cardOpen && (
          <div className='shop-card'> {props.orders.length > 0 ? showOrders(props): showNothing()} 
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}