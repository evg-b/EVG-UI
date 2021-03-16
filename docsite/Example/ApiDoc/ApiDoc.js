import React from 'react';
import { PropDoc } from '@evg-b/evg-tools'
import JsonPropDoc from './APIs.json'

export default ({ name, full = false }) => <PropDoc full={full} patient={JsonPropDoc[name]} />