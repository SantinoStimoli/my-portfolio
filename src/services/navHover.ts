export function hideBox(hoverElement: HTMLDivElement) {
    if (hoverElement.current !== null) hoverElement.current.style.opacity = '0'
}

export function moveBox(hoverElement: HTMLDivElement | null) {
    if (hoverElement.current !== null) {
        hoverElement.current.style.opacity = '1'
        hoverElement.current.style.left = props?.left + 'px'
        hoverElement.current.style.top = props?.top + 'px'
        hoverElement.current.style.width = props?.width + 'px'
        hoverElement.current.style.height = props?.height + 'px'
    }
}