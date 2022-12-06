import { Button } from '@mui/material';
import React from 'react';
import Login from '../../components/login/Login'
import logo1 from '../../img/Logo.png'
import './Start.css'

export default function Start() {

  return (
    <main>

        <div className='explore'>
            <div className='btn-explore'>
                <form action='/'>
                    <Button type='submit' variant="contained">Explorar</Button>
                </form>
            </div>

            <div className='logo'>
                <img src={logo1} alt='error logo' /> 
            </div>
        </div>

        <div className='form'>
                <Login />
        </div>

    </main>
  )
}
