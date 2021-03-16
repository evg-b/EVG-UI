export default {AppBarBase: `import React from 'react';
import { AppBar } from '@evg-b/evg-ui';

const AppBarBase = () => {
    return (
        <AppBar title='EVG-UI' color='primary' position='static' />
    )
}

export default AppBarBase`,
AppBarColor: `import React from 'react';
import { AppBar, withStyles } from '@evg-b/evg-ui';

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

export default withStyles(styles)(AppBarColor)`,
AppBarLeftAndRight: `import React from 'react';
import { AppBar } from '@evg-b/evg-ui';
import { Menu, MoreVert, Fullscreen } from '@evg-b/evg-icons';

const AppBarLeftAndRight = () => {
    return (
        <AppBar
            title='EVG-UI left/right'
            position='static'
            color='primary'
            left={<Menu />}
            right={
                <>
                    <Fullscreen />
                    <MoreVert />
                </>
            }
        />
    )
}

export default AppBarLeftAndRight

`,
AppBarTitleCenter: `import React from 'react';
import { AppBar } from '@evg-b/evg-ui';
import { Menu } from '@evg-b/evg-icons';

const AppBarTitleCenter = () => {
    return (
        <AppBar
            title='EVG-UI'
            position='static'
            color='primary'
            titleCenter
            left={<Menu />}
        />
    )
}

export default AppBarTitleCenter`,
}