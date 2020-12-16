import React from 'react';
import { withStyles } from 'react-jss';
import { Avatar, Badge } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const BadgeDot = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Badge count={2} >
                <Avatar />
            </Badge>
            <Badge count={2} dot>
                <Avatar />
            </Badge>
            <Badge count={2} circle >
                <Avatar />
            </Badge>
            <Badge count={2} dot circle >
                <Avatar />
            </Badge>
        </div>
    )
}

export default withStyles(styles)(BadgeDot)