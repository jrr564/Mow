import React from 'react';
import Paper from 'material-ui/Paper';
import AvatarExampleSimple from "./avatar.js"


const style = {
    height: 400,
    width: "auto",
    margin: "0 auto",
    textAlign: 'center',
    display: 'block '
};

const PaperExampleSimple2 = () => (
    <div>

        <Paper
            style={style}
            zDepth={1}>
            <h2>What customers say about us</h2>
            <AvatarExampleSimple />
        </Paper>

    </div>
);

export default PaperExampleSimple2;