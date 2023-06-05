function createEntry(text, id) {
    const checkbox = `<input type='checkbox' /> `;
    const removeButton = ` <input type="button" value="X" onclick="removeEntry('${id}')" />`;
    return checkbox + text + removeButton;
}

function addEntry() {
    const text = document.getElementById('todo-text').value.trim();
    if (text == '') return;

    const list = document.getElementById('todo-list');

    const id = list.children.length;
    const newEntry = document.createElement('div')
    newEntry.innerHTML = createEntry(text, id);
    newEntry.id = id;
    list.appendChild(newEntry);
    console.log(list);

}

function removeEntry(id) {
    const item = document.getElementById(id);
    item.remove();
}
