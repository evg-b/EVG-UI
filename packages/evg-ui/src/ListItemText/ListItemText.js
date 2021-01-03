import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';

const secondaryStyle = {
    fontSize: '.875rem',
    lineHeight: '1.25rem',
    fontWeight: 400,
    color: 'rgba(0, 0, 0, .54)',
}
const styles = {
    base: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexGrow: 1,
        flexShrink: 999,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        margin: '0',
        padding: '0',

    },
    textStyle: {
        '& *': {
            fontFamily: 'Roboto, sans- serif',
            textDecoration: 'inherit',
            textTransform: 'inherit',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            marginTop: 0,
            lineHeight: 'normal',
        }
    },
    primaryText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '1rem',
    },
    secondaryText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '5px',
        ...secondaryStyle,
    },
    meta: {
        display: 'contents',
        ...secondaryStyle,
    },
    singleLine: {
        height: '48px',
    },
    twoLine: {
        height: '72px',
    },
}

const ListItemText = React.forwardRef(function ListItemText(props, ref) {
    const {
        classes,
        className,
        children,
        secondaryText: SecondaryTextProp,
        meta: MetaProp,
        secondaryMeta: SecondaryMetaProp,
        ...otherProps
    } = props

    const meta = MetaProp && (
        <span className={classes.meta}>{MetaProp}</span>
    )
    const secondaryMeta = SecondaryMetaProp && (
        <span className={classes.meta}>{SecondaryMetaProp}</span>
    )
    const secondaryText = SecondaryTextProp && (
        <div className={classes.secondaryText}>
            <span>{SecondaryTextProp}</span>
            {secondaryMeta}
        </div>
    )

    return (
        <div
            ref={ref}
            className={classNames(
                classes.base,
                classes.textStyle,
                {
                    [classes.singleLine]: !SecondaryTextProp,
                    [classes.twoLine]: SecondaryTextProp,
                },
                className
            )}
            {...otherProps}
        >
            <div className={classes.primaryText}>
                <span>{children}</span>
                {meta}
            </div>
            {secondaryText}
        </div>
    )
})
ListItemText.propTypes = {
    /**
    * Это контент между открывающим и закрывающим тегом компонента.
    */
    children: PropTypes.node,

    /**
     * Объект содержит jss стили компонента.
    */
    classes: PropTypes.object,

    /**
     * Чтобы указать CSS классы, используйте этот атрибут.
    */
    className: PropTypes.string,

    /**
     * Корнево узел. Это HTML элемент или компонент.
    */
    component: PropTypes.elementType,

    /**
     * Вспомогательный текст.
    */
    secondaryText: PropTypes.string,

    /**
     * Контейнер для Metadata.
    */
    meta: PropTypes.node,

    /**
     * Вспомогательный контейнер для Metadata.
    */
    secondaryMeta: PropTypes.node,
}
ListItemText.defaultProps = {
    secondaryText: '',
}
ListItemText.displayName = 'ListItemTextEVG'
export default withStyles(styles)(ListItemText)

