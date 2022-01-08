import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateSecret = () => {
	const [body, setBody] = useState('');
	const [password, setPassword] = useState('');
	const [expiresIn, setExpiresIn] = useState('');
	const navigate = useNavigate();

	const onCreateSecret = async (e) => {
		e.preventDefault();
		try {
			const secretBody = { body, password, expiresIn };
			const response = await axios.post('http://localhost:3700/secrets', secretBody);
			navigate(`/private/${response.data.id}`);
			setBody('');
			setPassword('');
			setExpiresIn('');
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<section>
			<h1>One Time Secret</h1>
			<p>Paste a password, secret message or private link below.</p>
			<hr />
			<form onSubmit={onCreateSecret}>
				<label htmlFor="secret">Secret</label>
				<input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
				<label htmlFor="password">Password</label>
				<input
					type="text"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<label htmlFor="expiresIn">Expires In</label>
				<input
					type="text"
					value={expiresIn}
					onChange={(e) => setExpiresIn(e.target.value)}
				/>
				<input type="submit" value="Create Secret" />
			</form>
		</section>
	);
};

export default CreateSecret;
