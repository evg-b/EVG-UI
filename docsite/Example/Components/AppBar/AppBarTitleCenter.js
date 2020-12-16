import React from 'react';
import { AppBar } from '@evg-b/evg-ui';
import { Menu } from '@evg-b/evg-icons';

const AppBarTitleCenter = () => {
    return (
        <AppBar
            title='EVG-UI'
            position='static'
            color='--ifm-color-primary'
            titleCenter
            left={<Menu />}
        />
    )
}

export default AppBarTitleCenter