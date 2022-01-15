import { useRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import { passwordState, validPasswordState } from '../atoms';

const ViewSecret = () => {
	const [password, setPassword] = useRecoilState(passwordState);
	const [validPassword, setValidPassword] = useRecoilState(validPasswordState);
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
