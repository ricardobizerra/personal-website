var ptBrText = document.querySelectorAll('.portuguese');
var enUsText = document.querySelectorAll('.english');

var ptButton = document.querySelector('.pt-btn');
var enButton = document.querySelector('.en-btn');

var interessesList = document.querySelectorAll('#topics-ul-li');

var activePtBr = true;
var activeEnUs = false;

ptBrText.forEach(element => {
    element.style.display = 'block';
    
});
interessesList.forEach(element => {
    element.style.display = 'list-item';
});
enUsText.forEach(element => {
    element.style.display = 'none';
});

function changeLang(langToBeDisplayed, langNoDisplay) {
    
    langToBeDisplayed.forEach(element => {
        element.style.display = 'block';
    });
    interessesList.forEach(element => {
        element.style.display = 'list-item';
    });
    langNoDisplay.forEach(element => {
        element.style.display = 'none';
    });

    if (langToBeDisplayed === ptBrText) {
        activePtBr = true;
        activeEnUs = false;
    } else {
        activePtBr = false;
        activeEnUs = true;
    }

    if (activePtBr == true) {
        ptButton.classList.add('background-ativo');
        ptButton.classList.remove('background-inativo');
        enButton.classList.add('background-inativo');
        enButton.classList.remove('background-ativo');
    } else if (activeEnUs == true) {
        ptButton.classList.add('background-inativo');
        ptButton.classList.remove('background-ativo');
        enButton.classList.add('background-ativo');
        enButton.classList.remove('background-inativo');
    }
}

