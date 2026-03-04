import '../App.css'
import NavBar from '../components/NavBar'
import Images from '../components/Images'

function Home() {
  return (
    <>
      <h1 fixed="top" style={{marginBottom: "200px", fontSize: "70px"}}>Your pet is waiting for you!</h1>
      <NavBar/>
      <Images/>
    </>
  )
}

export default Home
