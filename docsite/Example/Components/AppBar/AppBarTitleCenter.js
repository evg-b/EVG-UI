import React from 'react';
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

export default AppBarTitleCenter