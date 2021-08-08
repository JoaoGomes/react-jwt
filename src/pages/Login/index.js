import React, { useContext } from 'react';
import AuthContext from '../../contexts.auth';

const Login = () => {
    const context = useContext(AuthContext);
    console.log(context);
    
    function handleLogin() {}
	return (
		<div>
		    <button onClick={handleLogin}>Login</button>
		</div>
	);
};

export default Login;
