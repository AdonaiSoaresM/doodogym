import logoBranca from '../assets/img/logoBranca.png'

function Footer(){
    return(
        <div className="flex flex-col items-center w-full pt-8 bg-black h-72">
           <img src={logoBranca} alt="" className='w-48' />
           <div className='w-3/4 h-1 m-4 border-b-2 border-b-gray-400'></div>
           <p className='text-lg text-white'>Nos siga nas redes sociais</p>
           <div className='flex justify-around m-3 text-3xl text-white w-36'>
           <i className="fa-brands fa-instagram"></i>
           <i className="fa-brands fa-twitter"></i>
           <i className="fa-brands fa-facebook"></i>
           </div>
        </div>
    )
}

export default Footer