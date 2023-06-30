export default function navFormater(link: string): string {
  const lowedLink = link.toLowerCase()

  return lowedLink.split(' ').join('-')
}
