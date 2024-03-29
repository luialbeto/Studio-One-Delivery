import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import validateName from '../../services/validateName';

export default function RegisterName() {
  const { setNameValid, userData, setUserData } = useContext(AppContext);
  return (
    <div>
      <label htmlFor="name" className="labelRegistro">
        <input
          type="date"
          id="dataDeNascimento"
		  placeholder="Data de nascimento"
          onChange={(event) => {
            setNameValid(validateName(event.target.value));
            setUserData({
              ...userData,
              name: event.target.value,
            });
          }}
        />
      </label>
    </div>
  );
}
