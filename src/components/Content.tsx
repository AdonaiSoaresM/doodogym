import imagemPrincipal from '../assets/img/imagemHomePC.jpg'
import imagemMusculacao from '../assets/img/areas-musculacao.jpeg'
import imagemSalas from '../assets/img/salas-exclusivas.jpeg'
import imagemEquipamento from '../assets/img/equipamentos_alto_padrao.jpeg'

function Content() {
    return (
        <div className='flex flex-col'>
            <div className="m-4 mb-32 overflow-hidden shadow-lg shadow-black rounded-3xl">
                <img src={imagemPrincipal} alt="" />
            </div>
            {/* BOX EXPERIÊNCIA */}
            <div className="flex flex-col items-center justify-center mb-12">
                <p className="text-3xl font-bold">Experiência <span className="text-yellow-500">DoodoGYM</span></p>

                {/* BOX IMAGENS */}
                <div className='flex w-auto h-auto mt-10'>
                    {/* 1 */}
                    <div className='mx-4 shadow-xl rounded-2xl shadow-gray-300 w-72'>
                        <img src={imagemMusculacao} alt="" className='h-60 rounded-t-2xl' />
                        <div className='flex items-center justify-center h-10'>Áreas de musculação e cárdio</div>
                    </div>
                    {/* 2 */}
                    <div className='hidden mx-4 shadow-xl rounded-2xl shadow-gray-300 w-72 md:block'>
                        <img src={imagemSalas} alt="" className='h-60 rounded-t-2xl' />
                        <div className='flex items-center justify-center h-10'>Salas exclusivas de aulas coletivas</div>
                    </div>
                    {/* 3 */}
                    <div className='hidden mx-4 shadow-xl rounded-2xl shadow-gray-300 w-72 lg:block'>
                        <img src={imagemEquipamento} alt="" className='h-60 rounded-t-2xl' />
                        <div className='flex items-center justify-center h-10'>Salas exclusivas de aulas coletivas</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Content