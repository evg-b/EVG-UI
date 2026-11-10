import { useMemo, type Ref } from 'react'

// Сохраняет локальную DOM-ссылку и поддерживает cleanup внешнего callback ref.
export const useMergedRefs = <T,>(...refs: Array<Ref<T> | undefined>) =>
  useMemo(
    () => (node: T | null) => {
      const cleanups = refs.map((ref) => {
        if (typeof ref === 'function') {
          const cleanup = ref(node)

          return () => {
            if (typeof cleanup === 'function') {
              cleanup()
            } else {
              ref(null)
            }
          }
        }

        if (ref) {
          ref.current = node
          return () => {
            ref.current = null
          }
        }
      })

      return () => {
        cleanups.forEach((cleanup) => cleanup?.())
      }
    },
    refs
  )
