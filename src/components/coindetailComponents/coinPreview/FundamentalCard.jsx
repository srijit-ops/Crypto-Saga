import React from 'react'

function FundamentalCard({label, value, index}) {
    let bgColor

    switch(index){
        case 0:
            bgColor='bg-gradient-to-r from-sky-500 to-indigo-500'
            break
        case 1:
            bgColor='bg-gradient-to-r from-purple-500 to-pink-500'
            break
        case 2:
            bgColor='bg-gradient-to-r from-violet-500 to-fuchsia-500'
            break
        case 3:
            bgColor='bg-gradient-to-r from-cyan-500 to-blue-500'
            break
        default:
            bgColor='bg-gray-950'

    }

  return (
    <div className={`p-4 mb-4 rounded-tl-xl rounded-br-xl ${bgColor}`}>
        <p className='text-white mb-3 text-sm'>{label}</p>
        <p className='text-white font-semibold'>{value}</p>
    </div>
  )
}

export default FundamentalCard