import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames'
import Color from '@evg-b/evg-ui/src/utils/Color';

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
                                backgroundColor: Color(color).Color,
                                color: Color(color).Contrast,
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

Contrast.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    component: PropTypes.elementType,
}

Contrast.defaultProps = {
}

export default withStyles(styles)(Contrast)