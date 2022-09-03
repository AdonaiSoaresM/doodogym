import React, { useState } from "react"

function Form() {

    type ErrorsForm = {field: string, msg: string}
    const [errors, setErrors] = useState<ErrorsForm[]>([])

    const inputFields: string[] = ['name', 'email', 'cpf', 'datanascimento', 'celular', 'sexo']

    function checkFields(event: React.MouseEvent<HTMLElement>) {
        event.preventDefault()
        setErrors([])

        function getFormField(name: string): string {
            let value = document.forms[0][name].value
            return value
        }

        inputFields.forEach(field => {
            let value = getFormField(field)

            if (!value) {
                setErrors(current => [...current, {field: field, msg: 'Por favor informe o campo.'}])
                return
            }
        })  
    }

    function checkError(inputName: string){
        let message = ''
        errors.forEach(obj => {
            if(obj.field === inputName) message = obj.msg
        })
        return message
    }

    return (
        <form action="" name="cadastro">
            <InputField name='name' label='Nome' type='text' placeholder="John Borwk" message={checkError('name')}/>
            <InputField name='email' label='E-mail' type='email' placeholder="a@net" message={checkError('email')}/>
            <InputField name='cpf' label='CPF' type='text' placeholder="000.000.000-00" message={checkError('cpf')}/>
            <InputField name='datanascimento' label='Data de nascimento' type='date' message={checkError('datanascimento')}/>
            <InputField name='celular' label='DDD + Celular' type='tel' placeholder="(+00) DDD 0 0000-0000" message={checkError('celular')}/>
            <div className='flex flex-col mt-4'>
                <label className='mb-1 font-bold text-gray-600'>Sexo</label>
                <div>
                    <input type='radio' name='sexo' value='Mascul' className='mr-3' /> <span>Masculino</span>
                    <input type='radio' name='sexo' value='Femin' className='mx-3' /> <span>Feminino</span>
                </div>
            </div>


            <input type="submit" onClick={checkFields} value="CONCLUIR CADASTRO" className='flex items-center justify-center w-56 h-12 my-10 font-bold bg-yellow-500 rounded-md cursor-pointer'></input>
        </form>
    )

}

type PropsInput = {
    name: string,
    label: string,
    type: string,
    placeholder?: string
    message?: string
}
const InputField: React.FC<PropsInput> = ({
    name,
    label,
    type,
    placeholder,
    message,
}) => (
    <div className='flex flex-col mt-4'>
        <label className='mb-1 font-bold text-gray-600'>{label}</label>
        <input type={type} name={name} placeholder={placeholder} className='w-2/4 p-2 bg-gray-100 rounded-lg shadow-md'></input>
        <div className="text-sm italic text-red-700">{ message }</div>
    </div>
);

export default Form