const teclas = document.querySelectorAll('.tecla');

const body = document.querySelector('body');

body.addEventListener('keydown', (e) => pressTecla(e));

const teclasAceitas = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c', ' '];

function pressTecla(e){
    let tecla = e.key;
    tecla = tecla.toLowerCase();
    console.log(tecla);
    animationButton(tecla);
};

function playAudio(src){
    if(src === ' '){
        return;
    }
    let audio = new Audio(`./sounds/key${src}.wav`);
    audio.play();
}

const button = document.querySelector('button');
const input = document.querySelector('input');

button.addEventListener('click', () => {
    let value = input.value;
    let myLetters = value.split('');

    let accept = myLetters.every((letra) => {
        return teclasAceitas.includes(letra.toLowerCase());
    });

    if(accept){
        let timer = 0;

        myLetters.map((letra) =>{
            console.log(timer);
            timer += 380;
            setTimeout(() => {
                animationButton(letra);
                setDisabled(myLetters);
            }, timer);
        });
        console.log(myLetters);
    }else{
        const input = document.querySelector('input');
        let value = input.value;

        input.value = 'Tecla inexistente';

        input.classList.add('error');
        setTimeout(() => {
            input.classList.remove('error');
            input.value = value;
        }, 720)
    }
    console.log(accept);
});

function animationButton(letra){
    teclas.forEach((el) => {
        if(el.innerHTML.toLowerCase() === letra.toLowerCase()){
            el.classList.remove('active');
            el.classList.add('active');
            setTimeout(() => {
                el.classList.remove('active');
            }, 100);
            playAudio(letra);
        }
    });
}

function setDisabled(arr){
    const tamanho = arr.length;
    const timer = tamanho * 380;
    const button = document.querySelector('button');
    button.disabled = true;
    setTimeout(() => {
        button.disabled = false;
    }, timer);
}

/* ADICIONANDO FEATURE DE CLICAR NA TECLA */

teclas.forEach((item) => {
    item.addEventListener('click', (e) => {
        console.log(e.target.innerHTML);
        pressTeclaMobile(e.target.innerHTML);
    });
});

function pressTeclaMobile(e){
    let tecla = e.toLowerCase();
    animationButton(tecla);
};