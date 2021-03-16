import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles, IconButton, Scroll, Tooltip, Loader } from '@evg-b/evg-ui'
import classNames from 'classnames';
import { Code } from '@evg-b/evg-icons'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import SyntaxStyle from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia';

SyntaxHighlighter.registerLanguage('jsx', jsx);

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
        backgroundColor: 'rgba(0,0,0,.05)',
    },
    panelDemo: {
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
    },
    panelCode: {
        // userSelect: 'auto',
        width: '100%',
        backgroundColor: '#272822'
    },
    styleCodeFix: {
        display: 'inline-block',
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

    let CodeExample_ref = useRef()
    CodeExample_ref = ref || CodeExample_ref
    let observer = useRef()

    const [openCode, setOpenCode] = useState(false)
    const [mountNode, setMountNode] = useState(false)
    const Syntax_ref = useRef()

    const btnCode_ref = useRef()

    const snippetPanel = (snippet) => (
        <div className={classNames(classes.panelCode)}>
            <Scroll
                autoHide={false}
                style={{ maxHeight: 600 }}
                ref={Syntax_ref}
                color='#FFFFFF'
            >
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
            </Scroll>
        </div>
    )
    useEffect(() => {
        if (!observer.current) {
            observer.current = new IntersectionObserver(([entries]) => {
                entries.isIntersecting ? setMountNode(true) : null
            })
            observer.current.observe(CodeExample_ref.current)
        }
        return () => observer.current.disconnect()
    }, [])
    return (
        <div className={classes.base}
            ref={CodeExample_ref}
            {...otherProps}
        >
            <div className={classes.header}>
                <div className={classes.headerLeft}>{title}</div>
                <div className={classes.headerRight}>
                    <IconButton ref={btnCode_ref} onClick={() => setOpenCode((prev) => !prev)} color={openCode ? 'primary' : 'default'}>
                        <Code />
                    </IconButton>
                    <Tooltip target={btnCode_ref}>
                        {openCode ? 'hide code' : 'show code'}
                    </Tooltip>
                </div>
            </div>
            <div className={classes.body}>
                <div className={classes.panelDemo}>{mountNode ? demo : <Loader color='primary' />}</div>
            </div>
            {openCode && snippetPanel(snippet)}
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
     * Исходный код компонента в в виде текста.
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