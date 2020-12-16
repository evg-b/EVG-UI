import React from 'react';
import { withStyles } from 'react-jss';
import { Radio } from '@evg-b/evg-ui';

const styles = {
    base: {
        '&>*': {
            margin: '5px'
        }
    }
}
const RadioSize = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Radio size='small' color="--ifm-color-primary" />
            <Radio size='medium' color="--ifm-color-primary" />
            <Radio size='large' color="--ifm-color-primary" />
            <Radio size='extra' color="--ifm-color-primary" />
        </div>
    )
}

export default withStyles(styles)(RadioSize)