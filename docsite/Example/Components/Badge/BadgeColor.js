import React from 'react';
import { Badge, withStyles, Icon } from '@evg-b/evg-ui'


const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const BadgeColor = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Badge count={3} >
                <Icon name="Notifications" />
            </Badge>
            <Badge count={3} color='primary'>
                <Icon name="Notifications" />
            </Badge>
            <Badge count={3} color='warn'>
                <Icon name="Notifications" />
            </Badge>
            <Badge count={3} color='success'>
                <Icon name="Notifications" />
            </Badge>
        </div>
    )
}

export default withStyles(styles)(BadgeColor)