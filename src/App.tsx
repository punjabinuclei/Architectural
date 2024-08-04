import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <div>
        <div className='bg-black py-[10px] w-full '>
          <p className='text-white  text-center text-[0.5rem]'> MAKE ROOM FOR BETTER LIVING</p>
        </div>
        <div className='md:px-16 px-6'>
          <Navbar />
          <HeroSection />
        </div>
      </div>
    </>
  )
}

export default App
