import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";

const useStyles = makeStyles({
    bold: {
        fontWeight: "bold"
    }
});

export function KeyValueTextElement({ keyName, value, keyStyle, valueStyle }) {
    const classes = useStyles();
    return (
        <div>
            <span className={classes[keyStyle]}>{keyName}</span>:&nbsp;
            <span className={classes[valueStyle]}>{value}</span>
        </div>
    );
}

export function BoldKeyKeyValueTextElement({ keyName, value }) {
    return KeyValueTextElement({ keyName, value, keyStyle: "bold", valueStyle: "none" });
}

export function BoldValueKeyValueTextElement({ keyName, value }) {
    return KeyValueTextElement({ keyName, value, keyStyle: "none", valueStyle: "bold" });
}