function Prices(){

    return(
        <div className="mt-24">
            
            <div className="flex flex-row justify-center mb-8">
                <p className="text-3xl font-bold">Escolha <span className="text-yellow-500">o seu plano</span></p>
            </div>
            
            {/* BOX Preços */}
            <div className="flex flex-row justify-center p-4">
                {/* PREÇO BLACK */}
                <div className="flex flex-col">
                    <div>
                        Plano Black
                    </div>
                    <div>
                        Precos
                    </div>
                </div>
                {/* PREÇO SMART */}
                <div className="flex flex-col">
                    <div>
                        Plano Black
                    </div>
                    <div>
                        Precos
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Prices