import { Link } from "react-router-dom"

function NavBar() {
    return (
        <>
            <nav className="flex flex-row justify-end w-9/12">
                <button className="hidden px-4 py-2 mx-4 font-bold transition rounded-full md:block hover:bg-black/75 hover:text-white">
                    Administração</button>
                <button className="hidden px-4 py-2 mx-4 font-bold transition rounded-full md:block hover:bg-black/75 hover:text-white">
                    Academias</button>
                <Link to={'/register'}><button className="px-4 py-2 mx-0 font-bold text-white bg-red-700 rounded-full md:mx-4">
                    Começar agora</button></Link>
                <button className="block px-2 ml-4 mr-4 font-bold text-black bg-gray-100 border border-black rounded-md md:hidden">
                    <i className="fa-solid fa-bars"></i>
                    </button>
            </nav>
        </>
    )
}

export default NavBar

