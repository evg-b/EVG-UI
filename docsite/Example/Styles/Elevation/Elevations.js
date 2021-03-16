import React from 'react';
import classNames from 'classnames'
import { Elevation, withStyles } from '@evg-b/evg-ui'

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    ElevationBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px',
        width: '100px',
        height: '100px',
        borderRadius: '9px',
        color: '#797979',
        fontSize: '20px',
    }
}

const Elevations = React.forwardRef(function Palettes(props, ref) {
    const {
        classes,
        className,
        children,
        component: Component = 'div',
        ...otherProps
    } = props

    return (
        <Component
            className={classNames(
                classes.base,
                className,
            )}
            ref={ref}
            {...otherProps}
        >
            {
                [...Array(25)].map((n, i) =>
                    <div key={i} className={classes.ElevationBox} style={Elevation(i)}>{i}</div>
                )
            }
        </Component>
    )
})

export default withStyles(styles)(Elevations)