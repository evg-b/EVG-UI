import React from 'react'
import { createUseStyles } from 'react-jss'
import ColorEVG from '../utils/Color/Color'
import useChangeTheme from './useChangeTheme'

const withStyles = (styleObject) => Component => {
    const useStyles = createUseStyles(styleObject)
    const WithStyles = React.forwardRef(function WithStyles(props, ref) {
        useChangeTheme()
        const colorProps = props.color || Component.defaultProps.color || 'default'
        const Color = ColorEVG(colorProps)
        const classes = useStyles({ ...Component.defaultProps, ...props, Color: Color })
        return <Component ref={ref} classes={classes} {...props} />
    })
    return WithStyles
}

export default withStyles