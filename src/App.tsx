import React from 'react';
import './App.css';
import Stars from './components/Stars';
import { getRandomIntInclusive } from './components/getRandomIntInclusive';


function App() {
	return (
		<>
			<Stars count={getRandomIntInclusive(1, 5)} />
		</>
	);
}

export default App;
