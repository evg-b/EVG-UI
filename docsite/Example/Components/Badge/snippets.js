export default {BadgeBase: `import React from 'react';
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
const BadgeBase = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Icon name="Notifications" />
            <Badge count={3} color='primary' >
                <Icon name="Notifications" />
            </Badge>
        </div>
    )
}

export default withStyles(styles)(BadgeBase)`,
BadgeCircle: `import React from 'react';
import { Avatar, Badge, withStyles } from '@evg-b/evg-ui';

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

export default withStyles(styles)(BadgeDot)`,
BadgeColor: `import React from 'react';
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

export default withStyles(styles)(BadgeColor)`,
BadgeDot: `import React from 'react';
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

export default withStyles(styles)(BadgeDot)`,
BadgeMax: `import React from 'react';
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

export default withStyles(styles)(BadgeMax)`,
BadgeRipe: `import React from 'react';
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
const BadgeRipe = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Badge count={3}>
                <Icon name="Notifications" />
            </Badge>
            <Badge ripe count={3} />
        </div>
    )
}

export default withStyles(styles)(BadgeRipe)`,
}