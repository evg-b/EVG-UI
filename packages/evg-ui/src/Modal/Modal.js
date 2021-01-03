import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import { createPortal } from 'react-dom'

const styles = {
    base: {
        position: 'fixed',
        zIndex: 9999,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overscrollBehavior: 'contain',
    }
};
const Modal = React.forwardRef(function Modal(props, ref) {
    const {
        classes,
        className,
        children,
        component: Component = 'div',
        open,
        onClose,
        isEsc,
        ...otherProps
    } = props

    const CloseESC = (e) => {
        e.preventDefault()
        if (isEsc && 'Escape' === e.key) {
            console.log('[modal] onClose-start Esc');
            onClose && onClose()
        }
        if (e.target === e.currentTarget) {
            console.log('[modal] onClose-start target');
            onClose && onClose()
        }
    }
    useEffect(() => {
        window.addEventListener('keyup', CloseESC)
        return () => window.removeEventListener('keyup', CloseESC)
    })
    return open ? createPortal(
        <Component
            ref={ref}
            className={classNames(classes.base, className)}
            onClick={CloseESC}
            onKeyUp={CloseESC}
            {...otherProps}
        >
            {children}
        </Component>,
        document.body
    ) : null
})
Modal.propTypes = {
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
     * Если true, modal открыт.
    */
    open: PropTypes.bool,

    /**
     * onClose() вызывается при попытки закрыть modal.
    */
    onClose: PropTypes.func,

    /**
     * Если true, modal закрывается клавишей Esc.
    */
    isEsc: PropTypes.bool,
}
Modal.defaultProps = {
    open: false,
    component: 'div',
    isEsc: true,
}
Modal.displayName = 'ModalEVG'
export default withStyles(styles)(Modal)