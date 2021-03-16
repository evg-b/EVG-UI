(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{123:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return E})),t.d(n,"metadata",(function(){return g})),t.d(n,"toc",(function(){return j})),t.d(n,"default",(function(){return A}));var a=t(3),l=t(7),s=t(0),i=t.n(s),r=t(147),o=t(154),c="import React from 'react';\nimport { Skeleton, withStyles } from '@evg-b/evg-ui';\n\nconst styles = {\n    base: {\n        display: 'flex',\n        flexWrap: 'wrap',\n        '&>*': {\n            margin: '5px'\n        }\n    }\n}\nconst SkeletonAnimation = (props) => {\n    const { classes } = props\n    return (\n        <div className={classes.base}>\n            <Skeleton animation={true} />\n            <Skeleton animation={false} />\n        </div>\n    )\n}\n\nexport default withStyles(styles)(SkeletonAnimation)",p="import React from 'react';\nimport { Skeleton, withStyles } from '@evg-b/evg-ui';\n\nconst styles = {\n    base: {\n        display: 'flex',\n        flexWrap: 'wrap',\n        '&>*': {\n            margin: '5px'\n        }\n    }\n}\nconst SkeletonAvatar = (props) => {\n    const { classes } = props\n    return (\n        <div className={classes.base}>\n            <Skeleton type='avatar' size={20} />\n            <Skeleton type='avatar' />\n            <Skeleton type='avatar' size={100} />\n        </div>\n    )\n}\n\nexport default withStyles(styles)(SkeletonAvatar)",m="import React from 'react';\nimport { Skeleton, withStyles } from '@evg-b/evg-ui';\n\nconst styles = {\n    base: {\n        display: 'flex',\n        flexWrap: 'wrap',\n        '&>*': {\n            margin: '5px'\n        }\n    }\n}\nconst SkeletonBase = (props) => {\n    const { classes } = props\n    return (\n        <div className={classes.base}>\n            <Skeleton />\n            <Skeleton width={160} />\n            <Skeleton width={100} borderRadius={16} />\n        </div>\n    )\n}\n\nexport default withStyles(styles)(SkeletonBase)",d="import React from 'react';\nimport { Skeleton, withStyles } from '@evg-b/evg-ui';\n\nconst styles = {\n    base: {\n        display: 'flex',\n        flexDirection: 'column',\n        '&>*': {\n            margin: '5px'\n        }\n    }\n}\nconst SkeletonText = (props) => {\n    const { classes } = props\n    const flexStyle = {\n        display: 'flex',\n        alignItems: 'center',\n    }\n    const variants = ['h1', 'h2', 'h3', 'text']\n    return (\n        <div className={classes.base}>\n            {variants.map((variant, id) => (\n                <div key={id} style={flexStyle}>\n                    <Skeleton width={100} type={'text,' + variant} /><span style={{ marginLeft: '6px' }}>{variant}</span>\n                </div>\n            ))}\n        </div>\n    )\n}\n\nexport default withStyles(styles)(SkeletonText)",u=t(146),b=Object(u.J)({base:{display:"flex",flexWrap:"wrap","&>*":{margin:"5px"}}})((function(e){var n=e.classes;return i.a.createElement("div",{className:n.base},i.a.createElement(u.B,{animation:!0}),i.a.createElement(u.B,{animation:!1}))})),v=Object(u.J)({base:{display:"flex",flexWrap:"wrap","&>*":{margin:"5px"}}})((function(e){var n=e.classes;return i.a.createElement("div",{className:n.base},i.a.createElement(u.B,{type:"avatar",size:20}),i.a.createElement(u.B,{type:"avatar"}),i.a.createElement(u.B,{type:"avatar",size:100}))})),x=Object(u.J)({base:{display:"flex",flexWrap:"wrap","&>*":{margin:"5px"}}})((function(e){var n=e.classes;return i.a.createElement("div",{className:n.base},i.a.createElement(u.B,null),i.a.createElement(u.B,{width:160}),i.a.createElement(u.B,{width:100,borderRadius:16}))})),f=Object(u.J)({base:{display:"flex",flexDirection:"column","&>*":{margin:"5px"}}})((function(e){var n=e.classes,t={display:"flex",alignItems:"center"};return i.a.createElement("div",{className:n.base},["h1","h2","h3","text"].map((function(e,n){return i.a.createElement("div",{key:n,style:t},i.a.createElement(u.B,{width:100,type:"text,"+e}),i.a.createElement("span",{style:{marginLeft:"6px"}},e))})))})),S=function(){return i.a.createElement(o.a,{title:"Animation",demo:i.a.createElement(b,null),snippet:c})},y=function(){return i.a.createElement(o.a,{title:"Avatar",demo:i.a.createElement(v,null),snippet:p})},k=function(){return i.a.createElement(o.a,{title:"Base",demo:i.a.createElement(x,null),snippet:m})},h=function(){return i.a.createElement(o.a,{title:"Text",demo:i.a.createElement(f,null),snippet:d})},w=t(148),E={id:"Skeleton",title:"Skeleton",sidebar_label:"Skeleton"},g={unversionedId:"Components/Skeleton",id:"Components/Skeleton",isDocsHomePage:!1,title:"Skeleton",description:"import {",source:"@site/docs/Components/Skeleton.mdx",slug:"/Components/Skeleton",permalink:"/evg-ui/docs/Components/Skeleton",version:"current",sidebar_label:"Skeleton",sidebar:"someSidebar",previous:{title:"Scroll",permalink:"/evg-ui/docs/Components/Scroll"},next:{title:"Select",permalink:"/evg-ui/docs/Components/Select"}},j=[{value:"Base Skeleton",id:"base-skeleton",children:[]},{value:"Text",id:"text",children:[]},{value:"Avatar",id:"avatar",children:[]},{value:"Animation",id:"animation",children:[]},{value:"API",id:"api",children:[]}],O={toc:j};function A(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},O,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u0421\u043a\u0435\u043b\u0435\u0442 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u0434\u0430\u0435\u0442 \u043f\u043e\u043d\u044f\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0447\u0442\u043e \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u0435\u0449\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u0437\u043d\u0430\u043a\u043e\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043a \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u043c\u0443 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435."),Object(r.b)("h2",{id:"base-skeleton"},"Base Skeleton"),Object(r.b)(k,{mdxType:"SkeletonBaseExample"}),Object(r.b)("h2",{id:"text"},"Text"),Object(r.b)(h,{mdxType:"SkeletonTextExample"}),Object(r.b)("h2",{id:"avatar"},"Avatar"),Object(r.b)(y,{mdxType:"SkeletonAvatarExample"}),Object(r.b)("h2",{id:"animation"},"Animation"),Object(r.b)("p",null,"\u0415\u0441\u043b\u0438 ",Object(r.b)("inlineCode",{parentName:"p"},"animation={false}")," \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044f \u0432\u043e\u043b\u043d\u044b \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u0430."),Object(r.b)(S,{mdxType:"SkeletonAnimationExample"}),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)(w.a,{name:"Skeleton",mdxType:"ApiDoc"}))}A.isMDXComponent=!0}}]);