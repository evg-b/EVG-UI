import React from 'react';
import { PropDoc } from '@evg-b/evg-ui'
import JsonPropDoc from './APIs.json'

export default ({ name }) => <PropDoc patient={JsonPropDoc[name]} />