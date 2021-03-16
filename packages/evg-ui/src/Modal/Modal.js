import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '../styles'
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
}

/**
 * Это окно, которое блокирует работу пользователя с родительским приложением до тех пор, пока пользователь это окно не закроет. 
 * Подходит для создания диалогов и лайтбоксов.
*/

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

    const Close = (e) => {
        if (e.target === e.currentTarget && open) {
            onClose && onClose()
        }
    }

    const CloseESC = (e) => {
        e.preventDefault()
        if (isEsc && 'Escape' === e.key && open) {
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
            onClick={Close}
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
     * Корневой узел. Это HTML элемент или компонент.
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