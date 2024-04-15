
export const Getcurrentslidesposition = ([slides_ele, propSlidemove_from])=>{
    const slidemove_from = propSlidemove_from.toLocaleLowerCase()
    let currentposition;

    if(slidemove_from === 'left'||
            slidemove_from === 'right') currentposition = slides_ele.style.left// get slides position left relative the scream view point    
    else if(slidemove_from === 'top'||
            slidemove_from === 'bottom' ) currentposition = slides_ele.style.top // get slides position top relative the scream view point

    return parseFloat(currentposition) * -1
}
 
export const Moveslides = ([
    currentposition,
    slides_ele,
    propSlidemove_from,
    animation_value,
    numberOfSlides,
    perView,
    initialNumberOfContent_per_vw, 
], Myfunc = (value)=>{})=>{


    let Nextposition;
    const sliptArr = []
    const getAllSlides = [...slides_ele.children]
    const slidemove_from =  propSlidemove_from.toLocaleLowerCase()
    slides_ele.style.transition = animation_value


    const Usualslidesmove = ()=>{

        if(currentposition >= numberOfSlides){

            slides_ele.style.transition = "none"
            Nextposition = 0 //move slides to the start
              
            setTimeout(() => { //next move to the next slide from left '-100%'
                slides_ele.style.transition = animation_value
                Nextposition = 100

                if(slidemove_from === 'left') slides_ele.style.left = '-'+ Nextposition +'%'
                else if(slidemove_from === 'top') slides_ele.style.top = '-'+ Nextposition +'%'   
            }, 100);
    
        }else if(currentposition < 0){

            Nextposition = 0
        }else if(currentposition === 0){
            Nextposition =  perView
        }else{

            currentposition += perView
            Nextposition = currentposition
        }

        return Nextposition
    }

    const Oppositeslidesmove = ()=>{
        
        if(currentposition < 0){

            Nextposition = 0
        }else if(currentposition === 0){

            slides_ele.style.transition = 'none'
            Nextposition = numberOfSlides 

            setTimeout(() => {

                slides_ele.style.transition = animation_value
                Nextposition = numberOfSlides - perView
    
                if(slidemove_from === 'right') slides_ele.style.left = '-'+  Nextposition +'%'
                else if(slidemove_from === 'bottom') slides_ele.style.top = '-'+ Nextposition +'%'  
            }, 100)

        }else{

            currentposition -= perView
            Nextposition = currentposition 
        }
    
        return Nextposition
    }




    while (getAllSlides.length > 0) {
        sliptArr.push(getAllSlides.splice(0, initialNumberOfContent_per_vw))
    }
    
    sliptArr.map((currentSlide, index)=> {
        if(index === currentposition/100){
            Myfunc({
                currentSlide,
             })
        }
        
    })


   
    if(slidemove_from === 'left') slides_ele.style.left = '-'+ Usualslidesmove() +'%'
    else if(slidemove_from === 'right')  slides_ele.style.left = '-'+ Oppositeslidesmove() +'%'
    else if(slidemove_from === 'top') slides_ele.style.top = '-'+ Usualslidesmove() +'%'
    else if(slidemove_from === 'bottom') slides_ele.style.top = '-'+ Oppositeslidesmove() +'%'
}