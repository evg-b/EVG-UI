import React from 'react';
import { AppBar, IconButton, Icon } from '@evg-b/evg-ui'


const AppBarLeftAndRight = () => {
    return (
        <AppBar
            title='EVG-UI left/right'
            position='static'
            color='primary'
            left={<IconButton><Icon name="Menu" /></IconButton>}
            right={
                <>
                    <IconButton><Icon name="Fullscreen" /></IconButton>
                    <IconButton><Icon name="MoreVert" /></IconButton>
                </>
            }
        />
    )
}

export default AppBarLeftAndRight

