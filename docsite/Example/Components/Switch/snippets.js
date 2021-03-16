export default {SwitchBase: `import React from 'react';
import { Switch, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '10px'
        }
    }
}
const SwitchBase = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Switch />
            <Switch defaultChecked />
            <Switch checked />
            <Switch disabled checked />
        </div>
    )
}

export default withStyles(styles)(SwitchBase)`,
SwitchColor: `import React from 'react';
import { Switch, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const SwitchColor = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Switch color="default" defaultChecked />
            <Switch color="primary" defaultChecked />
            <Switch color="warn" defaultChecked />
            <Switch color="success" defaultChecked />
            <Switch color="fail" defaultChecked />
        </div>
    )
}

export default withStyles(styles)(SwitchColor)`,
SwitchSize: `import React from 'react';
import { Switch, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const SwitchSize = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Switch size='small' color="primary" defaultChecked />
            <Switch size='medium' color="primary" defaultChecked />
            <Switch size='large' color="primary" defaultChecked />
            <Switch size='extra' color="primary" defaultChecked />
        </div>
    )
}

export default withStyles(styles)(SwitchSize)`,
SwitchVariant: `import React from 'react';
import { Switch, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const SwitchVariant = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Switch />
            <Switch />
            <Switch />
        </div>
    )
}

export default withStyles(styles)(SwitchVariant)`,
}