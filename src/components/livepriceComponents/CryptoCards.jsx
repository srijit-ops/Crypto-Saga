import React from 'react'

function CryptoCards() {
  return (
    <div className='flex flex-row justify-between align-middle bg-white mb-5'>
        <div className='flex flex-row justify-between align-middle'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png' alt='coin_img' className='h-7 w-7'/>
            <div className='flex flex-col'>
                <p className='text-gray-950'>Bitcoin</p>
                <p className='text-gray-600'>BTC</p>
            </div>
        </div>
    </div>
  )
}

export default CryptoCards