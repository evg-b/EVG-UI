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
const BadgeDot = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Badge count={2} >
                <Icon name="Notifications" />
            </Badge>
            <Badge count={2} dot >
                <Icon name="Notifications" />
            </Badge>
        </div>
    )
}

export default withStyles(styles)(BadgeDot)