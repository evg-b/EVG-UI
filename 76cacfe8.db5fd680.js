(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{134:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return v})),t.d(n,"metadata",(function(){return E})),t.d(n,"toc",(function(){return f})),t.d(n,"default",(function(){return k}));var o=t(3),a=t(7),l=t(0),s=t.n(l),c=t(147),i=t(154),d="import React, { useState } from 'react';\nimport { Modal, Button, IconButton, withStyles } from '@evg-b/evg-ui';\nimport { Close } from '@evg-b/evg-icons'\n\nconst styles = {\n    modalBackground: {\n        backgroundColor: 'rgba(0,0,0,.6)',\n    },\n    modal: {\n        position: 'relative',\n        display: 'flex',\n        justifyContent: 'center',\n        alignItems: 'center',\n        width: '200px',\n        height: '200px',\n        borderRadius: '20px',\n        backgroundColor: 'white',\n    },\n    btnClose: {\n        position: 'absolute',\n        top: 0,\n        right: 0,\n    }\n}\nconst ModalBase = (props) => {\n    const { classes } = props\n    const [open, setOpen] = useState(false)\n    const handleOpen = () => {\n        setOpen(true)\n    }\n    const handleClose = () => {\n        setOpen(false)\n    }\n    const ModalBlock = (\n        <div className={classes.modal}>\n            <IconButton\n                className={classes.btnClose}\n                onClick={handleClose}\n            >\n                <Close />\n            </IconButton>\n            modal\n        </div>\n    )\n    return (\n        <div>\n            <Button variant='contained' onClick={handleOpen}>Open Modal</Button>\n            <Modal\n                className={classes.modalBackground}\n                open={open}\n                onClose={handleClose}\n            >\n                {ModalBlock}\n            </Modal>\n        </div>\n    )\n}\n\nexport default withStyles(styles)(ModalBase)",r="import React, { useState } from 'react';\nimport { Modal, Button, IconButton, Switch, withStyles } from '@evg-b/evg-ui';\nimport { Close } from '@evg-b/evg-icons'\n\nconst styles = {\n    switchMod: {\n        display: 'flex',\n        alignItems: 'center',\n    },\n    modalBackground: {\n        backgroundColor: 'rgba(0,0,0,.6)',\n    },\n    modal: {\n        position: 'relative',\n        display: 'flex',\n        justifyContent: 'center',\n        alignItems: 'center',\n        width: '200px',\n        height: '200px',\n        borderRadius: '20px',\n        backgroundColor: 'white',\n    },\n    btnClose: {\n        position: 'absolute',\n        top: 0,\n        right: 0,\n    }\n}\nconst ModalEsc = (props) => {\n    const { classes } = props\n    const [open, setOpen] = useState(false)\n    const [isEsc, setIsEsc] = useState(false)\n\n    const handleOpen = () => {\n        setOpen(true)\n    }\n    const handleClose = () => {\n        setOpen(false)\n    }\n    const handleChange = (e) => {\n        setIsEsc(e.target.checked)\n    }\n    const ModalBlock = (\n        <div className={classes.modal}>\n            <IconButton\n                className={classes.btnClose}\n                onClick={handleClose}\n            >\n                <Close />\n            </IconButton>\n            modal\n        </div>\n    )\n    return (\n        <div>\n            <div className={classes.switchMod}>\n                <label htmlFor=\"labelIsEsc\">isEsc</label>\n                <Switch onChange={handleChange} id='labelIsEsc' color='primary' />\n            </div>\n            <Button variant='contained' onClick={handleOpen}>Open Modal</Button>\n            <Modal\n                className={classes.modalBackground}\n                open={open}\n                onClose={handleClose}\n                isEsc={isEsc}\n            >\n                {ModalBlock}\n            </Modal>\n        </div>\n    )\n}\n\nexport default withStyles(styles)(ModalEsc)",p=t(146),u=t(160),m=Object(p.J)({modalBackground:{backgroundColor:"rgba(0,0,0,.6)"},modal:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",width:"200px",height:"200px",borderRadius:"20px",backgroundColor:"white"},btnClose:{position:"absolute",top:0,right:0}})((function(e){var n=e.classes,t=Object(l.useState)(!1),o=t[0],a=t[1],c=function(){a(!1)},i=s.a.createElement("div",{className:n.modal},s.a.createElement(p.l,{className:n.btnClose,onClick:c},s.a.createElement(u.e,null)),"modal");return s.a.createElement("div",null,s.a.createElement(p.e,{variant:"contained",onClick:function(){a(!0)}},"Open Modal"),s.a.createElement(p.u,{className:n.modalBackground,open:o,onClose:c},i))})),b=Object(p.J)({switchMod:{display:"flex",alignItems:"center"},modalBackground:{backgroundColor:"rgba(0,0,0,.6)"},modal:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",width:"200px",height:"200px",borderRadius:"20px",backgroundColor:"white"},btnClose:{position:"absolute",top:0,right:0}})((function(e){var n=e.classes,t=Object(l.useState)(!1),o=t[0],a=t[1],c=Object(l.useState)(!1),i=c[0],d=c[1],r=function(){a(!1)},m=s.a.createElement("div",{className:n.modal},s.a.createElement(p.l,{className:n.btnClose,onClick:r},s.a.createElement(u.e,null)),"modal");return s.a.createElement("div",null,s.a.createElement("div",{className:n.switchMod},s.a.createElement("label",{htmlFor:"labelIsEsc"},"isEsc"),s.a.createElement(p.D,{onChange:function(e){d(e.target.checked)},id:"labelIsEsc",color:"primary"})),s.a.createElement(p.e,{variant:"contained",onClick:function(){a(!0)}},"Open Modal"),s.a.createElement(p.u,{className:n.modalBackground,open:o,onClose:r,isEsc:i},m))})),h=function(){return s.a.createElement(i.a,{title:"Base",demo:s.a.createElement(m,null),snippet:d})},C=function(){return s.a.createElement(i.a,{title:"Esc",demo:s.a.createElement(b,null),snippet:r})},g=t(148),v={id:"Modal",title:"Modal",sidebar_label:"Modal"},E={unversionedId:"Components/Modal",id:"Components/Modal",isDocsHomePage:!1,title:"Modal",description:"import {",source:"@site/docs/Components/Modal.mdx",slug:"/Components/Modal",permalink:"/evg-ui/docs/Components/Modal",version:"current",sidebar_label:"Modal",sidebar:"someSidebar",previous:{title:"Cubes",permalink:"/evg-ui/docs/Components/Cubes"},next:{title:"Popup",permalink:"/evg-ui/docs/Components/Popup"}},f=[{value:"Base Modal",id:"base-modal",children:[]},{value:"Esc",id:"esc",children:[]},{value:"API",id:"api",children:[]}],M={toc:f};function k(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},M,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u042d\u0442\u043e \u043e\u043a\u043d\u043e, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0431\u043b\u043e\u043a\u0438\u0440\u0443\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0441 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c \u0434\u043e \u0442\u0435\u0445 \u043f\u043e\u0440, \u043f\u043e\u043a\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u044d\u0442\u043e \u043e\u043a\u043d\u043e \u043d\u0435 \u0437\u0430\u043a\u0440\u043e\u0435\u0442. \u041f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432 \u0438 \u043b\u0430\u0439\u0442\u0431\u043e\u043a\u0441\u043e\u0432."),Object(c.b)("h2",{id:"base-modal"},"Base Modal"),Object(c.b)(h,{mdxType:"ModalBaseExample"}),Object(c.b)("h2",{id:"esc"},"Esc"),Object(c.b)("p",null,"\u0415\u0441\u043b\u0438 ",Object(c.b)("inlineCode",{parentName:"p"},"isEsc={true}"),", modal \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043a\u043b\u0430\u0432\u0438\u0448\u0435\u0439 Esc."),Object(c.b)(C,{mdxType:"ModalEscExample"}),Object(c.b)("h2",{id:"api"},"API"),Object(c.b)(g.a,{name:"Modal",mdxType:"ApiDoc"}))}k.isMDXComponent=!0}}]);