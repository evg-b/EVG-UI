import React, { useState } from 'react';
import { AppBar, Radio, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flex: '1 0 auto',
        flexDirection: 'column',
        alignItems: 'center',
    },
}

const AppBarColor = (props) => {
    const { classes } = props
    const [color, setColor] = useState('default')

    const handleChange = (e) => {
        setColor(e.target.name)
    }

    return (
        <div className={classes.base}>
            <AppBar title='EVG-UI Color' color={color} position='static' />
            <div>
                <Radio onChange={handleChange} checked={color === 'default'} name="default" color='default' />
                <Radio onChange={handleChange} checked={color === 'red700'} name="red700" color='red700' />
                <Radio onChange={handleChange} checked={color === 'primary'} name="primary" color='primary' />
            </div>
        </div>
    )
}

export default withStyles(styles)(AppBarColor)