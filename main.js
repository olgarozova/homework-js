
function init() {
    var addButton = document.querySelector("#addButton");
    var deleteButton = document.querySelector("#deleteButton");

    var blocksArr = [];

    function myIndexOf(value, chars) {
        for (var i = 0; i < chars.length; i++) {
            if (chars[i] === value) return i;
        }
        return -1;
    }

    function insertBlockToTHML(index, name) {
        var element = document.createElement('div');
        element.innerHTML = `#${index} ${name}`;
        element.id = `block-${index}`;
        element.className = 'block';

        var divBlocks = document.querySelector("#blocks");
        divBlocks.appendChild(element);
    }

    function addBlock() {
        var blockName = document.querySelector("#blockName");

        if (blockName.value && myIndexOf(blockName.value, blocksArr) === -1) {

            blocksArr.push(blockName.value);
            var blockIndex = blocksArr.length;

            insertBlockToTHML(blockIndex, blockName.value);
        }

    }

    function renumberBlocks() {
        var divBlocks = document.querySelector("#blocks");
        divBlocks.innerHTML = '';

        for (var i = 0; i < blocksArr.length; i++) {
            insertBlockToTHML(i + 1, blocksArr[i]);
        }
    }

    function deleteBlock() {

        var blockName = document.querySelector("#blockName");
        var blockIndex = myIndexOf(blockName.value, blocksArr);
        if (blockIndex !== -1) {
            var element = document.getElementById(`block-${blockIndex + 1}`);
            element.parentNode.removeChild(element);

            blocksArr.splice(blockIndex, 1);

            renumberBlocks();
        }

    }

    addButton.onclick = addBlock;
    deleteButton.onclick = deleteBlock;
}
init();




