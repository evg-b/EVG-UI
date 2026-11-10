import React from 'react';
import { AppBar, IconButton, Icon } from '@evg-b/evg-ui'


const AppBarTitleCenter = () => {
    return (
        <AppBar
            title='EVG-UI'
            position='static'
            color='primary'
            titleCenter
            left={<IconButton><Icon name="Menu" /></IconButton>}
        />
    )
}

export default AppBarTitleCenter