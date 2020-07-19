import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { grey, blue, red } from '@material-ui/core/colors';
import Login from './views/Login.js';

const theme = createMuiTheme({
	palette:{
		primary: grey,
		secondary: blue,
		danger: red,
	}
});

function App() {
	return (
		<ThemeProvider theme={theme} >
			<Login />
		</ThemeProvider>
	);
}

export default App;
