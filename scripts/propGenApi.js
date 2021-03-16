const { readFileSync, writeFileSync } = require('fs');
const { resolve, basename } = require('path');
const docgen = require('react-docgen');
const glob = require('glob');

const whiteSheetOfFinishedComponents = new Map([
    ['AppBar', ''],
    ['Avatar', ''],
    ['AvatarGroup', ''],
    ['Badge', ''],
    ['Button', ''],
    ['ButtonBase', ''],
    ['ButtonGroup', ''],
    ['Checkbox', ''],
    ['IconButton', ''],
    ['TextField', ''],
    ['SwitchBase', ''],
    ['List', ''],
    ['ListItem', ''],
    ['ListItemAvatar', ''],
    ['ListItemAction', ''],
    ['ListItemText', ''],
    ['Loader', ''],
    ['Modal', ''],
    ['Radio', ''],
    ['Ripple', ''],
    ['SvgIcon', ''],
    ['Scroll', ''],
    ['Switch', ''],
    ['Select', ''],
    ['SelectOption', ''],
    ['TouchDriver', ''],
    ['Carousel', ''],
    ['Lightbox', ''],
    ['Cubes', ''],
    ['Popup', ''],
    ['Skeleton', ''],
    ['Tooltip', ''],
    ['Image', ''],
])

const TemplAPImdx = (componentName) => `
---
id: ${componentName}
title: ${componentName}
sidebar_label: ${componentName}
---

import ApiDoc from '../../Example/ApiDoc/ApiDoc'

<ApiDoc full name='${componentName}' />
`.trim()

const fileRaw = readFileSync('./docsite/Example/ApiDoc/APIs.json', 'utf8');

const jsonAPI = JSON.parse(fileRaw)

let keysJson = Object.keys(jsonAPI).filter(key => whiteSheetOfFinishedComponents.has(key))
console.log('keysJson:', keysJson)

keysJson.forEach(key => {
    console.log(key)
    writeFileSync(resolve(process.cwd(), `./docsite/docs/API/${key}.mdx`), TemplAPImdx(key));
})

// filling API doc
const APIfillingArr = keysJson.reduce((prev, next) => prev += `'API/${next}',\n`, '')
console.log('APIfillingArr:', APIfillingArr)
const TempFillingAPIdoc = `module.exports = [${APIfillingArr}]`.trim()


writeFileSync(resolve(process.cwd(), `./docsite/APIdocs.js`), TempFillingAPIdoc);