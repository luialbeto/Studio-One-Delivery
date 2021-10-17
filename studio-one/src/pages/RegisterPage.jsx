import React from 'react';
import RegisterName from '../components/Register/RegisterNomeCompleto';
import RegisterEmail from '../components/Register/RegisterEmail';
import RegisterSenha from '../components/Register/RegisterSenha';
import RegisterButton from '../components/Login/LoginButtonCriarConta';
import RegisterDataDeNascimento from '../components/Register/RegisterDataDeNascimento';
import RegisterCelular from '../components/Register/RegisterCelular';
import RegisterCPF from '../components/Register/RegisterCPF';
import RegisterRepetirSenha from '../components/Register/RegisterRepetirSenha';
import '../css/register.css';

export default function RegisterPage(props) {
  return (
    <div className="allRegistro">
      <div className="registerHeader">
        <div className="leftMenu">
          <h2 className="title">Criar uma conta</h2>
        </div>
		<div className="temUmaConta">
			<p>Já tem uma conta?</p>
			<span>Faça login</span>
		</div>
      </div>
      <div className="bodyRegistro">
        <RegisterName />
		<RegisterDataDeNascimento />
		<RegisterCPF />
		<RegisterCelular />
        <RegisterEmail />
        <RegisterSenha />
		<RegisterRepetirSenha />
        <RegisterButton props={props} />
      </div>
    </div>
  );
}
