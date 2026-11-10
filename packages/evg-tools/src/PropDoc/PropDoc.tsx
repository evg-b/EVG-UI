import type { PropDocProps } from './PropDoc.types'

import * as Styled from './PropDoc.styled'

const ValueDetectArr = (value) => {
  if (Array.isArray(value)) {
    return value.reduce((mem, val, index, arr) => {
      if (Array.isArray(val.value)) {
        return mem + `${val.name}[\n${ValueDetectArr(val.value)}\n] or `
      } else {
        return (
          mem +
          `${val.value || val.name}${index === arr.length - 1 ? '' : ',\n '}`
        )
      }
    }, ``)
  } else {
    return value
  }
}

const DEFAULT_PATIENT: NonNullable<PropDocProps['patient']> = {}

const PropDoc = ({
  ref,
  className,
  children,
  patient = DEFAULT_PATIENT,
  full = false,
  ...otherProps
}: PropDocProps) => {
  const prop = ({ name, type, defaultValue, description }) => {
    if (!type) return null // defender wrong JSON

    let values

    if (type.value) {
      if (type.name === 'arrayOf') {
        values = `[${type.value.name}]`
      } else {
        values = ValueDetectArr(type.value)
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

  const Description = () => (
    <Styled.Description>{patient.description}</Styled.Description>
  )

  return (
    <>
      {full && Description()}

      <Styled.Root ref={ref} {...otherProps} className={className}>
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
