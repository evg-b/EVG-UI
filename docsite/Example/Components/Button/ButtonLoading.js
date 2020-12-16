import React from 'react';
import { withStyles } from 'react-jss';
import { Button } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const ButtonLoading = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Button>text</Button>
        </div>
    )
}

export default withStyles(styles)(ButtonLoading)