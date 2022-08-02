import imagemPrincipal from '../assets/img/imagemHomePC.jpg'
import imagemMobile from '../assets/img/imagemHomeMobile.jpg'
import imagemMusculacao from '../assets/img/areas-musculacao.jpeg'
import imagemSalas from '../assets/img/salas-exclusivas.jpeg'
import imagemEquipamento from '../assets/img/equipamentos_alto_padrao.jpeg'

function Content() {
    return (
        <div className='flex flex-col'>
            <div className="m-4 mb-20 overflow-hidden shadow-lg h-1/4 shadow-black rounded-3xl md:h-auto">
                <img src={imagemPrincipal} alt="" className='hidden md:block' />
                <img src={imagemMobile} alt="" className='block md:hidden' />
            </div>
            {/* BOX EXPERIÊNCIA */}
            <div className="flex flex-col items-center justify-center mb-12">
                <p className="text-3xl font-bold">Experiência <span className="text-yellow-500">DoodoGYM</span></p>

                {/* BOX IMAGENS */}
                <div className='flex flex-col w-auto h-auto mt-10 md:flex-row'>
                    
                    {/* 1 */}
                    <div className='my-4 shadow-xl md:mx-4 md:my-0 rounded-2xl shadow-gray-300 w-72'>
                        <img src={imagemMusculacao} alt="" className='h-60 rounded-t-2xl' />
                        <div className='flex items-center justify-center h-10'>Áreas de musculação e cárdio</div>
                    </div>

                    {/* 2 */}
                    <div className='my-4 shadow-xl md:mx-4 md:my-0 rounded-2xl shadow-gray-300 w-72'>
                        <img src={imagemSalas} alt="" className='h-60 rounded-t-2xl' />
                        <div className='flex items-center justify-center h-10'>Salas exclusivas de aulas coletivas</div>
                    </div>
                    {/* 3 */}
                    <div className='my-4 shadow-xl md:mx-4 md:my-0 rounded-2xl shadow-gray-300 w-72'>
                        <img src={imagemEquipamento} alt="" className='h-60 rounded-t-2xl' />
                        <div className='flex items-center justify-center h-10'>Salas exclusivas de aulas coletivas</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Content