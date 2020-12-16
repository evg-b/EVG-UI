import React from 'react';
import { withStyles } from 'react-jss';
import { Ripple } from '@evg-b/evg-ui';
import Elevation from '@evg-b/evg-ui/src/utils/Elevation';
import Color from '@evg-b/evg-ui/src/utils/Color';

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

const RippleContrast = (props) => {
    const {
        classes,
    } = props

    const purple600 = Color('purple600').Color

    return (
        <div className={classes.base}>
            <span className={classes.stand} style={{ backgroundColor: purple600 }}>
                <Ripple color={purple600} />
            </span>
            <span className={classes.stand} >
                <Ripple color={purple600} contrast={false} />
            </span>
        </div>
    )
}

export default withStyles(styles)(RippleContrast)