import { create } from 'jss'
import preset from 'jss-preset-default'
import GetSheetIndex from './GetSheetIndex'

const jss = create(preset()) // .setup({ id: { minify: true } }) // minify

const createStyleSheet = (styleObject, displayName, Prefix = '') => {
    return jss.createStyleSheet(styleObject, {
        classNamePrefix: `${displayName}${Prefix}`, // -d-
        link: true,
        meta: displayName,
        index: GetSheetIndex()
    })
}
export default createStyleSheet