(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{118:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return B})),t.d(n,"metadata",(function(){return I})),t.d(n,"toc",(function(){return T})),t.d(n,"default",(function(){return M}));var r=t(3),o=t(7),l=t(0),a=t.n(l),c=t(147),i=t(154),p="import React from 'react';\nimport { Scroll } from '@evg-b/evg-ui';\n\nconst styles = {\n    width: '100px',\n    height: '100px',\n    margin: '10px',\n    color: 'white',\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    backgroundColor: 'rgba(0,0,0,.8)',\n}\n\nconst ScrollAutoHide = () => {\n    const blockScroll = (props) => {\n        return <div key={props} style={styles}>{props}</div>\n    }\n    return (\n        <Scroll\n            autoHide={true}\n            style={{ width: 200, height: 400, backgroundColor: 'rgba(0,0,0,.1)' }}\n        >\n            {\n                [...Array(25)].map((n, i) =>\n                    blockScroll(i + 1)\n                )\n            }\n        </Scroll>\n    )\n}\n\nexport default ScrollAutoHide",s="import React from 'react';\nimport { Scroll } from '@evg-b/evg-ui';\n\nconst styles = {\n    width: '100px',\n    height: '100px',\n    margin: '10px',\n    color: 'white',\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    backgroundColor: 'rgba(0,0,0,.8)',\n}\n\nconst ScrollBase = () => {\n    const blockScroll = (props) => <div key={props} style={styles}>{props}</div>\n    return (\n        <Scroll\n            autoHide={false}\n            style={{ width: 200, height: 400, backgroundColor: 'rgba(0,0,0,.1)' }}\n        >\n            {\n                [...Array(25)].map((n, i) =>\n                    blockScroll(i + 1)\n                )\n            }\n        </Scroll>\n    )\n}\n\nexport default ScrollBase",d="import React, { useState } from 'react';\nimport { Scroll, Button } from '@evg-b/evg-ui';\n\nconst styles = {\n    width: '100px',\n    height: '100px',\n    margin: '10px',\n    color: 'white',\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    backgroundColor: 'rgba(0,0,0,.8)',\n}\n \nconst ScrollBase = () => {\n    const [count, setCount] = useState(2)\n    const blockScroll = (props) => {\n        return <div key={props} style={styles}>{props}</div>\n    }\n    const handleClick = (mod) => {\n        mod ? setCount(count + 1) : setCount(count - 1 < 0 ? 0 : count - 1)\n    }\n\n    return (\n        <div>\n            <div style={{ display: 'flex', marginBottom: '10px' }}>\n                <Button color=\"primary\" onClick={() => handleClick(true)}>+</Button>\n                <Button color=\"primary\" onClick={() => handleClick(false)}>-</Button>\n            </div>\n            <Scroll\n                autoHide={false}\n                style={{ width: 200, maxHeight: 400, backgroundColor: 'rgba(0,0,0,.1)' }}\n            >\n                {\n                    [...Array(count)].map((n, i) =>\n                        blockScroll(i + 1)\n                    )\n                }\n            </Scroll>\n        </div>\n    )\n}\n\nexport default ScrollBase",u="import React from 'react';\nimport { Scroll } from '@evg-b/evg-ui';\n\nconst styles = {\n    width: '100px',\n    height: '100px',\n    margin: '10px',\n    color: 'white',\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    backgroundColor: 'rgba(0,0,0,.8)', \n}\nconst ScrollTrackSizeAndColor = () => {\n    const blockScroll = (props) => {\n        return <div key={props} style={styles}>{props}</div>\n    }\n    return (\n        <Scroll\n            autoHide={false}\n            trackSize={20}\n            color=\"purple700\"\n            style={{ width: 300, height: 400, backgroundColor: 'rgba(0,0,0,.1)' }}\n        >\n            {\n                [...Array(25)].map((n, i) =>\n                    blockScroll(i + 1)\n                )\n            }\n        </Scroll>\n    )\n}\n\nexport default ScrollTrackSizeAndColor",m="import React from 'react';\nimport { Scroll } from '@evg-b/evg-ui';\n\nconst styles = {\n    width: '800px',\n    height: '100px',\n    margin: '10px',\n    color: 'white',\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    backgroundColor: 'rgba(0,0,0,.8)',\n}\n\nconst ScrollVerticalAndHorizontal = () => {\n    const blockScroll = (props) => {\n        return <div key={props} style={styles}>{props}</div>\n    }\n    return (\n        <Scroll\n            color=\"#FFFFFF\"\n            style={{ width: 400, height: 400 }}\n        >\n            {\n                [...Array(25)].map((n, i) =>\n                    blockScroll(i + 1)\n                )\n            }\n        </Scroll>\n    )\n}\n\nexport default ScrollVerticalAndHorizontal",b=t(146),g={width:"100px",height:"100px",margin:"10px",color:"white",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,.8)"},h=function(){return a.a.createElement(b.y,{autoHide:!0,style:{width:200,height:400,backgroundColor:"rgba(0,0,0,.1)"}},[].concat(Array(25)).map((function(e,n){return t=n+1,a.a.createElement("div",{key:t,style:g},t);var t})))},y={width:"100px",height:"100px",margin:"10px",color:"white",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,.8)"},x=function(){return a.a.createElement(b.y,{autoHide:!1,style:{width:200,height:400,backgroundColor:"rgba(0,0,0,.1)"}},[].concat(Array(25)).map((function(e,n){return t=n+1,a.a.createElement("div",{key:t,style:y},t);var t})))},S={width:"100px",height:"100px",margin:"10px",color:"white",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,.8)"},f=function(){var e=Object(l.useState)(2),n=e[0],t=e[1],r=function(e){t(e?n+1:n-1<0?0:n-1)};return a.a.createElement("div",null,a.a.createElement("div",{style:{display:"flex",marginBottom:"10px"}},a.a.createElement(b.e,{color:"primary",onClick:function(){return r(!0)}},"+"),a.a.createElement(b.e,{color:"primary",onClick:function(){return r(!1)}},"-")),a.a.createElement(b.y,{autoHide:!1,style:{width:200,maxHeight:400,backgroundColor:"rgba(0,0,0,.1)"}},[].concat(Array(n)).map((function(e,n){return t=n+1,a.a.createElement("div",{key:t,style:S},t);var t}))))},k={width:"100px",height:"100px",margin:"10px",color:"white",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,.8)"},C=function(){return a.a.createElement(b.y,{autoHide:!1,trackSize:20,color:"purple700",style:{width:300,height:400,backgroundColor:"rgba(0,0,0,.1)"}},[].concat(Array(25)).map((function(e,n){return t=n+1,a.a.createElement("div",{key:t,style:k},t);var t})))},v={width:"800px",height:"100px",margin:"10px",color:"white",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,.8)"},w=function(){return a.a.createElement(b.y,{color:"#FFFFFF",style:{width:400,height:400},autoHide:!1},[].concat(Array(25)).map((function(e,n){return t=n+1,a.a.createElement("div",{key:t,style:v},t);var t})))},j=function(){return a.a.createElement(i.a,{title:"AutoHide",demo:a.a.createElement(h,null),snippet:p})},H=function(){return a.a.createElement(i.a,{title:"Base",demo:a.a.createElement(x,null),snippet:s})},E=function(){return a.a.createElement(i.a,{title:"MaxHeight",demo:a.a.createElement(f,null),snippet:d})},A=function(){return a.a.createElement(i.a,{title:"TrackSizeAndColor",demo:a.a.createElement(C,null),snippet:u})},O=function(){return a.a.createElement(i.a,{title:"VerticalAndHorizontal",demo:a.a.createElement(w,null),snippet:m})},z=t(148),B={id:"Scroll",title:"Scroll",sidebar_label:"Scroll"},I={unversionedId:"Components/Scroll",id:"Components/Scroll",isDocsHomePage:!1,title:"Scroll",description:"import {",source:"@site/docs/Components/Scroll.mdx",slug:"/Components/Scroll",permalink:"/evg-ui/docs/Components/Scroll",version:"current",sidebar_label:"Scroll",sidebar:"someSidebar",previous:{title:"Ripple",permalink:"/evg-ui/docs/Components/Ripple"},next:{title:"Skeleton",permalink:"/evg-ui/docs/Components/Skeleton"}},T=[{value:"Base Scroll",id:"base-scroll",children:[]},{value:"Vertical \u0438 Horizontal",id:"vertical-\u0438-horizontal",children:[]},{value:"AutoHide",id:"autohide",children:[]},{value:"TrackSize and Color",id:"tracksize-and-color",children:[]},{value:"MaxHeight",id:"maxheight",children:[]},{value:"API",id:"api",children:[]}],F={toc:T};function M(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},F,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u041a\u0440\u043e\u0441\u0441\u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043d\u044b\u0439 \u0441\u043a\u0440\u043e\u043b\u043b\u0431\u0430\u0440."),Object(c.b)("h2",{id:"base-scroll"},"Base Scroll"),Object(c.b)(H,{mdxType:"ScrollBaseExample"}),Object(c.b)("h2",{id:"vertical-\u0438-horizontal"},"Vertical \u0438 Horizontal"),Object(c.b)("p",null,"\u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0439 Scrollbar \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u0435\u0441\u043b\u0438 \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0441\u043a\u0440\u043e\u043b\u0438\u0442\u044c. "),Object(c.b)(O,{mdxType:"ScrollVerticalAndHorizontalExample"}),Object(c.b)("h2",{id:"autohide"},"AutoHide"),Object(c.b)("p",null,"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0441\u043a\u0440\u044b\u0442\u0438\u0435 Scrollbar \u0435\u0441\u043b\u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",Object(c.b)("inlineCode",{parentName:"p"},"autoHide={true}"),"."),Object(c.b)(j,{mdxType:"ScrollAutoHideExample"}),Object(c.b)("h2",{id:"tracksize-and-color"},"TrackSize and Color"),Object(c.b)("p",null,"\u0426\u0432\u0435\u0442 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",Object(c.b)("inlineCode",{parentName:"p"},"color"),". \u0411\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e \u043f\u0440\u043e \u0446\u0432\u0435\u0442 \u0432 \u044d\u0442\u043e\u0439 ",Object(c.b)("a",{parentName:"p",href:"/docs/styles/color#props-color"},"\u0441\u0442\u0430\u0442\u044c\u0435"),". "),Object(c.b)(A,{mdxType:"ScrollTrackSizeAndColorExample"}),Object(c.b)("h2",{id:"maxheight"},"MaxHeight"),Object(c.b)("p",null,"\u0415\u0441\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e ",Object(c.b)("inlineCode",{parentName:"p"},"maxHeight"),", Scrollbar \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u044f\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0438 \u0438\u0441\u0447\u0435\u0437\u0430\u0442\u044c \u043f\u043e \u043c\u0435\u0440\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430.\n\u0422\u0430\u043a \u0436\u0435 \u043a\u0430\u043a \u0438 \u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439."),Object(c.b)(E,{mdxType:"ScrollMaxHeightExample"}),Object(c.b)("h2",{id:"api"},"API"),Object(c.b)(z.a,{name:"Scroll",mdxType:"ApiDoc"}))}M.isMDXComponent=!0}}]);