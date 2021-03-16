export default {CheckboxBase: `import React from 'react';
import { Checkbox, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const CheckboxBase = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Checkbox />
            <Checkbox defaultChecked />
            <Checkbox checked />
            <Checkbox defaultChecked disabled />
            <Checkbox defaultChecked indeterminate />
        </div>
    )
}

export default withStyles(styles)(CheckboxBase)`,
CheckboxColor: `import React from 'react';
import { Checkbox, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const CheckboxColor = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Checkbox color="default" defaultChecked />
            <Checkbox color="primary" defaultChecked />
            <Checkbox color="warn" defaultChecked />
            <Checkbox color="success" defaultChecked />
            <Checkbox color="fail" defaultChecked />
        </div>
    )
}

export default withStyles(styles)(CheckboxColor)`,
CheckboxSize: `import React from 'react';
import { Checkbox, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        '&>*': {
            margin: '5px'
        }
    }
}
const CheckboxSize = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Checkbox size='small' color="primary" defaultChecked />
            <Checkbox size='medium' color="primary" defaultChecked />
            <Checkbox size='large' color="primary" defaultChecked />
            <Checkbox size='extra' color="primary" defaultChecked />
        </div>
    )
}

export default withStyles(styles)(CheckboxSize)`,
}