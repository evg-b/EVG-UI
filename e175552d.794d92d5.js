(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return q})),n.d(t,"metadata",(function(){return J})),n.d(t,"toc",(function(){return H})),n.d(t,"default",(function(){return F}));var a=n(3),s=n(7),i=n(0),r=n.n(i),o=n(147),c=n(154),l="import React from 'react';\nimport { Checkbox, List, ListItem, ListItemText, ListItemAction, withStyles } from '@evg-b/evg-ui';\n\nconst styles = {\n    base: {\n        display: 'flex',\n        flexWrap: 'wrap',\n        '&>*': {\n            margin: '5px'\n        }\n    }\n}\n\nconst Items = [\n    'Notifications', 'Security', 'Storage', 'Settings', 'Folders'\n]\n\nconst ListAction = (props) => {\n    const { classes } = props\n    return (\n        <div className={classes.base}>\n            <List style={{ width: '300px' }}>\n                {\n                    Items.map((item, i) =>\n                        <ListItem key={i}>\n                            <ListItemAction position='start'>\n                                <Checkbox defaultChecked />\n                            </ListItemAction>\n                            <ListItemText>{item}</ListItemText>\n                        </ListItem>\n                    )\n                }\n            </List>\n            <List style={{ width: '300px' }}>\n                {\n                    Items.map((item, i) =>\n                        <ListItem key={i}>\n                            <ListItemAction>\n                                <Checkbox defaultChecked />\n                            </ListItemAction>\n                            <ListItemText>{item}</ListItemText>\n                        </ListItem>\n                    )\n                }\n            </List>\n        </div>\n    )\n}\n\nexport default withStyles(styles)(ListAction)",m="import React from 'react';\nimport { Avatar, List, ListItem, ListItemText, ListItemAvatar, withStyles } from '@evg-b/evg-ui';\n\nconst styles = {\n    base: {\n        display: 'flex',\n        flexWrap: 'wrap',\n        '&>*': {\n            margin: '5px'\n        }\n    }\n}\n\nconst Items = [\n    'Captain Shepard', 'Garrus Vakarian', 'Tali\u2019Zorah nar Rayya', 'Liara T\u2019Soni', 'Ashley Williams', 'Urdnot Wrex'\n]\n\nconst ListAvatar = (props) => {\n    const { classes } = props\n    return (\n        <div className={classes.base}>\n            <List style={{ width: '300px' }}>\n                {\n                    Items.map((item, i) =>\n                        <ListItem key={i} button>\n                            <ListItemAvatar><Avatar /></ListItemAvatar>\n                            <ListItemText>{item}</ListItemText>\n                        </ListItem>\n                    )\n                }\n            </List>\n        </div>\n    )\n}\n\nexport default withStyles(styles)(ListAvatar)",p="import React from 'react';\nimport { List, ListItem, ListItemText, withStyles } from '@evg-b/evg-ui';\n\nconst styles = {\n    base: {\n        display: 'flex',\n        flexWrap: 'wrap',\n        '&>*': {\n            margin: '5px'\n        }\n    }\n}\n\nconst Items = [\n    'Notifications', 'Security', 'Storage', 'Settings', 'Folders'\n]\n\nconst ListBase = (props) => {\n    const { classes } = props\n    return (\n        <div className={classes.base}>\n            <List style={{ width: '300px' }}>\n                {\n                    Items.map((item, i) =>\n                        <ListItem key={i} button>\n                            <ListItemText>{item}</ListItemText>\n                        </ListItem>\n                    )\n                }\n            </List>\n        </div>\n    )\n}\n\nexport default withStyles(styles)(ListBase)",d="import React from 'react';\nimport { List, ListItem, ListItemText, withStyles } from '@evg-b/evg-ui';\n\nconst styles = {\n    base: {\n        display: 'flex',\n        flexWrap: 'wrap',\n        '&>*': {\n            margin: '5px'\n        }\n    }\n}\n\nconst Items = [\n    'Notifications', 'Security', 'Storage', 'Settings', 'Folders'\n]\n\nconst ListColor = (props) => {\n    const { classes } = props\n    return (\n        <div className={classes.base}>\n            <List color='primary' style={{ width: '300px' }}>\n                {\n                    Items.map((item, i) =>\n                        <ListItem key={i} button>\n                            <ListItemText>{item}</ListItemText>\n                        </ListItem>\n                    )\n                }\n            </List>\n        </div>\n    )\n}\n\nexport default withStyles(styles)(ListColor)",u="import React from 'react';\nimport { List, ListItem, ListItemText, withStyles } from '@evg-b/evg-ui';\n\nconst styles = {\n    base: {\n        display: 'flex',\n        flexWrap: 'wrap',\n        '&>*': {\n            margin: '5px'\n        }\n    }\n}\n\nconst Items = [\n    'Captain Shepard',\n    'Garrus Vakarian',\n    'Tali\u2019Zorah nar Rayya',\n    'Liara T\u2019Soni',\n    'Ashley Williams',\n    'Urdnot Wrex',\n    'Jacob Taylor',\n    'Jack',\n    'Legion',\n    'Miranda Lawson',\n    'Mordin Solus',\n    'Morinth',\n    'Samara',\n    'Thane Krios',\n    'EDI',\n    'Javik',\n    'Joker',\n    'The Illusive Man',\n    'David Edvard Anderson'\n]\n\nconst ListHeight = (props) => {\n    const { classes } = props\n    return (\n        <div className={classes.base}>\n            <List autoHide={false} color='primary' style={{ width: 300, height: 400 }}>\n                {\n                    Items.map((item, i) =>\n                        <ListItem key={i} button>\n                            <ListItemText>{item}</ListItemText>\n                        </ListItem>\n                    )\n                }\n            </List>\n        </div>\n    )\n}\n\nexport default withStyles(styles)(ListHeight)",b="import React from 'react';\nimport { Avatar, Badge, List, ListItem, ListItemText, ListItemAvatar, withStyles } from '@evg-b/evg-ui';\nimport useBaseUrl from '@docusaurus/useBaseUrl';\n\nconst styles = {\n    base: {\n        display: 'flex',\n        flexWrap: 'wrap',\n        '&>*': {\n            margin: '5px'\n        }\n    }\n}\nconst ListMeta = (props) => {\n    const { classes } = props\n    const Users = [\n        {\n            avatar: useBaseUrl('/source/Avatar/11.jpg'),\n            name: 'not_yet_King',\n            text: 'food!! food!! food!! food!! food!! food!! food!! food!!',\n            time: '12:35',\n            count: 10,\n        },\n        {\n            avatar: useBaseUrl('/source/Avatar/2.jpg'),\n            name: 'Umaru-chan',\n            text: 'go ps4?',\n            time: '00:11',\n            count: 1,\n        },\n        {\n            avatar: useBaseUrl('/source/Avatar/10.jpg'),\n            name: 'Rick',\n            text: 'oops it seems we have a problem',\n            time: '20:01',\n            count: 123,\n        },\n        {\n            avatar: useBaseUrl('/source/Avatar/12.jpg'),\n            name: 'skrip skrip',\n            text: 'me32#hr 23oi_e!! r$3;oq',\n            time: '20:00?',\n            count: 0,\n        },\n    ]\n    return (\n        <div className={classes.base}>\n            <List style={{ width: '300px' }}>\n                {\n                    Users.map((user, i) =>\n                        <ListItem key={i} button>\n                            <ListItemAvatar><Avatar src={user.avatar} /></ListItemAvatar>\n                            <ListItemText\n                                secondaryText={user.text}\n                                meta={user.time}\n                                secondaryMeta={<Badge ripe count={user.count} />}\n                            >\n                                {user.name}\n                            </ListItemText>\n                        </ListItem>\n                    )\n                }\n            </List>\n        </div>\n    )\n}\n\nexport default withStyles(styles)(ListMeta)",x="import React from 'react';\nimport { List, ListItem, ListItemText, withStyles } from '@evg-b/evg-ui';\n\nconst styles = {\n    base: {\n        display: 'flex',\n        flexWrap: 'wrap',\n        '&>*': {\n            margin: '5px'\n        }\n    }\n}\n\nconst Items = [\n    'Notifications', 'Security', 'Storage', 'Settings', 'Folders'\n]\n\nconst ListSecondaryText = (props) => {\n    const { classes } = props\n    return (\n        <div className={classes.base}>\n            <List style={{ width: '300px' }}>\n                {\n                    Items.map((item, i) =>\n                        <ListItem key={i} button>\n                            <ListItemText secondaryText={'secondaryText'} >{item}</ListItemText>\n                        </ListItem>\n                    )\n                }\n            </List>\n        </div>\n    )\n}\n\nexport default withStyles(styles)(ListSecondaryText)",L=n(146),y=["Notifications","Security","Storage","Settings","Folders"],f=Object(L.K)({base:{display:"flex",flexWrap:"wrap","&>*":{margin:"5px"}}})((function(e){var t=e.classes;return r.a.createElement("div",{className:t.base},r.a.createElement(L.p,{style:{width:"300px"}},y.map((function(e,t){return r.a.createElement(L.q,{key:t},r.a.createElement(L.r,{position:"start"},r.a.createElement(L.h,{defaultChecked:!0})),r.a.createElement(L.t,null,e))}))),r.a.createElement(L.p,{style:{width:"300px"}},y.map((function(e,t){return r.a.createElement(L.q,{key:t},r.a.createElement(L.r,null,r.a.createElement(L.h,{defaultChecked:!0})),r.a.createElement(L.t,null,e))}))))})),v=["Captain Shepard","Garrus Vakarian","Tali\u2019Zorah nar Rayya","Liara T\u2019Soni","Ashley Williams","Urdnot Wrex"],h=Object(L.K)({base:{display:"flex",flexWrap:"wrap","&>*":{margin:"5px"}}})((function(e){var t=e.classes;return r.a.createElement("div",{className:t.base},r.a.createElement(L.p,{style:{width:"300px"}},v.map((function(e,t){return r.a.createElement(L.q,{key:t,button:!0},r.a.createElement(L.s,null,r.a.createElement(L.b,null)),r.a.createElement(L.t,null,e))}))))})),I=["Notifications","Security","Storage","Settings","Folders"],g=Object(L.K)({base:{display:"flex",flexWrap:"wrap","&>*":{margin:"5px"}}})((function(e){var t=e.classes;return r.a.createElement("div",{className:t.base},r.a.createElement(L.p,{style:{width:"300px"}},I.map((function(e,t){return r.a.createElement(L.q,{key:t,button:!0},r.a.createElement(L.t,null,e))}))))})),E=["Notifications","Security","Storage","Settings","Folders"],T=Object(L.K)({base:{display:"flex",flexWrap:"wrap","&>*":{margin:"5px"}}})((function(e){var t=e.classes;return r.a.createElement("div",{className:t.base},r.a.createElement(L.p,{color:"primary",style:{width:"300px"}},E.map((function(e,t){return r.a.createElement(L.q,{key:t,button:!0},r.a.createElement(L.t,null,e))}))))})),j=["Captain Shepard","Garrus Vakarian","Tali\u2019Zorah nar Rayya","Liara T\u2019Soni","Ashley Williams","Urdnot Wrex","Jacob Taylor","Jack","Legion","Miranda Lawson","Mordin Solus","Morinth","Samara","Thane Krios","EDI","Javik","Joker","The Illusive Man","David Edvard Anderson"],w=Object(L.K)({base:{display:"flex",flexWrap:"wrap","&>*":{margin:"5px"}}})((function(e){var t=e.classes;return r.a.createElement("div",{className:t.base},r.a.createElement(L.p,{autoHide:!1,color:"primary",style:{width:300,height:400}},j.map((function(e,t){return r.a.createElement(L.q,{key:t,button:!0},r.a.createElement(L.t,null,e))}))))})),S=n(156),A=Object(L.K)({base:{display:"flex",flexWrap:"wrap","&>*":{margin:"5px"}}})((function(e){var t=e.classes,n=[{avatar:Object(S.a)("/source/Avatar/11.jpg"),name:"not_yet_King",text:"food!! food!! food!! food!! food!! food!! food!! food!!",time:"12:35",count:10},{avatar:Object(S.a)("/source/Avatar/2.jpg"),name:"Umaru-chan",text:"go ps4?",time:"00:11",count:1},{avatar:Object(S.a)("/source/Avatar/10.jpg"),name:"Rick",text:"oops it seems we have a problem",time:"20:01",count:123},{avatar:Object(S.a)("/source/Avatar/12.jpg"),name:"skrip skrip",text:"me32#hr 23oi_e!! r$3;oq",time:"20:00?",count:0}];return r.a.createElement("div",{className:t.base},r.a.createElement(L.p,{style:{width:"300px"}},n.map((function(e,t){return r.a.createElement(L.q,{key:t,button:!0},r.a.createElement(L.s,null,r.a.createElement(L.b,{src:e.avatar})),r.a.createElement(L.t,{secondaryText:e.text,meta:e.time,secondaryMeta:r.a.createElement(L.d,{ripe:!0,count:e.count})},e.name))}))))})),O=["Notifications","Security","Storage","Settings","Folders"],k=Object(L.K)({base:{display:"flex",flexWrap:"wrap","&>*":{margin:"5px"}}})((function(e){var t=e.classes;return r.a.createElement("div",{className:t.base},r.a.createElement(L.p,{style:{width:"300px"}},O.map((function(e,t){return r.a.createElement(L.q,{key:t,button:!0},r.a.createElement(L.t,{secondaryText:"secondaryText"},e))}))))})),N=function(){return r.a.createElement(c.a,{title:"Actions",demo:r.a.createElement(f,null),snippet:l})},C=function(){return r.a.createElement(c.a,{title:"Avatar",demo:r.a.createElement(h,null),snippet:m})},W=function(){return r.a.createElement(c.a,{title:"Base",demo:r.a.createElement(g,null),snippet:p})},M=function(){return r.a.createElement(c.a,{title:"Color",demo:r.a.createElement(T,null),snippet:d})},U=function(){return r.a.createElement(c.a,{title:"Height",demo:r.a.createElement(w,null),snippet:u})},B=function(){return r.a.createElement(c.a,{title:"Meta",demo:r.a.createElement(A,null),snippet:b})},R=function(){return r.a.createElement(c.a,{title:"SecondaryText",demo:r.a.createElement(k,null),snippet:x})},K=n(148),q={id:"List",title:"List",sidebar_label:"List"},J={unversionedId:"Components/List",id:"Components/List",isDocsHomePage:!1,title:"List",description:"import {",source:"@site/docs/Components/List.mdx",slug:"/Components/List",permalink:"/EVG-UI/docs/Components/List",version:"current",sidebar_label:"List",sidebar:"someSidebar",previous:{title:"Lightbox",permalink:"/EVG-UI/docs/Components/Lightbox"},next:{title:"Loader",permalink:"/EVG-UI/docs/Components/Loader"}},H=[{value:"Base List",id:"base-list",children:[]},{value:"Color",id:"color",children:[]},{value:"Height",id:"height",children:[]},{value:"SecondaryText",id:"secondarytext",children:[]},{value:"Avatar",id:"avatar",children:[]},{value:"Actions",id:"actions",children:[]},{value:"Meta",id:"meta",children:[]},{value:"API",id:"api",children:[]}],D={toc:H};function F(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},D,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u0421\u043f\u0438\u0441\u043a\u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u0441\u043e\u0431\u043e\u0439 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0441 \u043e\u0434\u043d\u043e\u0440\u043e\u0434\u043d\u044b\u043c\u0438 \u0442\u0438\u043f\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u043f\u043b\u043e\u0441\u043a\u043e\u0441\u0442\u0438. \u042d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0441\u043f\u0438\u0441\u043a\u0430 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442 \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043c\u044b\u0448\u0438 \u0438 \u0436\u0435\u0441\u0442\u043e\u0432."),Object(o.b)("h2",{id:"base-list"},"Base List"),Object(o.b)(W,{mdxType:"ListBaseExample"}),Object(o.b)("h2",{id:"color"},"Color"),Object(o.b)("p",null,"\u0426\u0432\u0435\u0442 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",Object(o.b)("inlineCode",{parentName:"p"},"color"),". \u0411\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e \u043f\u0440\u043e \u0446\u0432\u0435\u0442 \u0432 \u044d\u0442\u043e\u0439 ",Object(o.b)("a",{parentName:"p",href:"/docs/styles/color#props-color"},"\u0441\u0442\u0430\u0442\u044c\u0435"),"."),Object(o.b)(M,{mdxType:"ListColorExample"}),Object(o.b)("h2",{id:"height"},"Height"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"List")," \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0432 \u043d\u0443\u0442\u0440\u0438 \u0441\u0435\u0431\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 ",Object(o.b)("inlineCode",{parentName:"p"},"Scroll")),Object(o.b)(U,{mdxType:"ListHeightExample"}),Object(o.b)("h2",{id:"secondarytext"},"SecondaryText"),Object(o.b)(R,{mdxType:"ListSecondaryTextExample"}),Object(o.b)("h2",{id:"avatar"},"Avatar"),Object(o.b)(C,{mdxType:"ListAvatarExample"}),Object(o.b)("h2",{id:"actions"},"Actions"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ListItemAction")," \u044d\u0442\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0434\u043b\u044f \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u044f ",Object(o.b)("inlineCode",{parentName:"p"},"node")," \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a ",Object(o.b)("inlineCode",{parentName:"p"},"Button"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Icons")," \u0438 \u0434.\u0440. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"<ListItem>\n\n    <ListItemAction position='start'>\n        <Icon />\n    </ListItemAction>\n\n    <ListItemAction position='end'>\n        <Icon />\n    </ListItemAction>\n\n</ListItem>\n")),Object(o.b)(N,{mdxType:"ListActionsExample"}),Object(o.b)("h2",{id:"meta"},"Meta"),Object(o.b)("p",null,"\u041c\u0435\u0442\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u043e\u043b\u0435\u0437\u043d\u0430 \u0434\u043b\u044f \u043f\u043e\u043a\u0430\u0437\u0430 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0438\u043b\u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"<ListItemText\n    meta='12:35'\n    secondaryMeta={<Badge ripe count={2} />}\n>\n    Message\n</ListItemText>\n")),Object(o.b)(B,{mdxType:"ListMetaExample"}),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)(K.a,{name:"List",mdxType:"ApiDoc"}))}F.isMDXComponent=!0},156:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var a=n(22),s=n(162);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,r=i.forcePrependBaseUrl,o=void 0!==r&&r,c=i.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(s.b)(n))return n;if(o)return t+n;var m=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+m:m}(i,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},162:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function s(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}))}}]);