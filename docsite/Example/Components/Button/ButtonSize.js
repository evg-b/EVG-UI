import React from 'react';
import { Button, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const ButtonSize = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Button variant='contained' color='primary' size='small' >small</Button>
            <Button variant='contained' color='primary' size='medium' >medium</Button>
            <Button variant='contained' color='primary' size='large' >large</Button>
            <Button variant='contained' color='primary' size='extra' >extra</Button>
        </div>
    )
}

export default withStyles(styles)(ButtonSize)