export default {
'TextFieldBase' : `import React from 'react';
import { withStyles } from 'react-jss';
import { TextField } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const TextFieldBase = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <TextField labelText='Base TextField' placeholder='placeholder' />
            <TextField disabled labelText='Disabled' placeholder='placeholder' value="Disabled" />
        </div>
    )
}

export default withStyles(styles)(TextFieldBase)`,'TextFieldColor' : `import React from 'react';
import { withStyles } from 'react-jss';
import { TextField } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const TextFieldColor = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <TextField color='--ifm-color-primary' labelText='css var' placeholder='placeholder' />
            <TextField color='primary' labelText='primary' placeholder='placeholder' />
            <TextField color='fail' labelText='fail' placeholder='placeholder' outlined />
        </div>
    )
}

export default withStyles(styles)(TextFieldColor)`,'TextFieldError' : `import React from 'react';
import { withStyles } from 'react-jss';
import { TextField } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const TextFieldError = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <TextField error helperText='Error helper text' labelText='Error' placeholder='placeholder' color='primary' value='Error' />
            <TextField error outlined labelText='Error' placeholder='placeholder' color='primary' value='Error' />
        </div>
    )
}

export default withStyles(styles)(TextFieldError)`,'TextFieldFullWidth' : `import React from 'react';
import { withStyles } from 'react-jss';
import { TextField } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const TextFieldFullWidth = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <TextField fullWidth labelText='multiline fullWidth' placeholder='placeholder' color='primary' />
            <TextField fullWidth labelText='multiline fullWidth' placeholder='placeholder' color='primary' outlined />
        </div>
    )
}

export default withStyles(styles)(TextFieldFullWidth)`,'TextFieldHelperText' : `import React from 'react';
import { withStyles } from 'react-jss';
import { TextField } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const TextFieldHelperText = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <TextField helperText='helperText' labelText='helperText' placeholder='placeholder' color='primary' />
        </div>
    )
}

export default withStyles(styles)(TextFieldHelperText)`,'TextFieldIcon' : `import React from 'react';
import { withStyles } from 'react-jss';
import { TextField } from '@evg-b/evg-ui';
import { Close, Check } from '@evg-b/evg-icons';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*,&>div>*': {
            margin: '10px'
        }
    }
}
const TextFieldIcon = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <div>
                <TextField leadingIcon={<Check />} labelText='TextField' placeholder='placeholder' color='primary' />
                <TextField trailingIcon={<Close />} labelText='TextField' placeholder='placeholder' color='primary' />
                <TextField leadingIcon={<Check />} trailingIcon={<Close />} labelText='TextField' placeholder='placeholder' color='primary' />
            </div>
            <div>
                <TextField leadingIcon={<Check />} labelText='TextField outlined' placeholder='placeholder' color='primary' outlined />
                <TextField trailingIcon={<Close />} labelText='TextField outlined' placeholder='placeholder' color='primary' outlined />
                <TextField leadingIcon={<Check />} trailingIcon={<Close />} labelText='TextField outlined' placeholder='placeholder' color='primary' outlined />
            </div>
        </div>
    )
}

export default withStyles(styles)(TextFieldIcon)`,'TextFieldMaxCount' : `import React from 'react';
import { withStyles } from 'react-jss';
import { TextField } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const TextFieldMaxCount = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <TextField maxCount={5} helperText='maxCount' labelText='maxCount' placeholder='placeholder' color='primary' />
        </div>
    )
}

export default withStyles(styles)(TextFieldMaxCount)`,'TextFieldMultiline' : `import React from 'react';
import { withStyles } from 'react-jss';
import { TextField } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*,&>div>*': {
            margin: '10px'
        }
    },
}
const TextFieldMultiline = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <div>
                <TextField multiline labelText='multiline base' placeholder='placeholder' color='primary' />
                <TextField rows={4} multiline labelText='multiline base' placeholder='placeholder' color='primary' />
            </div>
            <div>
                <TextField multiline labelText='multiline outlined' placeholder='placeholder' color='primary' outlined />
                <TextField rows={4} multiline labelText='multiline outlined' placeholder='placeholder' color='primary' outlined />
            </div>
        </div>
    )
}

export default withStyles(styles)(TextFieldMultiline)`,'TextFieldOutlined' : `import React from 'react';
import { withStyles } from 'react-jss';
import { TextField } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const TextFieldOutlined = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <TextField labelText='Outlined' placeholder='Outlined' outlined />
            <TextField disabled labelText='Disabled' placeholder='Outlined' outlined value="Disabled" />
        </div>
    )
}

export default withStyles(styles)(TextFieldOutlined)`,'TextFieldPlaceholderAndLabelText' : `import React from 'react';
import { withStyles } from 'react-jss';
import { TextField } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const TextFieldPlaceholderAndLabelText = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <TextField />
            <TextField labelText='labelText' />
            <TextField placeholder='placeholder' />
        </div>
    )
}

export default withStyles(styles)(TextFieldPlaceholderAndLabelText)`,'TextFieldRound' : `import React from 'react';
import { withStyles } from 'react-jss';
import { TextField } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const TextFieldRound = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <TextField round labelText='round base' placeholder='placeholder' color='primary' />
            <TextField round labelText='round outlined' placeholder='placeholder' color='primary' outlined />
        </div>
    )
}

export default withStyles(styles)(TextFieldRound)`,
}