import Nav from "./components/Nav"
import { headernavlist } from "./datas/staticdata"
import Heroslider from "./sections/Heroslider"

const Home = () => {
  return <>
    <header className=" relative">
        <section className="container lg:pl-3 py-2 fixed top-0 left-0 right-0 z-[100]">
            <Nav  navListArr={headernavlist}/>
        </section>
     </header>
     <main id="main_content">
        <section id="home_hero" className="h-auto w-full pt-[60px]">
           <Heroslider />
        </section>
     </main>
     {/* <footer>
      Here is my footer
     </footer> */}
  </>
}

export default Home
