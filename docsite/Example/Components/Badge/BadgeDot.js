import React from 'react';
import { withStyles } from 'react-jss';
import { Badge } from '@evg-b/evg-ui';
import { Notifications } from '@evg-b/evg-icons'

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
                <Notifications />
            </Badge>
            <Badge count={2} dot >
                <Notifications />
            </Badge>
        </div>
    )
}

export default withStyles(styles)(BadgeDot)