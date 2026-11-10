import React from 'react';
import PropDoc from '../../src/components/PropDoc/PropDoc'
import JsonPropDoc from './APIs.json'

export default ({ name, full = false }) => <PropDoc full={full} patient={JsonPropDoc[name]} />