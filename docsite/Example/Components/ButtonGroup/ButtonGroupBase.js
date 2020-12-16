import React from 'react';
import { withStyles } from 'react-jss';
import { Button, ButtonGroup } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const ButtonGroupBase = (props) => {
    const { classes } = props
    return (
        <ButtonGroup variant='contained' color='--ifm-color-primary'>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
        </ButtonGroup>
    )
}

export default withStyles(styles)(ButtonGroupBase)