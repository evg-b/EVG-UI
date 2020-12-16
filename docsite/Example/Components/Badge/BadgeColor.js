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
const BadgeColor = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Badge count={3} >
                <Notifications />
            </Badge>
            <Badge count={3} color='--ifm-color-primary'>
                <Notifications />
            </Badge>
            <Badge count={3} color='primary'>
                <Notifications />
            </Badge>
            <Badge count={3} color='warn'>
                <Notifications />
            </Badge>
            <Badge count={3} color='success'>
                <Notifications />
            </Badge>
        </div>
    )
}

export default withStyles(styles)(BadgeColor)