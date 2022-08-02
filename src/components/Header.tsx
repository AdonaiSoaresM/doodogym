import logoPreta from '../assets/img/logoPreta.png'
import NavBar from './NavBar'

function Header(){
    return(
        <div className="flex flex-row items-center justify-between flex-none max-h-screen">
           <img src={logoPreta} alt="dg" className="w-56 m-3"></img>
           <NavBar />
        </div>
    )
}
export default Header