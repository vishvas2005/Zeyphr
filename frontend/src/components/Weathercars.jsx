import React from 'react'

function Weathercars({name , country ,temp, cap , humidity ,wind }) {
  return (
    <div className='h-[45vh] w-[80vw] bg-[grey] rounded-[20px]'>
      <div className='pt-[5vh] pl-[5vw] font-[RM]'>
      <h2 className="absolute text-2xl font-semibold">
       <p className='font-[Thin] text-[60px]'>{name} {country}</p>
       </h2>
       <p className='mt-[10vh]'>temp <span className='font-[Thin] text-[40px]'>:- {temp}</span></p>
       <p className=''>cap <span className='absolute text-[40px] font-[Thin] -mt-[3vh]'> :- {cap}</span></p>
       <p className=''>humidity <span className='font-[Thin] text-[40px]'> :- {humidity}</span></p>
       <p className=''>wind <span className='absolute font-[Thin] text-[40px] -mt-[3vh]'> :- {wind}</span></p>  
      </div>
    </div>
  )
}

export default Weathercars
