(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{111:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return G})),t.d(e,"metadata",(function(){return P})),t.d(e,"toc",(function(){return F})),t.d(e,"default",(function(){return X}));var a=t(3),o=t(7),r=t(0),l=t.n(r),i=t(147),c=t(154),s="import React from 'react';\nimport { Button, withStyles } from '@evg-b/evg-ui';\n\nconst styles = {\n    base: {\n        display: 'flex',\n        flexWrap: 'wrap',\n        '&>*': {\n            margin: '5px'\n        }\n    }\n}\nconst ButtonBase = (props) => {\n    const { classes } = props\n    return (\n        <div className={classes.base}>\n            <Button>text</Button>\n            <Button variant='contained' color='primary' >contained</Button>\n            <Button variant='contained' color='primary' disabled>disabled</Button>\n            <Button variant='contained' href=\"#base-button\">Link</Button>\n        </div>\n    )\n}\n\nexport default withStyles(styles)(ButtonBase)",u="import React from 'react';\nimport { Button, withStyles } from '@evg-b/evg-ui';\n\nconst styles = {\n    base: {\n        display: 'flex',\n        flexWrap: 'wrap',\n        '&>*': {\n            margin: '5px'\n        }\n    }\n}\nconst ButtonColor = (props) => {\n    const { classes } = props\n    return (\n        <div className={classes.base}>\n            <Button >text</Button>\n            <Button color='primary'>primary</Button>\n            <Button color='warn'>warn</Button>\n            <Button color='success'>success</Button>\n            <Button color='fail'>fail</Button>\n        </div>\n    )\n}\n\nexport default withStyles(styles)(ButtonColor)",p="import React from 'react';\nimport { Button, withStyles } from '@evg-b/evg-ui';\n\nconst styles = {\n    base: {\n        display: 'flex',\n        flexWrap: 'wrap',\n        '&>*': {\n            margin: '5px'\n        }\n    }\n}\nconst ButtonElevation = (props) => {\n    const { classes } = props\n    return (\n        <div className={classes.base}>\n            <Button variant='contained' color='primary'>elevation</Button>\n            <Button variant='contained' color='primary' elevation={false}>no elevation</Button>\n        </div>\n    )\n}\n\nexport default withStyles(styles)(ButtonElevation)",d="import React from 'react';\nimport { IconButton, withStyles } from '@evg-b/evg-ui';\nimport {\n    Close,\n    Cancel,\n    Menu,\n    Visibility,\n    Fullscreen,\n} from '@evg-b/evg-icons';\n\nconst styles = {\n    base: {\n        display: 'flex',\n        flexWrap: 'wrap',\n        '&>*': {\n            margin: '5px'\n        }\n    }\n}\nconst ButtonIconButton = (props) => {\n    const { classes } = props\n    return (\n        <div className={classes.base}>\n            <IconButton><Close /></IconButton>\n            <IconButton color='primary'><Cancel /></IconButton>\n            <IconButton color='warn'><Menu /></IconButton>\n            <IconButton color='success'><Fullscreen /></IconButton>\n            <IconButton disabled><Visibility /></IconButton>\n        </div>\n    )\n}\n\nexport default withStyles(styles)(ButtonIconButton)",m="import React, { useState } from 'react';\nimport { Button, withStyles } from '@evg-b/evg-ui';\nimport { Check } from '@evg-b/evg-icons';\n\nconst styles = {\n    base: {\n        display: 'flex',\n        flexWrap: 'wrap',\n        '&>*': {\n            margin: '5px'\n        }\n    }\n}\nconst ButtonLoading = (props) => {\n    const { classes } = props\n    const [loading, setLoading] = useState([])\n    const changeLoad = (index, state) => {\n        setLoading(l => {\n            let newL = [...l]\n            newL[index] = state\n            return newL\n        })\n    }\n    const handleLoad = (index) => {\n        changeLoad(index, true)\n        setTimeout(() => changeLoad(index, false), 3000)\n    }\n    return (\n        <div className={classes.base}>\n            <Button\n                loading={loading[1]}\n                variant='contained'\n                color='primary'\n                startIcon={<Check />}\n                onClick={() => handleLoad(1)}\n            >\n                Click Me!\n            </Button>\n            <Button\n                loading={loading[2]}\n                variant='contained'\n                color='primary'\n                onClick={() => handleLoad(2)}\n            >\n                And Me Me!\n            </Button>\n        </div>\n    )\n}\n\nexport default withStyles(styles)(ButtonLoading)",b="import React from 'react';\nimport { Button, withStyles } from '@evg-b/evg-ui';\n\nconst styles = {\n    base: {\n        display: 'flex',\n        flexWrap: 'wrap',\n        '&>*': {\n            margin: '5px'\n        }\n    }\n}\nconst ButtonRound = (props) => {\n    const { classes } = props\n    return (\n        <div className={classes.base}>\n            <Button variant='text' color='primary' round >default</Button>\n            <Button variant='contained' color='primary' round >contained</Button>\n            <Button variant='outlined' color='primary' round >outlined</Button>\n        </div>\n    )\n}\n\nexport default withStyles(styles)(ButtonRound)",B="import React from 'react';\nimport { Button, withStyles } from '@evg-b/evg-ui';\n\nconst styles = {\n    base: {\n        display: 'flex',\n        flexWrap: 'wrap',\n        '&>*': {\n            margin: '5px'\n        }\n    }\n}\nconst ButtonSize = (props) => {\n    const { classes } = props\n    return (\n        <div className={classes.base}>\n            <Button variant='contained' color='primary' size='small' >small</Button>\n            <Button variant='contained' color='primary' size='medium' >medium</Button>\n            <Button variant='contained' color='primary' size='large' >large</Button>\n            <Button variant='contained' color='primary' size='extra' >extra</Button>\n        </div>\n    )\n}\n\nexport default withStyles(styles)(ButtonSize)",v="import React from 'react';\nimport { Button, withStyles } from '@evg-b/evg-ui';\nimport { Check, Cancel } from '@evg-b/evg-icons';\n\nconst styles = {\n    base: {\n        display: 'flex',\n        flexWrap: 'wrap',\n        '&>*': {\n            margin: '5px'\n        }\n    }\n}\nconst ButtonStartIconAndEndIcon = (props) => {\n    const { classes } = props\n    return (\n        <div className={classes.base}>\n            <Button\n                startIcon={<Check />}\n            >\n                default\n            </Button>\n            <Button\n                variant='contained'\n                color='primary'\n                endIcon={<Cancel />}\n            >\n                Button\n            </Button>\n            <Button\n                variant='outlined'\n                color='fail'\n                round\n                startIcon={<Check />}\n                endIcon={<Cancel />}\n            >\n                outlined\n            </Button>\n        </div>\n    )\n}\n\nexport default withStyles(styles)(ButtonStartIconAndEndIcon)",f="import React from 'react';\nimport { Button } from '@evg-b/evg-ui';\n\nconst ButtonUppercase = () => {\n    return (\n        <Button\n            variant='contained'\n            color='primary'\n            uppercase={false}\n        >\n            Uppercase\n        </Button>\n    )\n}\n\nexport default ButtonUppercase",y="import React from 'react';\nimport { Button, withStyles } from '@evg-b/evg-ui';\n\nconst styles = {\n    base: {\n        display: 'flex',\n        flexWrap: 'wrap',\n        '&>*': {\n            margin: '5px'\n        }\n    }\n}\nconst ButtonVariant = (props) => {\n    const { classes } = props\n    return (\n        <div className={classes.base}>\n            <Button variant='text' color='primary'>default</Button>\n            <Button variant='contained' color='primary'>Button</Button>\n            <Button variant='outlined' color='primary'>outlined</Button>\n        </div>\n    )\n}\n\nexport default withStyles(styles)(ButtonVariant)",x=t(146),E=Object(x.K)({base:{display:"flex",flexWrap:"wrap","&>*":{margin:"5px"}}})((function(n){var e=n.classes;return l.a.createElement("div",{className:e.base},l.a.createElement(x.e,null,"text"),l.a.createElement(x.e,{variant:"contained",color:"primary"},"contained"),l.a.createElement(x.e,{variant:"contained",color:"primary",disabled:!0},"disabled"),l.a.createElement(x.e,{variant:"contained",href:"#base-button"},"Link"))})),g=Object(x.K)({base:{display:"flex",flexWrap:"wrap","&>*":{margin:"5px"}}})((function(n){var e=n.classes;return l.a.createElement("div",{className:e.base},l.a.createElement(x.e,null,"text"),l.a.createElement(x.e,{color:"primary"},"primary"),l.a.createElement(x.e,{color:"warn"},"warn"),l.a.createElement(x.e,{color:"success"},"success"),l.a.createElement(x.e,{color:"fail"},"fail"))})),h=Object(x.K)({base:{display:"flex",flexWrap:"wrap","&>*":{margin:"5px"}}})((function(n){var e=n.classes;return l.a.createElement("div",{className:e.base},l.a.createElement(x.e,{variant:"contained",color:"primary"},"elevation"),l.a.createElement(x.e,{variant:"contained",color:"primary",elevation:!1},"no elevation"))})),j=t(161),O=Object(x.K)({base:{display:"flex",flexWrap:"wrap","&>*":{margin:"5px"}}})((function(n){var e=n.classes;return l.a.createElement("div",{className:e.base},l.a.createElement(x.m,null,l.a.createElement(j.e,null)),l.a.createElement(x.m,{color:"primary"},l.a.createElement(j.b,null)),l.a.createElement(x.m,{color:"warn"},l.a.createElement(j.i,null)),l.a.createElement(x.m,{color:"success"},l.a.createElement(j.h,null)),l.a.createElement(x.m,{disabled:!0},l.a.createElement(j.n,null)))})),w=Object(x.K)({base:{display:"flex",flexWrap:"wrap","&>*":{margin:"5px"}}})((function(n){var e=n.classes,t=Object(r.useState)([]),a=t[0],o=t[1],i=function(n,e){o((function(t){var a=[].concat(t);return a[n]=e,a}))},c=function(n){i(n,!0),setTimeout((function(){return i(n,!1)}),3e3)};return l.a.createElement("div",{className:e.base},l.a.createElement(x.e,{loading:a[1],variant:"contained",color:"primary",startIcon:l.a.createElement(j.c,null),onClick:function(){return c(1)}},"Click Me!"),l.a.createElement(x.e,{loading:a[2],variant:"contained",color:"primary",onClick:function(){return c(2)}},"And Me Me!"))})),I=Object(x.K)({base:{display:"flex",flexWrap:"wrap","&>*":{margin:"5px"}}})((function(n){var e=n.classes;return l.a.createElement("div",{className:e.base},l.a.createElement(x.e,{variant:"text",color:"primary",round:!0},"default"),l.a.createElement(x.e,{variant:"contained",color:"primary",round:!0},"contained"),l.a.createElement(x.e,{variant:"outlined",color:"primary",round:!0},"outlined"))})),C=Object(x.K)({base:{display:"flex",flexWrap:"wrap","&>*":{margin:"5px"}}})((function(n){var e=n.classes;return l.a.createElement("div",{className:e.base},l.a.createElement(x.e,{variant:"contained",color:"primary",size:"small"},"small"),l.a.createElement(x.e,{variant:"contained",color:"primary",size:"medium"},"medium"),l.a.createElement(x.e,{variant:"contained",color:"primary",size:"large"},"large"),l.a.createElement(x.e,{variant:"contained",color:"primary",size:"extra"},"extra"))})),S=Object(x.K)({base:{display:"flex",flexWrap:"wrap","&>*":{margin:"5px"}}})((function(n){var e=n.classes;return l.a.createElement("div",{className:e.base},l.a.createElement(x.e,{startIcon:l.a.createElement(j.c,null)},"default"),l.a.createElement(x.e,{variant:"contained",color:"primary",endIcon:l.a.createElement(j.b,null)},"Button"),l.a.createElement(x.e,{variant:"outlined",color:"fail",round:!0,startIcon:l.a.createElement(j.c,null),endIcon:l.a.createElement(j.b,null)},"outlined"))})),N=function(){return l.a.createElement(x.e,{variant:"contained",color:"primary",uppercase:!1},"Uppercase")},L=Object(x.K)({base:{display:"flex",flexWrap:"wrap","&>*":{margin:"5px"}}})((function(n){var e=n.classes;return l.a.createElement("div",{className:e.base},l.a.createElement(x.e,{variant:"text",color:"primary"},"default"),l.a.createElement(x.e,{variant:"contained",color:"primary"},"Button"),l.a.createElement(x.e,{variant:"outlined",color:"primary"},"outlined"))})),k=function(){return l.a.createElement(c.a,{title:"Base",demo:l.a.createElement(E,null),snippet:s})},W=function(){return l.a.createElement(c.a,{title:"Color",demo:l.a.createElement(g,null),snippet:u})},z=function(){return l.a.createElement(c.a,{title:"Elevation",demo:l.a.createElement(h,null),snippet:p})},R=function(){return l.a.createElement(c.a,{title:"IconButton",demo:l.a.createElement(O,null),snippet:d})},T=function(){return l.a.createElement(c.a,{title:"Loading",demo:l.a.createElement(w,null),snippet:m})},M=function(){return l.a.createElement(c.a,{title:"Round",demo:l.a.createElement(I,null),snippet:b})},U=function(){return l.a.createElement(c.a,{title:"Size",demo:l.a.createElement(C,null),snippet:B})},V=function(){return l.a.createElement(c.a,{title:"StartIconAndEndIcon",demo:l.a.createElement(S,null),snippet:v})},A=function(){return l.a.createElement(c.a,{title:"Uppercase",demo:l.a.createElement(N,null),snippet:f})},K=function(){return l.a.createElement(c.a,{title:"Variant",demo:l.a.createElement(L,null),snippet:y})},D=t(148),G={id:"Button",title:"Button",sidebar_label:"Button"},P={unversionedId:"Components/Button",id:"Components/Button",isDocsHomePage:!1,title:"Button",description:"import {",source:"@site/docs/Components/Button.mdx",slug:"/Components/Button",permalink:"/EVG-UI/docs/Components/Button",version:"current",sidebar_label:"Button",sidebar:"someSidebar",previous:{title:"Badge",permalink:"/EVG-UI/docs/Components/Badge"},next:{title:"ButtonGroup",permalink:"/EVG-UI/docs/Components/ButtonGroup"}},F=[{value:"Base Button",id:"base-button",children:[]},{value:"Size",id:"size",children:[]},{value:"Variant",id:"variant",children:[]},{value:"Color",id:"color",children:[]},{value:"IconButton",id:"iconbutton",children:[]},{value:"Round",id:"round",children:[]},{value:"StartIcon \u0438 EndIcon",id:"starticon-\u0438-endicon",children:[]},{value:"Uppercase",id:"uppercase",children:[]},{value:"LevelShadow",id:"levelshadow",children:[]},{value:"Loading",id:"loading",children:[]},{value:"API",id:"api",children:[]}],J={toc:F};function X(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(i.b)("wrapper",Object(a.a)({},J,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u041a\u043d\u043e\u043f\u043a\u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0438 \u0434\u0435\u043b\u0430\u0442\u044c \u0432\u044b\u0431\u043e\u0440 \u043e\u0434\u043d\u0438\u043c \u043d\u0430\u0436\u0430\u0442\u0438\u0435\u043c. \u042f\u0432\u043b\u044f\u0435\u0442\u0441\u044f ",Object(i.b)("inlineCode",{parentName:"p"},"<button>")," \u0438\u043b\u0438 ",Object(i.b)("inlineCode",{parentName:"p"},"<a>")," \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c \u0441 ripple \u044d\u0444\u0444\u0435\u043a\u0442\u043e\u043c \u043e\u0442 Material Design."),Object(i.b)("h2",{id:"base-button"},"Base Button"),Object(i.b)(k,{mdxType:"ButtonBaseExample"}),Object(i.b)("h2",{id:"size"},"Size"),Object(i.b)("p",null,"\u0420\u0430\u0437\u043c\u0435\u0440 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",Object(i.b)("inlineCode",{parentName:"p"},"size"),"."),Object(i.b)(U,{mdxType:"ButtonSizeExample"}),Object(i.b)("h2",{id:"variant"},"Variant"),Object(i.b)("p",null,"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u043a\u043d\u043e\u043f\u043a\u0438 ",Object(i.b)("inlineCode",{parentName:"p"},"text"),", ",Object(i.b)("inlineCode",{parentName:"p"},"contained"),", ",Object(i.b)("inlineCode",{parentName:"p"},"outlined"),"."),Object(i.b)(K,{mdxType:"ButtonVariantExample"}),Object(i.b)("h2",{id:"color"},"Color"),Object(i.b)("p",null,"\u0426\u0432\u0435\u0442 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",Object(i.b)("inlineCode",{parentName:"p"},"color"),". \u0411\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e \u043f\u0440\u043e \u0446\u0432\u0435\u0442 \u0432 \u044d\u0442\u043e\u0439 ",Object(i.b)("a",{parentName:"p",href:"/docs/styles/color#props-color"},"\u0441\u0442\u0430\u0442\u044c\u0435"),"."),Object(i.b)(W,{mdxType:"ButtonColorExample"}),Object(i.b)("h2",{id:"iconbutton"},"IconButton"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"IconButton")," \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0438\u0437 \u0438\u043a\u043e\u043d\u043a\u0438 \u043a\u043d\u043e\u043f\u043a\u0443."),Object(i.b)(R,{mdxType:"ButtonIconButtonExample"}),Object(i.b)("h2",{id:"round"},"Round"),Object(i.b)(M,{mdxType:"ButtonRoundExample"}),Object(i.b)("h2",{id:"starticon-\u0438-endicon"},"StartIcon \u0438 EndIcon"),Object(i.b)("p",null,"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 ",Object(i.b)("inlineCode",{parentName:"p"},"StartIcon")," \u0438 ",Object(i.b)("inlineCode",{parentName:"p"},"EndIcon")," \u044d\u0442\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b \u0434\u043b\u044f \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u044f ",Object(i.b)("inlineCode",{parentName:"p"},"node")," \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a ",Object(i.b)("inlineCode",{parentName:"p"},"Icons")," \u0438 \u0434.\u0440."),Object(i.b)(V,{mdxType:"ButtonStartIconAndEndIconExample"}),Object(i.b)("h2",{id:"uppercase"},"Uppercase"),Object(i.b)("p",null,"\u0415\u0441\u043b\u0438 ",Object(i.b)("inlineCode",{parentName:"p"},"uppercase={false}"),", \u0432\u044b\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0432\u0435\u0440\u0445\u043d\u0438\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440 \u0442\u0435\u043a\u0441\u0442\u0430."),Object(i.b)(A,{mdxType:"ButtonUppercaseExample"}),Object(i.b)("h2",{id:"levelshadow"},"LevelShadow"),Object(i.b)("p",null,"\u0415\u0441\u043b\u0438 ",Object(i.b)("inlineCode",{parentName:"p"},"elevation={false}"),", \u0443\u0431\u0440\u0430\u0442\u044c \u0442\u0435\u043d\u044c \u0435\u0441\u043b\u0438 \u0435\u0441\u0442\u044c."),Object(i.b)(z,{mdxType:"ButtonElevationExample"}),Object(i.b)("h2",{id:"loading"},"Loading"),Object(i.b)("p",null,"Loader \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043d\u0438\u043c\u0430\u0442\u044c \u043c\u0435\u0441\u0442\u043e \u0442\u0435\u043a\u0441\u0442\u0430. \u0415\u0441\u043b\u0438 \u0435\u0441\u0442\u044c ",Object(i.b)("inlineCode",{parentName:"p"},"startIcon")," \u0442\u043e Loader \u0437\u0430\u0439\u043c\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0433\u043e \u043c\u0435\u0441\u0442\u043e."),Object(i.b)(T,{mdxType:"ButtonLoadingExample"}),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)(D.a,{name:"Button",mdxType:"ApiDoc"}))}X.isMDXComponent=!0}}]);