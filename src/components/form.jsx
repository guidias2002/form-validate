import React, { useState } from 'react'

import { useForm } from 'react-hook-form'
import validator from 'validator'
import { FaEyeSlash, FaEye } from "react-icons/fa";

const FormValidate = () => {

    const [ mostrarSenha, setMostrarSenha] = useState(false);
    const [ mostrarConfirmacaoSenha, setMostrarConfirmacaoSenha] = useState(false);

    const { 
        register, 
        handleSubmit, 
        watch,
        setValue,
        formState: { errors } 
    } = useForm();

    const onSubmit = (e) => {
        alert('Dados enviados com sucesso')
        setValue('nome', '')
        setValue('email', '')
        setValue('senha', '')
        setValue('confirmarSenha', '')
    }

    const watchSenha = watch('senha');

    const trocarSenha = () => {
        setMostrarSenha(!mostrarSenha)
    }

    const trocarConfirmacaoSenha = () => {
        setMostrarConfirmacaoSenha(!mostrarConfirmacaoSenha)
    }

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
                type={mostrarSenha ? 'text' : 'password'} 
                placeholder='Digite sua senha' 
                {...register('senha', { 
                    required: true, 
                    minLength: 8, 
                })}
                />
                {mostrarSenha === true
                ? <FaEyeSlash className='icon' onClick={trocarSenha}/>
                : <FaEye className='icon' onClick={trocarSenha}/>
                }
                {errors?.senha?.type === 'required' && (<p className='msg-erro'>Este campo é obrigatório</p>)}
                {errors?.senha?.type === 'minLength' && (<p className='msg-erro'>A senha deve ter no mínimo 8 caractéres</p>)}
            </div>

            <div className='campos'>
                <label>Confirmar senha</label>
                <input 
                className={errors?.nome && 'input-erro'}
                type={mostrarConfirmacaoSenha ? 'text' : 'password'} 
                placeholder='Confirme sua senha' 
                {...register('confirmarSenha', { 
                    required: true,
                    minLength: 8,
                    validate: (value) => value === watchSenha,
                })}
                />
                {mostrarConfirmacaoSenha === true
                ? <FaEyeSlash className='icon' onClick={trocarConfirmacaoSenha}/>
                : <FaEye className='icon' onClick={trocarConfirmacaoSenha}/>
                }
                {errors?.confirmarSenha?.type === 'required' && (<p className='msg-erro'>Este campo é obrigatório</p>)}
                {errors?.confirmarSenha?.type === 'validate' && (<p className='msg-erro'>A senha deve ser igual</p>)}
                {errors?.confirmarSenha?.type === 'minLength' && (<p className='msg-erro'>A senha deve ter no mínimo 8 caractéres</p>)}
            </div>

            <div className='campo-button'>
                <button type='submit'>Criar conta</button>
            </div>
        </form>
    )
}

export default FormValidate