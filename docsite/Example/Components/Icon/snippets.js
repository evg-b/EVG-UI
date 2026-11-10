export default {IconBase: `import React from 'react';
import { withStyles, Icon } from '@evg-b/evg-ui'


const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const IconBase = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Icon name="ChevronLeft" />
            <Icon name="Close" />
            <Icon name="Check" />
            <Icon name="Cancel" />
            <Icon name="Fullscreen" />
            <Icon name="Menu" />
            <Icon name="MoreVert" />
            <Icon name="ExpandMore" />
            <Icon name="ArrowUpward" />
        </div>
    )
}

export default withStyles(styles)(IconBase)`,
IconColor: `import React from 'react';
import { withStyles, Icon } from '@evg-b/evg-ui'


const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const IconColor = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Icon name="Cancel" color='primary' />
            <Icon name="ChevronLeft" color='warn' />
            <Icon name="Close" color='fail' />
            <Icon name="Check" color='success' />
        </div>
    )
}

export default withStyles(styles)(IconColor)`,
IconSize: `import React from 'react';
import { withStyles, Icon } from '@evg-b/evg-ui'


const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const IconSize = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Icon name="Cancel" size='small' />
            <Icon name="Cancel" size='medium' />
            <Icon name="Cancel" size='large' />
            <Icon name="Cancel" size='extra' />
        </div>
    )
}

export default withStyles(styles)(IconSize)`,
}