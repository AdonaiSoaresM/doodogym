import logoBranca from '../assets/img/logoBranca.png'
import NavBar from './NavBar'

function Header(){
    return(
        <div className="flex flex-row items-center justify-between flex-none max-h-screen">
           <img src={logoBranca} alt="dg" className="w-56 m-3"></img>
           <NavBar />
        </div>
    )
}
export default Header