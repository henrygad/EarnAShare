import Displayslides from "../slider/Displayslides"


const Heroslider = () => {

  const slidesContent = [
    <div className="text-center pt-10"><p>slide one</p></div>,
    <div className="text-center pt-10"><p>slide two</p></div>,
    <div className="text-center pt-10"><p>slide three</p></div>,
  ]



  return <div className="bg-gradient-to-r from-secondary-color/[.9] relative flex">
      <div id="hero_call_to_action_container" className="container min-h-[60vh] pt-10 pb-5">
          <h1 className="text-4xl lg:text-6xl xl:text-8xl
          font-primary-font font-semibold text-shadow text-primary-color whitespace-pre">Build Success today!</h1>
          <h2 className="font-secondary-font text-lg lg:text-2xl
           text-white -mt-2 font-semibold">with a win win easy marketing.</h2> 
          <p className="max-w-[280px] sm:max-w-[480px]  font-text-font text-sm sm:text-[.94rem] sm:leading-relaxed font-normal
             text-stone-200 mt-2 sm:mt-3 ">EarnAShare‘s affiliate marketing platform empower Content Creators and Affiliaters of all sizes to grow there online business.</p>
          <div id="hero_call_to_action_btn" className="mt-4 flex flex-row flex-wrap  gap-4 pr-4">
          <button className="bg-white px-2 py-1">Increase sales</button> <button className="bg-white px-2 py-1">Monitize your content</button>
          </div>
      </div>
      <div id="hero_slider_container" className=" absolute top-0 bottom-0 right-0 left-0 -z-[1]">
        <Displayslides 
            slidesContent={slidesContent} 
            numberOfContent_per_vw ={()=>{ 
              return 1}}
          slidemove_from={'left'}
          sliderId={'myslide'} 
          autoPlay={{
            play: true,
            autoPlayDurition: 10000,
            pause: true,
            autoPlayTransitionAnimation: 'left .5s ease-out'
          }}
          advancefeatures={()=>{}}
        />
      </div>
  </div>
}

export default Heroslider
