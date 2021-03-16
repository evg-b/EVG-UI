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
const BadgeRipe = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Badge count={3}>
                <Notifications />
            </Badge>
            <Badge ripe count={3} />
        </div>
    )
}

export default withStyles(styles)(BadgeRipe)