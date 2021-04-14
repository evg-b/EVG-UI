export default {AppBarBase: `import React from 'react';
import { AppBar } from '@evg-b/evg-ui';

const AppBarBase = () => {
    return (
        <AppBar title='EVG-UI' color='primary' position='static' />
    )
}

export default AppBarBase`,
AppBarColor: `import React, { useState } from 'react';
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

export default withStyles(styles)(AppBarColor)`,
AppBarLeftAndRight: `import React from 'react';
import { AppBar, IconButton } from '@evg-b/evg-ui';
import { Menu, MoreVert, Fullscreen } from '@evg-b/evg-icons';

const AppBarLeftAndRight = () => {
    return (
        <AppBar
            title='EVG-UI left/right'
            position='static'
            color='primary'
            left={<IconButton><Menu /></IconButton>}
            right={
                <>
                    <IconButton><Fullscreen /></IconButton>
                    <IconButton><MoreVert /></IconButton>
                </>
            }
        />
    )
}

export default AppBarLeftAndRight

`,
AppBarTitleCenter: `import React from 'react';
import { AppBar, IconButton } from '@evg-b/evg-ui';
import { Menu } from '@evg-b/evg-icons';

const AppBarTitleCenter = () => {
    return (
        <AppBar
            title='EVG-UI'
            position='static'
            color='primary'
            titleCenter
            left={<IconButton><Menu /></IconButton>}
        />
    )
}

export default AppBarTitleCenter`,
}