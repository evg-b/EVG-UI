import React from 'react';
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

