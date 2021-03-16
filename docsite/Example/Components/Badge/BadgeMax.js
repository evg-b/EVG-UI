import React from 'react';
import { Badge, withStyles } from '@evg-b/evg-ui';
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
const BadgeMax = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Badge count={1000} max={9} >
                <Notifications />
            </Badge>
            <Badge count={1000} max={99} >
                <Notifications />
            </Badge>
            <Badge count={1000} max={999} >
                <Notifications />
            </Badge>
        </div>
    )
}

export default withStyles(styles)(BadgeMax)