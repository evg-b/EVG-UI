import React from 'react';
import { withStyles } from 'react-jss';
import { Loader } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const LoaderColor = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Loader color="--ifm-color-primary" />
            <Loader />
            <Loader color='primary' />
        </div>
    )
}

export default withStyles(styles)(LoaderColor)