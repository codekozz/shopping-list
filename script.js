const sendInput = document.querySelector('#input');
const itemsContiner = document.querySelector('.items');

function sendItem(event) {

    if (event.key == 'Enter') {

        const itemText = sendInput.value;
        const newItem = document.createElement('div');

        newItem.textContent = itemText;

        if (itemText != '') {
            itemsContiner.append(newItem);
        }

        sendInput.value = '';

        newItem.addEventListener('click', function() {

            newItem.classList.toggle('done');

        });
    }
}

sendInput.addEventListener('keydown', sendItem);