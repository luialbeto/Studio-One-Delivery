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
    <div className="allRegister">
      <div className="fundo"></div>
      <div className="registerHeader">
        <div className="menu">
          <h2 className="title">Criar uma conta</h2>
        </div>
        <div className="temUmaConta">
          <p>Já tem uma conta?</p>
          <a href="">Faça login</a>
        </div>
      </div>
      <div className="register">
        <div className="registerName">
          <RegisterName />
        </div>
        <div className="registerDataCPF">
          <div className="dataDeNascimento">
            <RegisterDataDeNascimento />
          </div>
          <div className="CPF">
            <RegisterCPF />
          </div>
        </div>
        <div className="celular">
          <RegisterCelular />
        </div>
        <div className="email">
          <RegisterEmail />
        </div>
        <div className="senha">
          <RegisterSenha />
        </div>
        <div className="repetirSenha">
          <RegisterRepetirSenha />
        </div>
        <div className="button">
          <RegisterButton props={props} />
        </div>
      </div>
    </div>
  );
}
