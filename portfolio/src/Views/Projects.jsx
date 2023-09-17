import React from 'react'

const Projects = () => {
  return (
    <div className='w-full h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#d10070] text-gray-300'>Projects</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div>
              <span>

              </span>
              <div>
                <a href='/'>
                  <button></button>
                </a>
                <a href='/'>
                  <button></button>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects