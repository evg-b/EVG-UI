import React from 'react';
import { Button, ButtonGroup, withStyles } from '@evg-b/evg-ui';

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
const ButtonGroupSize = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <ButtonGroup size='small' variant='contained' color='primary'>
                <Button>small 1</Button>
                <Button>small 2</Button>
                <Button>small 3</Button>
            </ButtonGroup>
            <ButtonGroup variant='contained' color='primary'>
                <Button>medium 1</Button>
                <Button>medium 2</Button>
                <Button>medium 3</Button>
            </ButtonGroup>
            <ButtonGroup size='large' variant='contained' color='primary'>
                <Button>large 1</Button>
                <Button>large 2</Button>
                <Button>large 3</Button>
            </ButtonGroup>
        </div>
    )
}

export default withStyles(styles)(ButtonGroupSize)