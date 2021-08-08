import { useState, createContext } from 'react';
import api from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	async function Login(){
		const response = await api.post('/login', {
			mail: 'john@mail.com',
			password: '123456',
		});
		console.log(response);
		setUser(response.data.user);
		api.defaults.headers.Authorization = `Bearer ${response.data.accessToken}`;
	}
	return(
		<AuthContext.Provider value={{ signed: Boolean(user), user, Login }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
