export function getGreetingMessage(): string {
  const hours = new Date().getHours()

  if (hours < 12) {
    return 'Good morning, '
  }
  if (hours >= 12 && hours < 18) {
    return 'Good day, '
  }
  return 'Good evening, '
}
