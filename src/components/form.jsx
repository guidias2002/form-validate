import React from 'react'

import { useForm } from 'react-hook-form'
import validator from 'validator'
import isEmail from 'validator/lib/isEmail';

const FormValidate = () => {

    const { 
        register, 
        handleSubmit, 
        watch,
        formState: { errors } 
    } = useForm();

    const onSubmit = (e) => {
        console.log(e)
    }

    const watchSenha = watch('senha');

    return (
        <form className='container' onSubmit={handleSubmit(onSubmit)}>
            <div className='campos'>
                <label>Nome</label>
                <input 
                className={errors?.nome && 'input-erro'}
                type="text" 
                placeholder='Digite seu nome' 
                {...register('nome', { required: true })}
                />
                {errors?.nome?.type === 'required' && (<p className='msg-erro'>Este campo é obrigatório</p>)}
            </div>

            <div className='campos'>
                <label>Email</label>
                <input 
                className={errors?.nome && 'input-erro'}
                type="text" 
                placeholder='Digite seu email' 
                {...register('email', { required: true, validate: (value) => validator.isEmail(value) })}
                />
                {errors?.email?.type === 'required' && (<p className='msg-erro'>Este campo é obrigatório</p>)}
                {errors?.email?.type === 'validate' && (<p className='msg-erro'>Email inválido</p>)}
            </div>

            <div className='campos'>
                <label>Senha</label>
                <input 
                className={errors?.nome && 'input-erro'}
                type="password" 
                placeholder='Digite sua senha' 
                {...register('senha', { 
                    required: true, 
                    minLength: 8, 
                })}
                />
                {errors?.senha?.type === 'required' && (<p className='msg-erro'>Este campo é obrigatório</p>)}
                {errors?.senha?.type === 'minLength' && (<p className='msg-erro'>A senha precisa ter no mínimo 8 caractéres.</p>)}
            </div>

            <div className='campos'>
                <label>Confirmar senha</label>
                <input 
                className={errors?.nome && 'input-erro'}
                type="password" 
                placeholder='Confirme sua senha' 
                {...register('confirmarSenha', { 
                    required: true,
                    minLength: 8,
                    validate: (value) => value === watchSenha,
                })}
                />
                {errors?.confirmarSenha?.type === 'required' && (<p className='msg-erro'>Este campo é obrigatório</p>)}
                {errors?.confirmarSenha?.type === 'validate' && (<p className='msg-erro'>A senha deve ser igual</p>)}
                {errors?.confirmarSenha?.type === 'minLength' && (<p className='msg-erro'>A senha precisa ter no mínimo 8 caractéres.</p>)}
            </div>

            <button type='submit'>Criar conta</button>
        </form>
    )
}

export default FormValidate