import React from 'react';
import { Link } from 'react-router-dom';

const SecretLink = () => {
	return (
		<div>
			<h1>Link showing page</h1>
			<Link to="/">Go to Home</Link>
		</div>
	);
};

export default SecretLink;
