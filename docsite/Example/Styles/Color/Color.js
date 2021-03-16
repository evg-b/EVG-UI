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
    }
}

const MapContrast = [
    'purple100',
    '#CE93D8',
    '#BA68C8',
    'purple400',
]

const Color = React.forwardRef(function Color(props, ref) {
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

export default withStyles(styles)(Color)