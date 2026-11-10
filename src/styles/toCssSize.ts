export const toCssSize = (value: number | string | undefined) =>
  typeof value === 'number' ? `${value}px` : value
