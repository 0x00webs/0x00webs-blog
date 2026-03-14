export function formatDate(value: string | Date | null | undefined, locale = typeof navigator !== 'undefined' ? navigator.language : 'en-US') {
  if (!value) return ''
  const date = typeof value === 'string' ? new Date(value) : value
  if (Number.isNaN(date.getTime())) return ''
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date)
}
