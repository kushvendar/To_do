import React from 'react'
import './App.css'
import checked from './images/checked.png'
import icon from './images/icon.png'
import unchecked from './images/unchecked.png'

function List(props) {
  return <li  className="text-[17px] pt-[12px] pl-[50px] pb-[12px] pr-[8px] cursor-pointer relative list-none before:content-[''] before:bg-[url(./images/unchecked.png)] before:absolute before:h-[28px] before:w-[28px] before:rounded-[50%]  before:bg-cover before:bg-center before:top-[12px] before:left-[8px] text-[#555]"> {props.item}
  <span className='absolute right top-[5px] w-[40px] h-[40px] text-[22px] text-white leading-[40px] text-center rounded-[50%] hover:bg-[#edeef0 ] ' onClick={e=>{
    props.delList(props.index)
  }}>
    x
  </span>
  </li>
}

export default List
