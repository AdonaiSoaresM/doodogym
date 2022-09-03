import React, { useState } from "react"
import { Link } from "react-router-dom"

function Prices() {

    const [selected, setSelect] = useState<String>('null')
    const [plano, setPlano] = useState<String>()

    function selectBlack() {
        setSelect('black')
        setPlano('black')
    }
    function selectSmart() {
        setSelect('smart')
        setPlano('smart')
    }

    function checkPlano() {
        if (plano) {
            return '/register/' + plano
        } else {
            return '#'
        }
    }

    function popUpPlano() {
        if (!plano) window.alert('Por favor, selecione um plano.');
    }

    return (
        <div className="flex flex-col items-center mt-8 mb-8">

            <div className="flex justify-center mb-12" id="planos">
                <p className="text-3xl font-bold">Escolha <span className="text-yellow-500">o seu plano</span></p>
            </div>

            <div className="flex flex-col items-center p-1 md:flex-row"> {/* BOX Preços */}

                <Plano name={'Black'} selected={selected} selectPlano={selectBlack} beneficios={
                    ['Área de musculação e aeróbicos',
                    'DoodoFIT GO (Aulas online)',
                    'DoodoFIT App',
                    'Plano Vip 30 dias para amigo',
                    'Acesso ilimitado a todas academias da rede',
                    'Leve amigos para treinar com você',
                    'Cadeira de massagem']} />

                <Plano name={'Smart'} selected={selected} selectPlano={selectSmart} beneficios={
                    ['Área de musculação e aeróbicos',
                    'DoodoFIT GO (Aulas online)',
                    'DoodoFIT App',
                    'Plano Vip 30 dias para amigo']} />


            </div>

            <div className="flex flex-row items-center justify-center w-full mt-16 mb-4 h-14">
                <Link to={checkPlano()} onClick={popUpPlano}><button className={`flex flex-row items-center justify-center w-64 h-12 transition font-bold text-white ${plano ? 'bg-red-800' : 'bg-gray-400 cursor-not-allowed'} rounded-full`}>
                    Começar agora</button></Link>
            </div>

            <div className="text-center text-gray-600">Você será encaminhado(a) para o processo de escolha e contratação do seu plano.</div>
        </div>
    )
}

type onClick = (event: React.MouseEvent<HTMLElement>) => void;

type PropsPlano = {
    name: String,
    selected: String,
    selectPlano: onClick,
    beneficios: string[]
}

const Plano: React.FC<PropsPlano> = ({ name, selected, selectPlano, beneficios }) => (
    <div className={`mb-5 ${selected === name.toLowerCase() ? '' : 'realceBox'} md:mr-3 rounded-2xl`}>
        <div onClick={selectPlano} className={`${selected === name.toLowerCase() ? 'border-2 border-green-700 bg-green-700' : ''}
flex flex-col cursor-pointer transition shadow-2xl  w-80 shadow-gray-400 rounded-2xl `}>
            <div className="flex items-center justify-center h-24 text-3xl text-white bg-black rounded-t-2xl"> {/* TITULO */}
                Plano <span className="ml-1 font-bold text-yellow-500">{name}</span>
            </div>
            <div className="flex items-center justify-center h-10 font-bold bg-yellow-500">NORMAL</div> {/* TARJA AMARELA */}
            <div className="pt-6 bg-white h-80 rounded-b-2xl"> {/* DESCRICÃO PLANO */}
                <ul className="pr-4 text-gray-600 list-disc pl-9">
                    {beneficios.map((item,index) => (
                        <li className="mb-3" key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
)


export default Prices