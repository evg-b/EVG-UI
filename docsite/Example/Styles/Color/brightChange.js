import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames'
import {
    red,
    pink,
    purple,
    deepPurple,
    indigo,
    blue,
    lightBlue,
    cyan,
    teal,
    green,
    lightGreen,
    lime,
    yellow,
    amber,
    orange,
    deepOrange,
    brown,
    gray,
    blueGray,
} from '@evg-b/evg-ui/src/colors';
import brightChange from '@evg-b/evg-ui/src/utils/brightChange'
import Color from '@evg-b/evg-ui/src/utils/Color'

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    tone: {
        height: '50px',
        width: '100px',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

const brightChange = React.forwardRef(function brightChange(props, ref) {
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
                [...Array(10)].map(color => {
                    return (
                        <div
                            className={classes.tone}
                            style={{
                                // backgroundColor: ,
                                // color: ,
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

brightChange.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    component: PropTypes.elementType,
}

brightChange.defaultProps = {
}

export default withStyles(styles)(brightChange)