function NavBar() {
    return (
        <>
            <nav className="flex flex-row justify-end w-4/6">
                <button className="hidden px-4 py-2 mx-4 font-bold rounded-full md:block hover:bg-black/75 hover:text-white">
                    Espaço GYM</button>
                <button className="hidden px-4 py-2 mx-4 font-bold rounded-full md:block hover:bg-black/75 hover:text-white">
                    Academias</button>
                <button className="px-4 py-2 mx-4 font-bold text-white bg-red-700 rounded-full">
                    Começar agora</button>

            </nav>
        </>
    )
}

export default NavBar

