import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "../styles/globals.css"; // Import your global CSS
const theme = createTheme(); // You can customize this theme

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline /> {/* Resets CSS and applies the theme */}
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
