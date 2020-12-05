import { blue, red } from "@material-ui/core/colors";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import React from 'react';
import BuildProperties from "./BuildProperties";
import Footer from './Footer';
import Greetings from "./Greetings";
import Header from "./Header";

function App({ username, buildProperties, links }) {

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: red[500]
            },
            secondary: {
                main: blue[500]
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Header appName={buildProperties.name} username={username} logoutLink={links.logout} />

            <main>
                <Greetings username={username} />

                <BuildProperties buildProperties={buildProperties} />
            </main>

            <Footer buildProperties={buildProperties} />
        </ThemeProvider>
    );
}

export default App;