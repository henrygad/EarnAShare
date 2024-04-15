import {CSSProperties, useRef} from "react"
import {Getcurrentslidesposition, Moveslides} from "./app/index"
import {Autoslidernav} from "./app/controls"


interface Props {
slidesContent: JSX.Element[],  
numberOfContent_per_vw: () => number,  
slidemove_from: string, 
sliderId: string,  
autoPlay?: {play: boolean, pause: boolean, onLoadPlay?: boolean, autoPlayDurition: number, autoPlayTransitionAnimation: string },
advancefeatures: (value:[]) => void

}

const mainArr:JSX.Element[] = []
const repeateArr: Array<React.ReactElement<string | React.JSXElementConstructor<string>>>[] = []

const  Displayslides = ({
slidesContent,  
numberOfContent_per_vw ,  
slidemove_from, 
sliderId,  
autoPlay,
advancefeatures}:Props) => {
   const slidesElRef = useRef<HTMLDivElement>(null)

   const hundrenViewWidth = 100
   const oneSlide = hundrenViewWidth
   const repeatFirstslide = 1 * oneSlide
   const initialNumberOfContent_per_vw = numberOfContent_per_vw()
   const sliptArr = () => {
      const sliptArr = []
      while (slidesContent.length > 0) {
         sliptArr.push(slidesContent.splice(0, initialNumberOfContent_per_vw))
      }

      sliptArr.map(value => mainArr.push(...value))

      repeateArr.push(...sliptArr)

      return repeateArr.length 
   }
   const initialNumberOfSlides = sliptArr()
   const initialTotalNumberOFSlidesWidht = (initialNumberOfSlides * oneSlide) +  repeatFirstslide
   const evaluateWidthAndHeight = (propValue: string) => {   
      const value = propValue.toLocaleLowerCase()  
      let newValue;

      if(value === 'left' || value === 'right') newValue = 'left'
      else if(value === 'top' || value === 'bottom')newValue = 'top';

      return newValue
   }

    

   setTimeout(handleSlides, 1)
   function handleSlides () {
      const totalNumberOfSlides = initialNumberOfSlides * oneSlide

      if(!slidesElRef.current) return;
      
      if(autoPlay?.play){
         const [Play, Pause] =  Autoslidernav([autoPlay?.onLoadPlay, autoPlay?.autoPlayDurition], ()=>{
             const currentposition = Getcurrentslidesposition( 
                 [ slidesElRef.current, slidemove_from])
                 
             Moveslides([
                 currentposition,
                 slidesElRef.current,
                 slidemove_from,
                 autoPlay?.autoPlayTransitionAnimation,
                 totalNumberOfSlides, 
                 oneSlide,
                 initialNumberOfContent_per_vw,
             ], advancefeatures)


             })

            if(autoPlay.pause) {
               slidesElRef.current.addEventListener('mouseenter', event=> Pause())
               slidesElRef.current.addEventListener('mouseleave', event => Play())
            }
             
      }
        
   }


  
   window.addEventListener("resize", ()=>{
      const updatedNumberOfContent_per_vw = numberOfContent_per_vw()

      if(initialNumberOfContent_per_vw !== updatedNumberOfContent_per_vw){  
         window.location.reload()
      }  
   })




   const sliderStyle: CSSProperties ={
      overflow: 'hidden',
      width: '100%',
      height: '100%',
   }
   const slidesStyle: CSSProperties = {
      display: 'flex',
      flexDirection: slidemove_from.toLocaleLowerCase() === 'top' || slidemove_from.toLocaleLowerCase() === 'bottom'? 'column': 'row', 
      position: 'relative', 
      top: '0%', 
      left: '0%',
      width: evaluateWidthAndHeight(slidemove_from) === 'left'? initialTotalNumberOFSlidesWidht+'%': '100%', 
      height: evaluateWidthAndHeight(slidemove_from) === 'top'?  initialTotalNumberOFSlidesWidht+'%': '100%'
   }  
   const slideStyle: CSSProperties = {
      width: '100%',
      height: '100%'
   }



   return <div style={sliderStyle}>
   <div ref={slidesElRef} id={sliderId} style={slidesStyle}>

      {mainArr.map((slideContent, index) =>  <div id={index + 'slide'} key={index + 1} style={slideStyle}>{slideContent}</div>)}


      { repeateArr[0].map((slideContent, index) => <div id={index + 'slide'} key={index + 1} style={slideStyle}>{slideContent}</div>)}
   </div>
   </div>
}

export default Displayslides 
