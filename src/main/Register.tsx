import { useParams } from 'react-router-dom'
import logoPreta from '../assets/img/logoPreta.png'
import Form from '../components/Form'
import toReal from '../utils/convertReal'

function Register() {

    const { plano } = useParams()

    type Plano = {
        plano: string,
        valor: number
    }

    function setPlano() {

        const obj: Plano = {
            plano: 'null',
            valor: 0
        }
            ;
        if (plano === 'black') {
            obj.plano = 'Black'
            obj.valor = 119.90
        } else {
            obj.plano = 'Smart'
            obj.valor = 89.90
        }
        return obj
    }

    return (
        <>
            <div className="flex justify-center w-full h-screen">
                <div className="flex-col flex-grow">
                    <div className="w-full h-auto">
                        <img src={logoPreta} alt="" className='h-24 m-10 border-b-2' />
                    </div>
                    <div className='flex items-center justify-center w-full h-16 bg-yellow-500'>
                        <p className='text-3xl font-bold'>VENHA FAZER PARTE</p>
                    </div>

                    <div className='flex flex-col pt-10 pl-10'>
                        <p className='mb-3 text-gray-700'>Preencha os campos abaixo para realizar a matrícula</p>

                        <Form />

                    </div>
                </div>

                <div className="w-1/4 h-full">
                    <div className="fixed flex flex-col justify-center w-1/4 h-full p-10 bg-gray-200">
                        <div className='flex flex-col'>
                            <p className='mb-10 text-2xl'>Plano {setPlano().plano}</p>
                            <div className='flex justify-between font-bold'>
                                <div>Mensalidade</div>
                                <div>{'R$ ' + toReal(setPlano().valor)}</div>
                            </div>
                            <div className='w-full my-4 border-b border-gray-400'></div>
                            <div className='flex justify-between font-bold'>
                                <div>Taxa de adesão</div>
                                <div>R$ 0,00</div>
                            </div>
                            <div className='w-full my-4 border-b border-gray-400'></div>
                            <div className='flex justify-between font-bold'>
                                <div>Manutenção anual</div>
                                <div>R$ 0,00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register


