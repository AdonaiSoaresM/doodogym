import { useState } from "react"
import { Link } from "react-router-dom"

function Prices() {

    const [selected, setSelect] = useState<String>()

    function selectBlack() {
        setSelect('black')
    }
    function selectSmart() {
        setSelect('smart')
    }

    return (
        <div className="flex flex-col items-center mt-8">

            <div className="flex justify-center mb-12">
                <p className="text-3xl font-bold">Escolha <span className="text-yellow-500">o seu plano</span></p>
            </div>

            <div className="flex flex-col items-center p-1 md:flex-row"> {/* BOX Preços */}

                {/* PREÇO BLACK */}
                <div onClick={selectBlack} className={`${selected === 'black' ? 'border-4 border-green-700 bg-green-700' : ''} 
                flex flex-col mb-5 transition delay-100 shadow-2xl md:mr-3 w-80 shadow-gray-400 rounded-2xl hover:border-2 hover:border-yellow-500`}>
                    <div className="flex items-center justify-center h-24 text-3xl text-white bg-black rounded-t-2xl"> {/* TITULO */}
                        Plano <span className="ml-1 font-bold">Black</span>
                    </div>
                    <div className="flex items-center justify-center h-10 font-bold bg-yellow-500">PREMIUM</div> {/* TARJA AMARELA */}
                    <div className="pt-6 bg-white h-80 rounded-b-2xl"> {/* DESCRICÃO PLANO */}
                        <ul className="pr-4 text-gray-600 list-disc pl-9">
                            <li className="mb-3">Área de musculação e aeróbicos</li>
                            <li className="mb-3">DoodoFIT GO (Aulas online)</li>
                            <li className="mb-3">DoodoFIT App</li>
                            <li className="mb-3">Plano Vip 30 dias para amigo</li>
                            <li className="mb-3">Acesso ilimitado a todas academias da rede</li>
                            <li className="mb-3">Leve amigos para treinar com você</li>
                            <li className="mb-3">Cadeira de massagem</li>
                        </ul>
                    </div>
                </div>

                {/* PREÇO SMART */}
                <div onClick={selectSmart} className={`${selected === 'smart' ? 'border-4 border-green-700 bg-green-700' : ''}
                flex flex-col transition shadow-2xl md:mb-5 md:ml-3 w-80 shadow-gray-400 rounded-2xl hover:border-2 hover:border-yellow-500`}>
                    <div className="flex items-center justify-center h-24 text-3xl text-white bg-black rounded-t-2xl"> {/* TITULO */}
                        Plano <span className="ml-1 font-bold text-yellow-500">Smart</span>
                    </div>
                    <div className="flex items-center justify-center h-10 font-bold bg-yellow-500">NORMAL</div> {/* TARJA AMARELA */}
                    <div className="pt-6 bg-white h-80 rounded-b-2xl"> {/* DESCRICÃO PLANO */}
                        <ul className="pr-4 text-gray-600 list-disc pl-9">
                            <li className="mb-3">Área de musculação e aeróbicos</li>
                            <li className="mb-3">DoodoFIT GO (Aulas online)</li>
                            <li className="mb-3">DoodoFIT App</li>
                            <li className="mb-3">Plano Vip 30 dias para amigo</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center w-full mt-16 mb-4 h-14">
                <Link to={'http://www.google.com.br'}><button className="flex flex-row items-center justify-center w-64 h-12 font-bold text-white bg-red-800 rounded-full">
                    Começar agora</button></Link>
            </div>

            <div className="text-center text-gray-600">Você será encaminhado(a) para o processo de escolha e contratação do seu plano.</div>
        </div>
    )
}

export default Prices