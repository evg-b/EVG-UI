export default {
'IconBase' : `import React from 'react';
import { withStyles } from 'react-jss';
import {
    ChevronLeft,
    Check,
    Close,
    Cancel,
    Menu,
    Fullscreen,
    MoreVert,
    ExpandMore,
    ArrowUpward,
} from '@evg-b/evg-icons';

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
            <ChevronLeft />
            <Close />
            <Check />
            <Cancel />
            <Fullscreen />
            <Menu />
            <MoreVert />
            <ExpandMore />
            <ArrowUpward />
        </div>
    )
}

export default withStyles(styles)(IconBase)`,'IconColor' : `import React from 'react';
import { withStyles } from 'react-jss';
import {
    ChevronLeft,
    Check,
    Close,
    Cancel,
    Visibility,
} from '@evg-b/evg-icons';

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
            <ChevronLeft color='warn' />
            <Close color='fail' />
            <Check color='success' />
            <Cancel color='primary' />
            <Visibility color='--ifm-color-primary' />
        </div>
    )
}

export default withStyles(styles)(IconColor)`,'IconSize' : `import React from 'react';
import { withStyles } from 'react-jss';
import { Cancel } from '@evg-b/evg-icons';

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
            <Cancel size='small' />
            <Cancel size='medium' />
            <Cancel size='large' />
            <Cancel size='extra' />
        </div>
    )
}

export default withStyles(styles)(IconSize)`,
}