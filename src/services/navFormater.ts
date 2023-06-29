export default function navFormater (link: string) {
  const lowedLink = link.toLowerCase()

  if (lowedLink === 'inicio') return ''

  return lowedLink.split(' ').join('-')
}
