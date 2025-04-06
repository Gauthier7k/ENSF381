import React, { useContext } from 'react';
import { AuthContext } from './RegForm';
import DisplayStatus from './DisplayStatus';

function AuthMessageSignUp() {
  const auth = useContext(AuthContext) || {};
  const { message, messageType } = auth;

  return (
    <div className="auth-message">
      {message ? (
        <DisplayStatus type={messageType} message={message} />
      ) : null}
    </div>
  );
}

export default AuthMessageSignUp;