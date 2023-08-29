import React from 'react'
import OutlinedButton from '../Buttons/OutlinedButton'
import PrimaryButton from '../Buttons/PrimaryButton'

const HeroCallToAction = () => {
  return (
        <div className='bg-[#8C394C] text-center py-20'> 
        <p className=" font-Bold m-12 text-5xl max-w-[9000px] text-[#FFFFFF]"> 
         Ready for a new ride or quick sale?
        <p> Start your journey with BargainMoto today!</p>
         </p>
          <div className=" bg-[#8C394C] mx-auto px-8 p-[5px] flex items-center pl-2 pr-20 justify-center p-19">
          <PrimaryButton buttonText={"Sell Your Car"}/>
          <OutlinedButton buttonText={"Find your Dream Car"}/>
         </div>
         </div>
  )
}
export default HeroCallToAction

