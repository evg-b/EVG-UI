import React from 'react';
import { withStyles } from 'react-jss';
import { Ripple } from '@evg-b/evg-ui';
import Elevation from '@evg-b/evg-ui/dist/utils/Elevation';
import Color from '@evg-b/evg-ui/dist/utils/Color';

const styles = {
    base: {
        display: 'flex',
    },
    stand: {
        ...Elevation(2),
        width: '150px',
        height: '150px',
        position: 'relative',
        margin: '5px',
    }
}

const RippleColor = (props) => {
    const {
        classes,
    } = props

    const gray400 = Color('gray400').Color
    const purple600 = Color('purple600').Color

    return (
        <div className={classes.base}>
            <span className={classes.stand}>
                <Ripple />
            </span>
            <span className={classes.stand} style={{ backgroundColor: gray400 }} >
                <Ripple color={gray400} />
            </span>
            <span className={classes.stand} style={{ backgroundColor: purple600 }} >
                <Ripple color={purple600} />
            </span>
        </div>
    )
}

export default withStyles(styles)(RippleColor)