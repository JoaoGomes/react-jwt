import { useState, createContext, useContext, useEffect } from 'react';
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

		localStorage.setItem('@App:user', JSON.stringify(response.data.user));
		localStorage.setItem('@App:accessToken', response.data.accessToken);
	}

	function Logout(){
		setUser(null);

		localStorage.removeItem('@App:user');
		localStorage.removeItem('@App:accessToken');
	}
	
	useEffect(() =>{
		const storagedUser = localStorage.getItem('@App:user');
		const storagedToken = localStorage.getItem('@App:accessToken');

		if(storagedToken && storagedUser) {
			setUser(JSON.parse(storagedUser));
			api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
		}
	}, []);

	return(
		<AuthContext.Provider value={{ signed: Boolean(user), user, Login, Logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export function useAuth(){

	const context = useContext(AuthContext);

	return context;
};
