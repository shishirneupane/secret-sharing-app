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
			if (body && password && expiresIn) {
				const secretBody = { body, password, expiresIn };
				const data = await createSecret(secretBody);
				navigate(`/private/${data.id}`);
				setBody('');
				setPassword('');
				setExpiresIn('');
			} else {
				alert('Please enter all the fields.');
			}
		} catch (err) {
			console.error(err.message);
			alert('Could not create the secret.');
		}
	};

	return (
		<section className="text-center mt-8">
			<h1 className="text-4xl font-bold text-orange-600 my-4">
				One Time Secret
			</h1>

			<p className="my-4">
				Paste a password, secret message or private link below.
			</p>

			<hr />

			<form className="my-4" onSubmit={onSubmit}>
				<div className="my-8">
					<label className="text-lg mr-6 font-bold " htmlFor="secret">
						Secret
					</label>
					<input
						className="ml-10 bg-gray-100 border-2 border-gray-200 rounded py-2 px-4 
						focus:outline-none focus:bg-white focus:border-orange-500"
						type="text"
						value={body}
						onChange={(e) => setBody(e.target.value)}
					/>
				</div>

				<div className="my-8">
					<label className="text-lg font-bold" htmlFor="password">
						Password
					</label>
					<input
						className="ml-10 bg-gray-100 border-2 border-gray-200 rounded py-2 px-4 
						focus:outline-none focus:bg-white focus:border-orange-500"
						type="text"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<div className="my-8">
					<label className="text-lg font-bold " htmlFor="expiresIn">
						Expires In
					</label>
					<select
						className="ml-10 w-52 mr-2 bg-gray-100 border-2 border-gray-200 rounded py-2 px-4 
						focus:outline-none focus:bg-white focus:border-orange-500 "
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

				<div className="my-10">
					<input
						type="submit"
						value="Create Secret"
						className="rounded py-2 px-6 bg-orange-500 text-white border-2 
						border-orange-500 font-bold cursor-pointer text-xl
						hover:bg-white hover:text-orange-500 hover:border-orange-500 hover:outline-none
						focus:bg-white focus:text-orange-500 focus:border-orange-500 focus:outline-none"
					/>
				</div>
			</form>
		</section>
	);
};

export default CreateSecret;
