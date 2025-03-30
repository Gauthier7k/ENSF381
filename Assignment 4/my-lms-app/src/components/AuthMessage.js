import React, { useContext } from 'react';
import { AuthContext } from './LoginForm';
import DisplayStatus from './DisplayStatus';

function AuthMessage() {
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

export default AuthMessage;