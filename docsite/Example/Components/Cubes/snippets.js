export default {
'CubesBase' : `import React from 'react';
import { Cubes } from '@evg-b/evg-ui';

const CubesBase = () => {
    return (
        <div style={{ width: 300, height: 300 }}>
            <Cubes />
        </div>
    )
}

export default CubesBase`,'CubesSettings' : `import React from 'react';
import { withStyles } from 'react-jss';
import { Cubes } from '@evg-b/evg-ui';

const styles = {
    base: {
        width: '600px',
        height: '400px',
    }
}
const CubesSettings = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Cubes />
        </div>
    )
}

export default withStyles(styles)(CubesSettings)`,
}