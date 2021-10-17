import React from 'react';
import LoginEmailInput from '../components/Login/LoginEmailInput';
import LoginPasswordInput from '../components/Login/LoginPasswordInput';
import LoginButtonContinue from '../components/Login/LoginButtonContinue';
import LoginButtonCriarConta from '../components/Login/LoginButtonCriarConta';
import '../css/login.css';

export default function LoginPage(props) {
  return (
    <div className="login">
      <div className="fundo"></div>
      <div className="inputs">
        <div className="criarConta">
          <LoginButtonCriarConta />
        </div>
        <div className="continuar">
          <LoginButtonContinue props={props} />
        </div>
        <div className="input">
          <div className="email">
            <LoginEmailInput />
          </div>
          <div className="password">
            <LoginPasswordInput />
          </div>
        </div>
      </div>
    </div>
  );
}
