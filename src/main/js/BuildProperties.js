import PropTypes from 'prop-types'
import React from 'react';
import { BoldKeyKeyValueTextElement } from "./KeyValueTextElement";

function BuildProperties({ buildProperties }) {

    const properties = [];
    for (let key in buildProperties) {
        if (buildProperties.hasOwnProperty(key)) {
            properties.push(
                <li key={key}>
                    <BoldKeyKeyValueTextElement keyName={key} value={buildProperties[key]} />
                </li>
            );
        }
    }

    return (
        <>
            <h2>Build properties</h2>
            <ul>
                {properties}
            </ul>
        </>
    )
}

BuildProperties.propTypes = {
    buildProperties: PropTypes.shape({
        name: PropTypes.string,
        version: PropTypes.string,
        time: PropTypes.string,
        group: PropTypes.string,
        artifact: PropTypes.string
    })
}

export default BuildProperties;