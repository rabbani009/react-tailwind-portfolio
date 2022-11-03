import React from 'react'

const Skill = () => {
  return (
   
    <div name ='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            Skill
          </p>
        </div>
      
        </div>
       
                <ol className="list">
                    <li className="item space-x-2">
                    <p className='text-2xl font-normal inline border-b-2 border-pink-600'> Front-End :</p>
                    <span>
                        ReactJS,Redux, HTML,NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents .
                    </span>
                    </li>
                    <li className="item space-x-2">
                    <p className='text-2xl font-normal inline border-b-2 border-pink-600'>Back-End :</p>
                    <span className='sm:text-right'>
                        Laravel, MySQL, MongoDB .
                    </span>
                    </li>
                    <li className="item space-x-2">
                    <p className='text-2xl font-normal inline border-b-2 border-pink-600'>Languages :</p>
                    <span> Php,JavaScript,C, C++ .</span>
                    </li>
                </ol>
    </div>
      
</div>
 
  )
}

export default Skill