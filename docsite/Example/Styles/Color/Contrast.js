import React from 'react';
import { Color, withStyles } from '@evg-b/evg-ui';
import classNames from 'classnames'

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    tone: {
        height: '50px',
        width: '200px',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    }
}

const MapContrast = [
    '#7B1FA2',
    '#CE93D8',
    '#757575',
    '#EEEEEE',
]

const Contrast = React.forwardRef(function Contrast(props, ref) {
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
                MapContrast.map((color, id) => {
                    return (
                        <div
                            key={id}
                            className={classes.tone}
                            style={{
                                backgroundColor: Color(color).Base(),
                                color: Color(color).Contrast(),
                            }}
                        >
                            {color}
                        </div>
                    )
                })
            }
        </Component >
    )
})

export default withStyles(styles)(Contrast)