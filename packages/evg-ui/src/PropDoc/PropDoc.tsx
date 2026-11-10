import { useState, useEffect, useRef } from 'react'

import type { PropDocProps } from './PropDoc.types'

import * as Styled from './PropDoc.styled'

const DEFAULT_PATIENT: NonNullable<PropDocProps['patient']> = {}

const PropDoc = ({
  ref,
  className,
  children,
  patient = DEFAULT_PATIENT,
  ...otherProps
}: PropDocProps) => {
  // console.log('props', patient.props)
  const prop = ({ name, type, defaultValue, description }) => {
    // console.log('prop', name)
    if (!type) return null // defender wrong JSON

    let values

    if (type.value) {
      if (type.name === 'arrayOf') {
        values = `array[${type.value.name}]`
      } else {
        values =
          type.value &&
          type.value.reduce((mem, val) => {
            return mem + ` ${val.value || val.name} |`
          }, `|`)
      }
    } else {
      values = type.name
    }

    return (
      <Styled.PropertyRow key={name}>
        <td>{name}</td>
        <td>{values}</td>
        <td>{defaultValue ? defaultValue.value : null}</td>
        <td>{description}</td>
      </Styled.PropertyRow>
    )
  }

  return (
    <>
      {/* <h1>{patient.displayName}</h1> */}

      <Styled.Root {...otherProps} className={className}>
        <Styled.Table>
          <thead>
            <Styled.HeaderRow>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </Styled.HeaderRow>
          </thead>
          <tbody>
            {patient.props &&
              Object.entries(patient.props).map(([name, p]) =>
                prop({
                  name,
                  ...p
                })
              )}
          </tbody>
        </Styled.Table>
      </Styled.Root>
    </>
  )
}

PropDoc.displayName = 'PropDocEVG'
export default PropDoc
