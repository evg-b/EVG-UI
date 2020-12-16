import React from 'react';
import { CodeExample } from '@evg-b/evg-ui';
import RippleBase from './RippleBase'
import RippleColor from './RippleColor'
import RippleContrast from './RippleContrast'
import Snippets from './snippets'

const RippleExampleBase = () => {
    return (
        <CodeExample
            title='base'
            demo={<RippleBase />}
            snippet={Snippets.RippleBase}
        />
    )
}
const RippleExampleColor = () => {
    return (
        <CodeExample
            title='Color'
            demo={<RippleColor />}
            snippet={Snippets.RippleColor}
        />
    )
}
const RippleExampleContrast = () => {
    return (
        <CodeExample
            title='Contrast'
            demo={<RippleContrast />}
            snippet={Snippets.RippleContrast}
        />
    )
}

export { RippleExampleBase, RippleExampleColor, RippleExampleContrast }