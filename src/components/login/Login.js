import React from 'react'
import './Login.css'
import { Button, Input } from '@mui/material';

export default function Login() {
  return (
    <div className='main'>
        <h1><b>Bienvenido</b></h1>
        <div className='inputs'>
          <Input className='input' type='email' placeholder='Correo eléctronico' name='email' required='required' /><br />
          <Input className='input' type='password' placeholder='Contraseña' name='password' equired='required' /><br />
        </div>

        <div className='btn-confirm'>
          <Button variant="contained" type='submit'>Iniciar Sesión</Button>
        </div>

        <div className='btn-reg'>
          <Button variant="contained" type='submit'><b>Registrarse</b></Button>
        </div>
    </div>
  )
}

