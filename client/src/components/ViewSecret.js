import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewSecret = () => {
	const [password, setPassword] = useState('');
	const [validPassword, setValidPassword] = useState('');
	const { id } = useParams();

	const checkPassword = async (password) => {
		const res = await fetch(`http://localhost:3700/private/${id}`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ password }),
		});
		const data = await res.json();
		setValidPassword(data);
	};

	return (
		<section>
			<h1>This message requires a passphrase:</h1>
			<input
				type="text"
				placeholder="Enter the passphrase here"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={() => checkPassword(password)}>View Secret</button>
			<h3>{validPassword}</h3>
		</section>
	);
};

export default ViewSecret;
