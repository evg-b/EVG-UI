import React from 'react';
import { Button, ButtonGroup, withStyles, Icon } from '@evg-b/evg-ui'


const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const ButtonGroupIcon = (props) => {
    const { classes } = props
    return (
        <ButtonGroup>
            <Button><Icon name="Menu" /></Button>
            <Button><Icon name="Close" /></Button>
            <Button><Icon name="Notifications" /></Button>
        </ButtonGroup>
    )
}

export default withStyles(styles)(ButtonGroupIcon)