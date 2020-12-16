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
const BadgeBase = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Notifications />
            <Badge count={3} color='--ifm-color-primary' >
                <Notifications />
            </Badge>
        </div>
    )
}

export default withStyles(styles)(BadgeBase)