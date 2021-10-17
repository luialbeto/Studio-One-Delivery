import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginButtonCriarConta() {
  return (
    <div className="semContaDiv">
      <button type="button" className="semContaButton">
        <Link to="/register" className="link">
          Criar uma conta
        </Link>
      </button>
    </div>
  );
}
