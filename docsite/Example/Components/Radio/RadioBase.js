import React from 'react';
import { withStyles } from 'react-jss';
import { Radio } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const RadioBase = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Radio />
            <Radio defaultChecked />
            <Radio disabled />
        </div>
    )
}

export default withStyles(styles)(RadioBase)