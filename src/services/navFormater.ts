export default function navFormater(link: string) {
    let lowedLink = link.toLowerCase()

    if (lowedLink === 'inicio') return ''

    return lowedLink.split(' ').join('-')
}