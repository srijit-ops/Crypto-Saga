import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

function CryptoCards({name, price, oneHr, oneWeek, oneDay, supply, marketCap, symbol, image, id}) {

  const navigation= useNavigate()

  const handleClick= ()=>{
    navigation("/coindetails", {state:{coinSymbol:symbol, coinId:id}})
  }

  return (
    <div className='flex flex-row justify-between items-center bg-white mt-5 rounded-lg px-4 py-3 shadow cursor-pointer' onClick={handleClick}>
        <div className='flex flex-row justify-between items-center'>
            <img src={image} alt='coin_img' className='lg:h-7 md:h-6 sm:h-5 h-4 lg:w-7 md:w-6 sm:w-5 w-4 mr-2'/>
            <div className='flex flex-col'>
                <p className='text-gray-950 sm:text-sm lg:text-base text-xs'>{name}</p>
                <p className='text-gray-400 sm:text-sm lg:text-base text-xs'>{symbol}</p>
            </div>
        </div>
        <p className='sm:text-sm lg:text-base text-xs'>{`$ ${price?.toFixed(2)}`}</p>
        <div className='sm:flex hidden flex-row justify-between items-center'>
        <i className= {`fa-solid fa-caret-${oneHr>0?'up':'down'} mr-2 sm:text-sm lg:text-base text-xs ${oneHr>0? 'text-green-500' :'text-red-600'}`}></i>
        <p className={`sm:text-xs lg:text-sm text-xs ${oneHr>0? 'text-green-500' :'text-red-600'}`}>{`${oneHr?.toFixed(2)} %`}</p>
        </div>
        <div className='sm:flex hidden flex-row justify-between items-center'>
        <i className={`fa-solid fa-caret-${oneDay>0?'up':'down'} mr-2 sm:text-sm lg:text-base text-xs ${oneDay>0? 'text-green-500' :'text-red-600'}`}></i>
        <p className={`text-sm ${oneDay>0? 'text-green-500' :'text-red-600'}`}>{`${oneDay?.toFixed(2)} %`}</p>
        </div>
        <div className='flex flex-row justify-between items-center'>
        <i className={`fa-solid fa-caret-${oneWeek>0?'up':'down'} mr-2 sm:text-sm lg:text-base text-xs ${oneWeek>0? 'text-green-500' :'text-red-600'}`}></i>
        <p className={`text-sm ${oneWeek>0? 'text-green-500' :'text-red-600'}`}>{`${oneWeek?.toFixed(2)} %`}</p>
        </div>
        <p className='sm:text-sm lg:text-base text-xs sm:block hidden'>{`$ ${marketCap?.toFixed(2)}`}</p>
        <p className='sm:text-sm lg:text-base text-xs sm:block hidden'>{supply?.toFixed(2)}<span className='ml-1'>{symbol}</span></p>
    </div>
  )
}

export default CryptoCards