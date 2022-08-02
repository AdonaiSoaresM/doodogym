function Prices(){

    return(
        <div className="flex flex-col items-center mt-12">
            
            <div className="flex flex-row justify-center mb-12">
                <p className="text-3xl font-bold">Escolha <span className="text-yellow-500">o seu plano</span></p>
            </div>
            
            
            <div className="flex flex-row items-center w-auto p-1"> {/* BOX Preços */}

             {/* PREÇO BLACK */}
                <div className="flex flex-col mr-3 shadow-2xl w-80 shadow-gray-400 rounded-2xl hover:border hover:border-yellow-500">
                    <div className="flex items-center justify-center h-24 text-3xl text-white bg-black rounded-t-2xl"> {/* TITULO */}
                        Plano <span className="ml-1 font-bold">Black</span>
                    </div>
                    <div className="flex items-center justify-center h-10 font-bold bg-yellow-500">PREMIUM</div> {/* TARJA AMARELA */}
                    <div className="pt-6 h-80"> {/* DESCRICÃO PLANO */}
                        <ul className="text-gray-600 list-disc">
                            <li className="mb-3 ml-9">Área de musculação e aeróbicos</li>
                            <li className="mb-3 ml-9">DoodoFIT GO (Aulas online)</li>
                            <li className="mb-3 ml-9">DoodoFIT App</li>
                            <li className="mb-3 ml-9">Plano Vip 30 dias para amigo</li>
                            <li className="mb-3 ml-9">Acesso ilimitado a todas academias da rede</li>
                            <li className="mb-3 ml-9">Leve amigos para treinar com você</li>
                            <li className="mb-3 ml-9">Cadeira de massagem</li>
                        </ul>
                    </div>
                </div>
                
                {/* PREÇO SMART */}
                <div className="flex-col hidden ml-3 shadow-2xl md:flex w-80 shadow-gray-400 rounded-2xl hover:border hover:border-yellow-500"> 
                    <div className="flex items-center justify-center h-24 text-3xl text-white bg-black rounded-t-2xl"> {/* TITULO */}
                        Plano <span className="ml-1 font-bold text-yellow-500">Smart</span>
                    </div>
                    <div className="flex items-center justify-center h-10 font-bold bg-yellow-500">NORMAL</div> {/* TARJA AMARELA */}
                    <div className="pt-6 h-80"> {/* DESCRICÃO PLANO */}
                        <ul className="text-gray-600 list-disc">
                            <li className="mb-3 ml-9">Área de musculação e aeróbicos</li>
                            <li className="mb-3 ml-9">DoodoFIT GO (Aulas online)</li>
                            <li className="mb-3 ml-9">DoodoFIT App</li>
                            <li className="mb-3 ml-9">Plano Vip 30 dias para amigo</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center w-full mt-16 mb-4 h-14">
                <div className="flex flex-row items-center justify-center w-64 h-12 font-bold text-white bg-red-800 rounded-full">Começar agora</div>
            </div>

            <div className="text-gray-600">Você será encaminhado(a) para o processo de escolha e contratação do seu plano.</div>
        </div>
    )
}

export default Prices