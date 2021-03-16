import React, { useState, useEffect, useRef } from 'react';
import { Color, withStyles } from '@evg-b/evg-ui';
import classNames from 'classnames'


const styles = {
    base: {
        display: 'flex',
        // display: 'grid',
        // gridTemplateColumns: 'repeat(10, 1fr)',
        // flexWrap: 'wrap',
        // justifyContent: 'space-between',
        margin: '10px 0',
    },
    tone: {
        height: '60px',
        width: '60px',
        // borderRadius: 6,
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
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
            // className={classes.base}
            ref={ref}
            {...otherProps}
        >
            <div className={classes.base}>
                {
                    [...Array(13)].map((color, index) => {
                        let ColorEVG = Color('orange').Bright('hex', index * 5)
                        return (
                            <div
                                className={classes.tone}
                                style={{
                                    backgroundColor: ColorEVG,
                                    color: Color(ColorEVG).Contrast(),
                                }}
                            >
                                {index * 5}
                            </div>
                        )
                    })
                }
            </div>
            <div className={classes.base}>
                {
                    [...Array(13)].map((color, index) => {
                        let ColorEVG = Color('orange').Bright('hex', -index * 5)
                        return (
                            <div
                                className={classes.tone}
                                style={{
                                    backgroundColor: ColorEVG,
                                    color: Color(ColorEVG).Contrast(),
                                }}
                            >
                                {-index * 5}
                            </div>
                        )
                    })
                }
            </div>

        </Component >
    )
})

export default withStyles(styles)(brightChange)