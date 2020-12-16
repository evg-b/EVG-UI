import React from 'react';
import { withStyles } from 'react-jss';
import { AppBar } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
    },
}

const AppBarColor = (props) => {
    const {
        classes,
    } = props

    return (
        <div className={classes.base}>
            <AppBar title='EVG-UI' color='default' position='static' />
            <AppBar title='EVG-UI' color='primary' position='static' />
            <AppBar title='EVG-UI' color='warn' position='static' />
            <AppBar title='EVG-UI' color='success' position='static' />
            <AppBar title='EVG-UI' color='fail' position='static' />
        </div>
    )
}

export default withStyles(styles)(AppBarColor)