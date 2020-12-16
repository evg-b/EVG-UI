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
const ButtonGroupColor = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <ButtonGroup variant='text' color='--ifm-color-primary'>
                <Button>primary 1</Button>
                <Button>primary 2</Button>
            </ButtonGroup>
            <ButtonGroup variant='contained' color='success'>
                <Button>success 1</Button>
                <Button>success 2</Button>
            </ButtonGroup>
            <ButtonGroup variant='outlined' color='fail'>
                <Button>fail 1</Button>
                <Button>fail 2</Button>
            </ButtonGroup>
        </div>
    )
}

export default withStyles(styles)(ButtonGroupColor)