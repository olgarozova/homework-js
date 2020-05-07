
function init() {

    const arrows = document.querySelectorAll(".arrow");

    for (let arrow of arrows) {
        arrow.onclick = blockMove;
    }

    function getPosition(obj) {
        const idParts = obj.id.split('-');
        return idParts[1];

    }

    function blockMove() {

        const position = getPosition(this);
        this.parentNode.classList.add(position);

        switch (position) {
            case 'top':
                this.parentNode.style.top = this.parentNode.clientHeight / 2 + 'px';
                break;
            case 'bottom':
                this.parentNode.style.top = `calc(100% - ${this.parentNode.clientHeight / 2}px)`;
                break;
            case 'left':
                this.parentNode.style.left = this.parentNode.clientWidth / 2 + 'px';
                break;
            case 'right':
                this.parentNode.style.left = `calc(100% - ${this.parentNode.clientWidth / 2}px)`;
                break;
        }
    }

}
init();




