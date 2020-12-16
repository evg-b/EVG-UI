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
const ButtonGroupVariant = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <ButtonGroup variant='text'>
                <Button>default 1</Button>
                <Button>default 2</Button>
                <Button>default 3</Button>
            </ButtonGroup>
            <ButtonGroup variant='contained' color='--ifm-color-primary'>
                <Button>contained 1</Button>
                <Button>contained 2</Button>
                <Button>contained 3</Button>
            </ButtonGroup>
            <ButtonGroup variant='outlined' color='--ifm-color-primary'>
                <Button>outlined 1</Button>
                <Button>outlined 2</Button>
                <Button>outlined 3</Button>
            </ButtonGroup>
        </div>
    )
}

export default withStyles(styles)(ButtonGroupVariant)