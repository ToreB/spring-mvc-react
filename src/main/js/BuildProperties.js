import React from 'react';

function BuildProperties({ buildProperties }) {

    let properties = [];
    for (let key in buildProperties) {
        if (buildProperties.hasOwnProperty(key)) {
            properties.push(<li key={key}>{key}: {buildProperties[key]}</li>);
        }
    }

    return (
        <ul>
            {properties}
        </ul>
    )
}

export default BuildProperties;