import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { bodyState, passwordState, expiresInState } from '../atoms';

const CreateSecret = () => {
	const [body, setBody] = useRecoilState(bodyState);
	const [password, setPassword] = useRecoilState(passwordState);
	const [expiresIn, setExpiresIn] = useRecoilState(expiresInState);
	const navigate = useNavigate();

	const createSecret = async (secretBody) => {
		return await fetch('http://localhost:3700/secrets', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(secretBody),
		})
			.then((res) => res.json())
			.then((data) => data);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const secretBody = { body, password, expiresIn };
			const data = await createSecret(secretBody);
			navigate(`/private/${data.id}`);
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
			<form onSubmit={onSubmit}>
				<div>
					<label htmlFor="secret">Secret</label>
					<input
						type="text"
						value={body}
						onChange={(e) => setBody(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						type="text"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="expiresIn">Expires In</label>
					<select
						name="expiresIn"
						id="expiresIn"
						onChange={(e) => setExpiresIn(e.target.value)}
						value={expiresIn}
					>
						<option value="5 minutes">5 minutes</option>
						<option value="30 minutes">30 minutes</option>
						<option value="1 hour">1 hour</option>
						<option value="1 day">1 day</option>
						<option value="3 days">3 days</option>
						<option value="7 days">7 days</option>
					</select>
				</div>
				<div>
					<input type="submit" value="Create Secret" />
				</div>
			</form>
		</section>
	);
};

export default CreateSecret;
