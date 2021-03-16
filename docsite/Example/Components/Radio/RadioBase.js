import React from 'react';
import { Radio, withStyles } from '@evg-b/evg-ui';

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