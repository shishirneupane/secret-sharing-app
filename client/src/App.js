import { Routes, Route } from 'react-router-dom';
import CreateSecret from './components/CreateSecret';
import SecretLink from './components/SecretLink';
import ViewSecret from './components/ViewSecret';

function App() {
	return (
		<main className="App">
			<Routes>
				<Route path="/" element={<CreateSecret />} />
				<Route path="/private/:id" element={<SecretLink />} />
				<Route path="/secret/:id" element={<ViewSecret />} />
			</Routes>
		</main>
	);
}

export default App;
