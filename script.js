let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'AC':
                display.innerHTML = '';
                break;

            case '←':
                if (display.innerHTML) {
                    display.innerHTML = display.innerHTML.slice(0, -1);
                }
                break;

            case '=':
                try {
                    display.innerHTML = eval(display.innerHTML);
                }
                catch {
                    display.innerHTML = 'ERROR DUMB !'
                }

                break;

            default:
                display.innerText += e.target.innerText;
        }
    })
})
