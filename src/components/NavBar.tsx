function NavBar() {
    return (
        <>
            <nav className="flex flex-row justify-end w-6/12">
                <button className="px-4 py-2 mx-4 font-bold rounded-full hover:bg-white/75 hover:text-black">
                    Espaço GYM</button>
                <button className="px-4 py-2 mx-4 font-bold rounded-full hover:bg-white/75 hover:text-black">
                    Academias</button>
                <button className="px-4 py-2 mx-4 font-bold bg-red-700 rounded-full">
                    Começar agora</button>
            </nav>
        </>
    )
}

export default NavBar

