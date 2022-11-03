const triggers = document.querySelectorAll('a');

const highlight = document.createElement('span');

console.log(document.body)
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink(){
    const LinkCoords = this.getBoundingClientRect();

    const coords = {
        width: LinkCoords.width,
        height: LinkCoords.height,
        top: LinkCoords.top + window.scrollY,
        left: LinkCoords.left + window.scrollX
    }
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(a => {
    a.addEventListener('mouseenter', highlightLink);
});