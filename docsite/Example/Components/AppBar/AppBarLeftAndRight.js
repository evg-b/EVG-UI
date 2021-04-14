import React from 'react';
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

