import { useEffect, useState } from 'react'
import earAshare_logo from '../assets/earnashare_logo.svg'

type Prop = {
   navListArr: {name: string, ulr: string}[]
}


const Nav = ({navListArr }: Prop) => {
    const [isMobileOpen, setIsmobileOpen] = useState(false)


    useEffect(()=>{
        const ele_main = document.querySelector('main')  as HTMLElement
        
        ele_main.addEventListener('click', ()=> {
          if(isMobileOpen === true){
              handleMobileNav()
              console.log('hi')
          }
      })

    })

   

    function handleMobileNav() {
        setIsmobileOpen(!isMobileOpen)
    }



  return <nav id='main_header_nav' className='flex justify-between items-center'>
    <div id='logo_conatiner' className='flex items-center cursor-pointer'>
        <img src={earAshare_logo} alt="earn a share affilaite proggram" 
        className=' h-auto w-[120px] object-contain' />
    </div>

    <div id='nav_btns' className='flex-1'>

        <div id='mobile_nav_conatiner ' className='md:hidden relative w-full flex justify-end'>

            <div id='hamburger_container_open' className='cursor-pointer' onClick={handleMobileNav}>
                <img src="" alt="hamburger" />
            </div> 

           <div className={`
             block fixed w-[70%] top-0 bottom-0 transition-[right] bg-gray-300 pl-4 pt-[60px] z-30 md:hidden
             ${isMobileOpen? '-right-0' : '-right-[100%]'}
           `}  onClick={handleMobileNav}>
                <div id='hamburger_container_close' className='cursor-pointer absolute right-4 top-4'>
                    <img src="" alt="hamburger"/>
                </div>

                <div id='mobile_nav_list_conatiner'>
                    <ul className='font-secondary-font text-base space-y-5 text-slate-600'>
                        {navListArr.map(list => 
                            <li key={list.name} className=' cursor-pointer'>{list.name}</li>
                        )}
                    </ul>
                </div>

                <div id='signup/singin_btn_container' className='flex flex-col gap-y-3 items-start mt-8' >
                    <button className='bg-slate-500'>Sign up</button>
                    <button className='bg-slate-500'>Login</button>
                </div>
           </div>

        </div>



        <div id='desktop_nav_conatiner' className='hidden md:flex w-full justify-end gap-x-10 items-center'>
            <div id='desktop_nav_list_conatiner'>
                <ul className='
                inline-flex  items-center gap-x-4 lg:gap-x-8 font-secondary-font text-sm text-slate-600'>
                    {navListArr.map(list => 
                         <li key={list.name} className=' cursor-pointer'>{list.name}</li>
                    )}
                </ul>
            </div>


            <div id='signup/singin_btn_container' className='space-x-4'>
                <button className='bg-slate-500'>Sign up</button>
                <button className='bg-slate-500'>Login</button>
            </div>
        </div>

    </div>
  </nav>
}

export default Nav
