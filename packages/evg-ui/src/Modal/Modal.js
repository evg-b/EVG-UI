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
        open = false,
        onClose = f => f,
        isEsc = false,
        ...otherProps
    } = props

    const CloseESC = (e) => {
        e.preventDefault()
        if (isEsc && 'Escape' === e.key) {
            console.log('[modal] onClose-start Esc');
            onClose()
        }
        if (e.target === e.currentTarget) {
            console.log('[modal] onClose-start target');
            onClose()
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
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    component: PropTypes.elementType,
    open: PropTypes.bool,
    onClose: PropTypes.func,
    isEsc: PropTypes.bool,
}
Modal.defaultProps = {
    open: false,
    component: 'div',
    isEsc: true,
}
Modal.displayName = 'ModalEVG'
export default withStyles(styles)(Modal)