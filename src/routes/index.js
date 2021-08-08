import React, { useContext } from 'react';
import SignRoutes from './SignRoutes';
import AuthContext from '../context/auth';
import OtherRoutes from './OtherRoutes';

const Routes =() => {
	const { signed } = useContext(AuthContext);

	return signed ? <OtherRoutes/> : <SignRoutes />;
};

export default Routes;
