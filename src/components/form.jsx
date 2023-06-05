import React from 'react'
import { useForm } from 'react-hook-form'

const FormValidate = () => {

    const { register, handleSubmit } = useForm()

    const onSubmit = (e) => {
        console.log(e)
    }

    return (
        <form handleSubmit={onsubmit}>
            <div>
                <label>Nome</label>
                <input 
                type="text" 
                placeholder='Digite seu nome' 
                {...register('nome', { required: true })}
                />
            </div>
            <div>
                <button type='submit'>Enviar</button>
            </div>
        </form>
    )
}

export default FormValidate