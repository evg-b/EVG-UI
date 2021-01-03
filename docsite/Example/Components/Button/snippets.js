export default {
'ButtonBase' : `import React from 'react';
import { withStyles } from 'react-jss';
import { Button } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const ButtonBase = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Button>text</Button>
            <Button variant='contained' color='--ifm-color-primary' >contained</Button>
            <Button variant='contained' color='--ifm-color-primary' disabled>disabled</Button>
            <Button variant='contained' href="#base-button">Link</Button>
        </div>
    )
}

export default withStyles(styles)(ButtonBase)`,'ButtonColor' : `import React from 'react';
import { withStyles } from 'react-jss';
import { Button } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const ButtonColor = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Button >text</Button>
            <Button color='--ifm-color-primary'>css Var</Button>
            <Button color='primary'>primary</Button>
            <Button color='warn'>warn</Button>
            <Button color='success'>success</Button>
            <Button color='fail'>fail</Button>
        </div>
    )
}

export default withStyles(styles)(ButtonColor)`,'ButtonElevation' : `import React from 'react';
import { withStyles } from 'react-jss';
import { Button } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const ButtonElevation = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Button variant='contained' color='--ifm-color-primary'>elevation</Button>
            <Button variant='contained' color='--ifm-color-primary' elevation={false}>no elevation</Button>
        </div>
    )
}

export default withStyles(styles)(ButtonElevation)`,'ButtonIconButton' : `import React from 'react';
import { withStyles } from 'react-jss';
import { IconButton } from '@evg-b/evg-ui';
import {
    Close,
    Cancel,
    Menu,
    Visibility,
    Fullscreen,
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
const ButtonIconButton = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <IconButton><Close /></IconButton>
            <IconButton color='--ifm-color-primary'><Cancel /></IconButton>
            <IconButton color='warn'><Menu /></IconButton>
            <IconButton color='success'><Fullscreen /></IconButton>
            <IconButton disabled><Visibility /></IconButton>
        </div>
    )
}

export default withStyles(styles)(ButtonIconButton)`,'ButtonLoading' : `import React from 'react';
import { withStyles } from 'react-jss';
import { Button } from '@evg-b/evg-ui';
import { Check } from '@evg-b/evg-icons';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const ButtonLoading = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Button loading variant='contained' color='--ifm-color-primary' startIcon={<Check />}>loading</Button>
            <Button loading variant='contained' color='--ifm-color-primary'>loading</Button>
        </div>
    )
}

export default withStyles(styles)(ButtonLoading)`,'ButtonRound' : `import React from 'react';
import { withStyles } from 'react-jss';
import { Button } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const ButtonRound = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Button variant='text' color='--ifm-color-primary' round >default</Button>
            <Button variant='contained' color='--ifm-color-primary' round >contained</Button>
            <Button variant='outlined' color='--ifm-color-primary' round >outlined</Button>
        </div>
    )
}

export default withStyles(styles)(ButtonRound)`,'ButtonSize' : `import React from 'react';
import { withStyles } from 'react-jss';
import { Button } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const ButtonSize = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Button variant='contained' color='--ifm-color-primary' size='small' >small</Button>
            <Button variant='contained' color='--ifm-color-primary' size='medium' >medium</Button>
            <Button variant='contained' color='--ifm-color-primary' size='large' >large</Button>
            <Button variant='contained' color='--ifm-color-primary' size='extra' >extra</Button>
        </div>
    )
}

export default withStyles(styles)(ButtonSize)`,'ButtonStartIconAndEndIcon' : `import React from 'react';
import { withStyles } from 'react-jss';
import { Button } from '@evg-b/evg-ui';
import { Check, Cancel } from '@evg-b/evg-icons';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const ButtonStartIconAndEndIcon = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Button
                startIcon={<Check />}
            >
                default
            </Button>
            <Button
                variant='contained'
                color='--ifm-color-primary'
                endIcon={<Cancel />}
            >
                Button
            </Button>
            <Button
                variant='outlined'
                color='fail'
                round
                startIcon={<Check />}
                endIcon={<Cancel />}
            >
                outlined
            </Button>
        </div>
    )
}

export default withStyles(styles)(ButtonStartIconAndEndIcon)`,'ButtonUppercase' : `import React from 'react';
import { Button } from '@evg-b/evg-ui';

const ButtonUppercase = () => {
    return (
        <Button
            variant='contained'
            color='--ifm-color-primary'
            uppercase={false}
        >
            Uppercase
        </Button>
    )
}

export default ButtonUppercase`,'ButtonVariant' : `import React from 'react';
import { withStyles } from 'react-jss';
import { Button } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const ButtonVariant = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Button variant='text' color='--ifm-color-primary'>default</Button>
            <Button variant='contained' color='--ifm-color-primary'>Button</Button>
            <Button variant='outlined' color='--ifm-color-primary'>outlined</Button>
        </div>
    )
}

export default withStyles(styles)(ButtonVariant)`,
}