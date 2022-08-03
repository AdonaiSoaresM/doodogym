function Form() {
    return (
        <form action="">
            <InputField name='name' label='Nome' type='text' />
            <InputField name='email' label='E-mail' type='email' />
            <InputField name='cpf' label='CPF' type='text' />
            <InputField name='datanascimento' label='Data de nascimento' type='date' />
            <InputField name='celular' label='DDD + Celular' type='tel' />
            <div className='flex flex-col mt-4'>
                <label className='mb-1 font-bold text-gray-600'>Sexo</label>
                <div>
                    <input type='radio' name='sexo' className='mr-3' /> <span>Masculino</span>
                    <input type='radio' name='sexo' className='ml-3' /> <span>Feminino</span>
                </div>
            </div>

            <div className='flex items-center justify-center w-56 h-12 my-10 font-bold bg-yellow-500 rounded-md'>CONCLUIR CADASTRO</div>
        </form>
    )
}

type PropsInput = {
    name: string,
    label: string,
    type: string
}
const InputField: React.FC<PropsInput> = ({
    name,
    label,
    type,
}) => (
    <div className='flex flex-col mt-4'>
        <label className='mb-1 font-bold text-gray-600'>{label}</label>
        <input type={type} name={name} className='w-2/4 p-2 bg-gray-100 rounded-lg shadow-md'></input>
    </div>
);

export default Form