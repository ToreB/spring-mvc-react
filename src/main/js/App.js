import React from 'react'

class App extends React.Component {

    render() {
        const {username, buildProperties} = this.props;

        const properties = [];

        for (var key in buildProperties) {
            if (buildProperties.hasOwnProperty(key)) {
                properties.push(<li key={key}>{key}: {buildProperties[key]}</li>);
            }
        }
        return (
            <React.Fragment>
                <div className="container">
                    <h1>Greetings, {username}! :)</h1>

                    <ul>
                        {properties}
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default App