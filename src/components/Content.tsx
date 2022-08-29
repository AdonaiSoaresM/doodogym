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
                    <ImageBox src={imagemMusculacao} text={'Áreas de musculação e cárdio'}/>
                    <ImageBox src={imagemSalas} text={'Salas exclusivas de aulas coletivas'}/>
                    <ImageBox src={imagemEquipamento} text={'Equipamentos de alta qualidade'}/>
                </div>

            </div>
        </div>
    )
}

type ImageContent = {
    src: string,
    text: string,
}
const ImageBox: React.FC<ImageContent> = ({
    src,
    text,
}) => (
    <div className='z-10 my-4 realceBox md:mx-4 md:my-0 rounded-2xl w-72'>
    <div className='z-0 shadow-2xl rounded-2xl shadow-gray-300'>
        <img src={src} alt="" className='h-60 rounded-t-2xl' />
        <div className='flex items-center justify-center h-10'>{text}</div>
    </div>
</div>
);

export default Content