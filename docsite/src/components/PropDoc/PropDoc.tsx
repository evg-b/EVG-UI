import type { PropDocProps } from './PropDoc.types'

import * as Styled from './PropDoc.styled'

const PropDoc = ({ patient, full = false, ...props }: PropDocProps) => (
  <>
    {full && patient.description && (
      <Styled.Description>{patient.description}</Styled.Description>
    )}
    <Styled.Root {...props}>
      <Styled.Table aria-label={`Свойства ${patient.displayName}`}>
        <thead>
          <Styled.HeaderRow>
            <th scope="col">Свойство</th>
            <th scope="col">Тип</th>
            <th scope="col">По умолчанию</th>
            <th scope="col">Описание</th>
          </Styled.HeaderRow>
        </thead>
        <tbody>
          {Object.entries(patient.props).map(([name, prop]) => (
            <Styled.PropertyRow key={name}>
              <th scope="row">
                <code>{name}</code>
                {prop.required && <small>Обязательно</small>}
              </th>
              <td><code>{prop.type.name}</code></td>
              <td>{prop.defaultValue && <code>{prop.defaultValue.value}</code>}</td>
              <td>{prop.description}</td>
            </Styled.PropertyRow>
          ))}
        </tbody>
      </Styled.Table>
    </Styled.Root>
  </>
)

PropDoc.displayName = 'PropDoc'

export default PropDoc
