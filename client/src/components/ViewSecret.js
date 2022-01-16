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
		<section className="text-center mt-8">
			<h1 className="text-4xl font-bold text-orange-600 my-4">
				This message requires a passphrase:
			</h1>

			<input
				className="block mt-8 w-1/4 m-auto text-center bg-gray-100 border-2 border-gray-200 rounded py-3 px-4 
						focus:outline-none focus:bg-white focus:border-orange-500"
				type="text"
				placeholder="Enter the passphrase here"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>

			<button
				className="block m-auto w-1/6 my-8 rounded py-2 px-4 bg-orange-500 text-white border-2 
						border-orange-500 font-bold cursor-pointer text-xl
						hover:bg-white hover:text-orange-500 hover:border-orange-500 hover:outline-none
						focus:bg-white focus:text-orange-500 focus:border-orange-500 focus:outline-none"
				onClick={() => checkPassword(password)}
			>
				View Secret
			</button>

			<hr />

			<h3 className="border-2 border-orange-500 p-4 rounded-2xl font-bold text-lg w-1/2 m-auto mt-8">
				Secret Message will be shown below:
				<hr className="my-4" />
				{validPassword}
			</h3>
		</section>
	);
};

export default ViewSecret;
