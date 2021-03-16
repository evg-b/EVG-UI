import React from 'react';
import { Button, ButtonGroup, withStyles } from '@evg-b/evg-ui';
import {
    Close,
    Menu,
    Notifications,
} from '@evg-b/evg-icons';

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
            <Button><Menu /></Button>
            <Button><Close /></Button>
            <Button><Notifications /></Button>
        </ButtonGroup>
    )
}

export default withStyles(styles)(ButtonGroupIcon)