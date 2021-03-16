import React, { useEffect, useMemo } from 'react'
import PropTypes from 'prop-types';
import ColorEVG from './Color/Color'
import useChangeTheme from './useChangeTheme'
import signatureByProps from './signatureByProps'
import mergeClasses from './mergeClasses'
import getDynamicStylesAndKeyframes from './getDynamicStylesAndKeyframes'
import createStyleSheet from './createStyleSheet'

const cacheMapClasses = new Map()

const withStyles = styleObject => Component => {
    const displayName = Component.displayName || 'ComponentEVG'

    let styleDynamic = getDynamicStylesAndKeyframes(styleObject)
    let StyleSheet = createStyleSheet(styleObject, displayName)
    StyleSheet.attach()

    const WithStyles = React.forwardRef(function WithStyles(props, ref) {
        const { classes, ...otherProps } = props
        const mergeProps = useMemo(() => { return { ...Component.defaultProps, ...otherProps } }, [otherProps])
        const signature = signatureByProps(displayName, mergeProps)

        let colorProps = mergeProps.color ? mergeProps.color : 'default'
        const Color = ColorEVG(colorProps, displayName)

        let StyleSheetDynamic
        if (cacheMapClasses.has(signature)) {
            // есть classes в cache
            StyleSheetDynamic = cacheMapClasses.get(signature)
        } else {
            StyleSheetDynamic = createStyleSheet(styleDynamic, displayName, '-d-')
            StyleSheetDynamic.update({ ...mergeProps, Color: Color }) // <- update in hooks: useEffect
            StyleSheetDynamic.attach()
            cacheMapClasses.set(signature, StyleSheetDynamic) // <- classes
        }

        useEffect(() => {
            StyleSheetDynamic.update({ ...mergeProps, Color: Color })
        }, [mergeProps, Color, StyleSheetDynamic])

        useChangeTheme()

        let cacheClasses = mergeClasses(mergeClasses(StyleSheet.classes, StyleSheetDynamic.classes), classes)

        return <Component
            ref={ref}
            classes={cacheClasses}
            {...otherProps}
        />
    })
    WithStyles.propTypes = {
        /**
        * Объект со стилями компонента для jss.
        */
        classes: PropTypes.object,
    }
    return WithStyles
}

export default withStyles