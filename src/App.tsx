import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <nav className='fixed top-0 w-full'>
        <Navbar />
      </nav>
      <main className='pt-24'>
        <Body />
        </main>
        <Footer />
    </>
      )
}

      export default App
