import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import IconButton from '../IconButton'
import Scroll from '../Scroll'
import Tooltip from '../Tooltip'
import { Code, Visibility } from '../internal/icons/CodeExample'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import SyntaxStyle from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia';

const styles = {
    base: {
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        borderRadius: '10px',
        border: '1px solid rgba(0,0,0,.1)',
    },
    header: {
        height: '80px',
        // backgroundColor: 'rgba(0,0,0,.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        fontSize: '1rem',
    },
    headerLeft: {

    },
    headerRight: {
        fontSize: '1rem',
    },
    body: {
        height: '100%',
        backgroundColor: 'rgba(0,0,0,.05)',
        // backgroundColor: 'rgba(0,0,0,.1)',
    },
    panelDemo: {
        // opacity: 'hidde',
        display: 'none',
        padding: '20px',

    },
    panelDemoFlex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        // '& > *': {
        //     margin: '10px',
        // },
    },
    panelCode: {
        // opacity: 'hidde',
        display: 'none',
        backgroundColor: '#272822'
        // padding: '20px',
        // height: '300px',
        // minHeight: '100px',
        // maxHeight: '600px',
    },
    visible: {
        display: 'block',
    },
    styleCodeFix: {
        display: 'inline-block',
        // padding: '0 !important',
    }

}

const CodeExample = React.forwardRef(function CodeExample(props, ref) {
    const {
        classes,
        className,
        children,
        title,
        demo,
        snippet,
        language,
        ...otherProps
    } = props

    const [indexPanel, setIndexPanel] = useState(0)
    // const [heightScroll, setHeightScroll] = useState(0)
    const Syntax_ref = useRef()

    const btnVisib_ref = useRef()
    const btnCode_ref = useRef()
    // const limitScrollHeight = 500
    // useEffect(() => {
    //     let sHeight = Syntax_ref.current.scrollHeight
    //     sHeight < limitScrollHeight ? setHeightScroll(sHeight) : setHeightScroll(limitScrollHeight)
    // }, [indexPanel])

    const demoPanel = (demo) => (
        <div className={classNames(classes.panelDemo, {
            [classes.visible]: indexPanel === 0,
        })}>
            <div className={classes.panelDemoFlex}>
                {demo}
            </div>
        </div>
    )

    const snippetPanel = (snippet) => (
        <div className={classNames(classes.panelCode, {
            [classes.visible]: indexPanel === 1,
        })}>
            <Scroll
                autoHide={false}
                style={{ maxHeight: 600 }}
                ref={Syntax_ref}
                color='#FFFFFF'
            >
                {/* <div style={{ backgroundColor: '#272822' }}> */}
                <SyntaxHighlighter
                    className={classes.styleCodeFix}
                    language='jsx'
                    style={SyntaxStyle}
                    customStyle={{
                        margin: 0,
                        fontSize: '.8em',
                    }}
                >
                    {snippet.trim()}
                </SyntaxHighlighter>
                {/* </div> */}
            </Scroll>
        </div>
    )
    return (
        <div className={classes.base}
            ref={ref}
            {...otherProps}
        >
            <div className={classes.header}>
                <div className={classes.headerLeft}>{title}</div>
                <div className={classes.headerRight}>
                    <IconButton ref={btnVisib_ref} onClick={() => setIndexPanel(0)} color={indexPanel === 0 ? '--ifm-color-primary' : 'default'}>
                        <Visibility />
                    </IconButton>
                    <IconButton ref={btnCode_ref} onClick={() => setIndexPanel(1)} color={indexPanel === 1 ? '--ifm-color-primary' : 'default'}>
                        <Code />
                    </IconButton>
                    <Tooltip target={btnVisib_ref}>
                        demo
                    </Tooltip>
                    <Tooltip target={btnCode_ref}>
                        code
                    </Tooltip>
                </div>
            </div>
            <div className={classes.body}>
                {demoPanel(demo)}
                {snippetPanel(snippet)}
            </div>
        </div>
    )
})
CodeExample.propTypes = {
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
     * title демки.
    */
    title: PropTypes.string,

    /**
     * Демка с компонентом.
    */
    demo: PropTypes.node,

    /**
     * Исходный код компонента в ввиде текста.
    */
    snippet: PropTypes.string,

    /**
     * Язык разметки для react-syntax-highlighter.
    */
    language: PropTypes.string,
}
CodeExample.defaultProps = {
    title: 'Title',
    snippet: '',
    language: 'jsx',
}
CodeExample.displayName = 'CodeExampleEVG'
export default withStyles(styles)(CodeExample)