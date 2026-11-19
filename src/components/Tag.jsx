import { kinds } from '../data/content'

export default function Tag({ kind, children }) {
  const k = kinds[kind]
  return (
    <span className={`tag tag-${kind}`} title={k?.hint}>
      {children ?? k?.label}
    </span>
  )
}
