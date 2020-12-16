export default {
'ButtonGroupBase' : `import React from 'react';
import { withStyles } from 'react-jss';
import { Button, ButtonGroup } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const ButtonGroupBase = (props) => {
    const { classes } = props
    return (
        <ButtonGroup variant='contained' color='--ifm-color-primary'>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
        </ButtonGroup>
    )
}

export default withStyles(styles)(ButtonGroupBase)`,'ButtonGroupColor' : `import React from 'react';
import { withStyles } from 'react-jss';
import { Button, ButtonGroup } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '&>*': {
            margin: '5px'
        }
    }
}
const ButtonGroupColor = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <ButtonGroup variant='text' color='--ifm-color-primary'>
                <Button>primary 1</Button>
                <Button>primary 2</Button>
            </ButtonGroup>
            <ButtonGroup variant='contained' color='success'>
                <Button>success 1</Button>
                <Button>success 2</Button>
            </ButtonGroup>
            <ButtonGroup variant='outlined' color='fail'>
                <Button>fail 1</Button>
                <Button>fail 2</Button>
            </ButtonGroup>
        </div>
    )
}

export default withStyles(styles)(ButtonGroupColor)`,'ButtonGroupOrientation' : `import React from 'react';
import { withStyles } from 'react-jss';
import { Button, ButtonGroup } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '&>*': {
            margin: '5px'
        }
    }
}
const ButtonGroupOrientation = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <ButtonGroup orientation='horizontal' variant='contained' color='--ifm-color-primary'>
                <Button>horizont 1</Button>
                <Button>horizont 2</Button>
            </ButtonGroup>
            <ButtonGroup orientation='vertical' variant='contained' color='--ifm-color-primary'>
                <Button>vertical 1</Button>
                <Button>vertical 2</Button>
            </ButtonGroup>
        </div>
    )
}

export default withStyles(styles)(ButtonGroupOrientation)`,'ButtonGroupRound' : `import React from 'react';
import { withStyles } from 'react-jss';
import { Button, ButtonGroup } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '&>*': {
            margin: '5px'
        }
    }
}
const ButtonGroupRound = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <ButtonGroup round variant='text' color='--ifm-color-primary'>
                <Button>primary 1</Button>
                <Button>primary 2</Button>
            </ButtonGroup>
            <ButtonGroup round variant='contained' color='success'>
                <Button>success 1</Button>
                <Button>success 2</Button>
            </ButtonGroup>
            <ButtonGroup round variant='outlined' color='fail'>
                <Button>fail 1</Button>
                <Button>fail 2</Button>
            </ButtonGroup>
        </div>
    )
}

export default withStyles(styles)(ButtonGroupRound)`,'ButtonGroupSize' : `import React from 'react';
import { withStyles } from 'react-jss';
import { Button, ButtonGroup } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '&>*': {
            margin: '5px'
        }
    }
}
const ButtonGroupSize = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <ButtonGroup size='small' variant='contained' color='--ifm-color-primary'>
                <Button>small 1</Button>
                <Button>small 2</Button>
                <Button>small 3</Button>
            </ButtonGroup>
            <ButtonGroup variant='contained' color='--ifm-color-primary'>
                <Button>medium 1</Button>
                <Button>medium 2</Button>
                <Button>medium 3</Button>
            </ButtonGroup>
            <ButtonGroup size='large' variant='contained' color='--ifm-color-primary'>
                <Button>large 1</Button>
                <Button>large 2</Button>
                <Button>large 3</Button>
            </ButtonGroup>
        </div>
    )
}

export default withStyles(styles)(ButtonGroupSize)`,'ButtonGroupToggle' : `import React from 'react';
import { withStyles } from 'react-jss';
import { Button, ButtonGroup } from '@evg-b/evg-ui';
import {
    Close,
    Menu,
    Notifications,
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
const ButtonGroupToggle = (props) => {
    const { classes } = props
    return (
        <ButtonGroup>
            <Button><Menu /></Button>
            <Button><Close /></Button>
            <Button><Notifications /></Button>
        </ButtonGroup>
    )
}

export default withStyles(styles)(ButtonGroupToggle)`,'ButtonGroupUppercase' : `import React from 'react';
import { Button, ButtonGroup } from '@evg-b/evg-ui';

const ButtonGroupUppercase = () => {
    return (
        <ButtonGroup uppercase={false}>
            <Button>Text 1</Button>
            <Button>Text 2</Button>
            <Button>Text 3</Button>
        </ButtonGroup>
    )
}

export default ButtonGroupUppercase`,'ButtonGroupVariant' : `import React from 'react';
import { withStyles } from 'react-jss';
import { Button, ButtonGroup } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '&>*': {
            margin: '5px'
        }
    }
}
const ButtonGroupVariant = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <ButtonGroup variant='text'>
                <Button>default 1</Button>
                <Button>default 2</Button>
                <Button>default 3</Button>
            </ButtonGroup>
            <ButtonGroup variant='contained' color='--ifm-color-primary'>
                <Button>contained 1</Button>
                <Button>contained 2</Button>
                <Button>contained 3</Button>
            </ButtonGroup>
            <ButtonGroup variant='outlined' color='--ifm-color-primary'>
                <Button>outlined 1</Button>
                <Button>outlined 2</Button>
                <Button>outlined 3</Button>
            </ButtonGroup>
        </div>
    )
}

export default withStyles(styles)(ButtonGroupVariant)`,
}