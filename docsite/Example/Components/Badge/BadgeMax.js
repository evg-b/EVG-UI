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
const BadgeMax = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Badge count={1000} max={9} >
                <Icon name="Notifications" />
            </Badge>
            <Badge count={1000} max={99} >
                <Icon name="Notifications" />
            </Badge>
            <Badge count={1000} max={999} >
                <Icon name="Notifications" />
            </Badge>
        </div>
    )
}

export default withStyles(styles)(BadgeMax)