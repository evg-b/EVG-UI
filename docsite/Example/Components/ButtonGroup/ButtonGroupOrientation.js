import React from 'react';
import { withStyles } from 'react-jss';
import { Button, ButtonGroup } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '&>*': {
            margin: '5px'
        }
    }
}
const ButtonGroupOrientation = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <ButtonGroup orientation='horizontal' variant='contained' color='--ifm-color-primary'>
                <Button>horizont 1</Button>
                <Button>horizont 2</Button>
            </ButtonGroup>
            <ButtonGroup orientation='vertical' variant='contained' color='--ifm-color-primary'>
                <Button>vertical 1</Button>
                <Button>vertical 2</Button>
            </ButtonGroup>
        </div>
    )
}

export default withStyles(styles)(ButtonGroupOrientation)