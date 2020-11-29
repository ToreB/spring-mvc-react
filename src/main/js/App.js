import { blue, red } from "@material-ui/core/colors";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import React from 'react';
import Footer from './Footer';
import Header from "./Header";

class App extends React.Component {

    render() {
        const { username, buildProperties, links } = this.props;

        const properties = [];

        for (var key in buildProperties) {
            if (buildProperties.hasOwnProperty(key)) {
                properties.push(<li key={key}>{key}: {buildProperties[key]}</li>);
            }
        }

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
                    <h1>Greetings, {username}! :)</h1>

                    <ul>
                        {properties}
                    </ul>
                </main>

                <Footer buildProperties={buildProperties} />
            </ThemeProvider>
        );
    }
}

export default App;