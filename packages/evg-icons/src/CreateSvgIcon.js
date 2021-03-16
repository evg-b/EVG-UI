import React from 'react';
import { SvgIcon } from '@evg-b/evg-ui'

export default function CreateSvgIcon({ path, name }) {
    const Component = React.forwardRef((props, ref) => (
        <SvgIcon ref={ref} {...props}>
            {path}
        </SvgIcon>
    ))
    Component.displayName = `${name}Icon`
    return Component
}