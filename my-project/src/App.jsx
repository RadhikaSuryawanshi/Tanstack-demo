import React from 'react'

const App = () => {
  return (
    <div className='w-full h-screen  flex flex-col '>
      <div class="navbar flex justify-center  lg:justify-start">

         <div class="relative inline-block text-left">
         <div class="dropdown dropdown-start lg:dropdown">
  <div tabindex="0" role="button" class="btn m-1 text-xl">menu <svg class="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
        <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg></div>
  <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-64 p-2 shadow-xl">
    <li className='font-medium text-sm'><a>About</a></li>
    <li className='font-medium text-sm'><a>Blog 2</a></li>
    <li className='font-medium'>
    <div class=" dropdown ">
  <div tabindex="0" role="button" class="dropdown m-1 text-sm">
    Theme
    <svg
      width="12px"
      height="12px"
      class="inline-block h-2 w-2 fill-current opacity-60 m-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2048 2048">
      <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
    </svg>
  </div>
  <ul tabindex="0" class="dropdown-content bg-base-300 rounded-box z-1 w-50 h-60 overflow-auto p-2 shadow-2xl">
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
        aria-label="nord"
        value="nord" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
        aria-label="coffee"
        value="coffee" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
        aria-label="Valentine"
        value="valentine" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
        aria-label="Aqua"
        value="aqua" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
        aria-label="Dark"
        value="dark" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
        aria-label="Bumblbee"
        value="bumblebee" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
        aria-label="Emerald"
        value="emerald" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
        aria-label="Corporate"
        value="corporate" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
        aria-label="Lofi"
        value="lofi" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
        aria-label="Luxury"
        value="luxury" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
        aria-label="Sunset"
        value="sunset" />
    </li>
  </ul>
</div>
    </li>
  </ul>
</div>
         </div>
      </div>
      <div className='w-full lg:h-1/2  flex flex-col lg-flex-row justify-center items-center md:mt-5 lg:mt-15'>
    <div className='w-[90%] h-full flex lg:flex-row  flex-col justify-center text-center items-center sm-w-full lg:p-10 gap-4'>
    <div className='w-3/5 lg:w-1/3 h-full flex flex-col justify-center item-center gap-2 lg:gap-4'>
<img src="/profile.png" alt="profile" className='size-64 md:size-80 lg:w-full lg:h-full object-cover object-top   lg:hover:scale-105 transition-all duration-300 glow-image' />
<p className=' text-base w-full underline underline-offset-3 lg:text-xl flex justify-center lg:flex-none lg:justify-center'><i className='font-light '>Radhika Suryawanshi💗</i></p>
    </div>
      <div className='w-2/3 h-full  flex justify-center items-center mx-5'>
<p className='w-full font-semibold text-3xl lg:text-5xl leading-10 lg:leading-20 '>Passionate developer dedicated to turning ideas&nbsp;<span class="animate-pulse glow">💡</span>
&nbsp;into stunning digital experiences. </p>
    </div>
    
    </div>
    </div>
    <div className='w-full  flex flex-col justify-center items-center mt-5 lg:mt-15 '>
      <p className='lg:text-xl text-base hover:scale-105 duration-150'>"Let's get started — big things ahead!"</p> 
      <div className='  flex gap-2 justify-center items-center mt-2 lg:mt-5 '>
      <div class="badge badge-primary badge-xs"></div>
      <div class="badge badge-primary badge-sm"></div>
      <div class="badge badge-primary badge-md"></div>
      <div class="badge badge-primary badge-sm"></div>
      <div class="badge badge-primary badge-xs"></div>
    </div>
    </div>
   
    </div>
    
  )
}

export default App