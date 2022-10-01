/*
1 -Crie um Titulo em h1 com o texto: Adivinhe a cor, e coloque-o dentro da section title.

2.1 - Crie dinamicamente 8 circulos que sera no futuro uma paleta de cores. Coloque dentro de pallete.
2.2 - Atribua a classe colourPallete em todos os circulos.
2.3 - Guarde-os na section: pallete.

3.1 - Gere cores aleatorias para cada um dos circulos.
3.2 - Crie uma logica para adicionar a classe guess em uma das cores de forma aleatoria
3.3 -A classe guess sera a cor a adivinhar!

4.1 - Adicione na section com o ID Result em h1 o RGB da cor a ser adivinhada.
4.2 - Lembre-se que a cor a ser adivinhada possui a classe guess.

5.1 - Embaixo do elemento h1 criado no ultimo requisito, crie um elemento h2 dentro de uma div
5.2 - De a essa div a classe score.
5.3 - De o valor do h2 comecando como 0 e coloque-o dentro dessa nova div.
5.4 - A div deve estar dentro do elemento com ID Result.
5.5 - De ao h2 a classe valor

5.1 - Crie um EventListener em cada Circulo. DICA: Use QuerySelectorAll ou getElementsByClass.
5.2 - Caso o circulo clicado possuir a classe guess, some 01 no score e atualize as cores.
5.3 - Caso errar, atualize as cores e zere a pontuacao.
5.4 - Crie uma variavel global que receba o valor 0.
5.5 - Crie uma funcao somente para remover as cores e adicionar novas.

BONUS!!! 

Agora estilize, sinta-se livre pra melhorar o CSS!!!
Nao precisa usar DOM.

Divirta-se e estude bastane! =D
*/

/* ------------------------------------------------------------------------------------------------ */

//Variaveis globais
const getResult = document.getElementById('result');
let score = 0;

// Funcoes
function createTitle() {
    const getTitle = document.getElementById('title');
    const createH1 = document.createElement('h1');
    createH1.innerText = 'Adivinhe a cor';
    getTitle.appendChild(createH1);
};

function createCircle() {
    const getPallete = document.getElementById('pallete');
    getPallete.style.display = 'flex';
    const randomClass = Math.floor(Math.random() * 8);

    for(let index = 0; index < 8; index += 1){
        const createDiv = document.createElement('div');
        createDiv.style.width = '50px';
        createDiv.style.height = '50px';
        createDiv.style.border = 'solid 1px black';
        createDiv.style.borderRadius = '50%';
        createDiv.className = 'colourPallete';
        createDiv.style.marginLeft = '20px';
        if(index === randomClass){
            createDiv.className = 'colourPallete guess';
        }
        getPallete.appendChild(createDiv);
    }
}

//rgb(132, 19, 136) - A ideia vem daqui risos!

// Template Literals;
function createRandomColour () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Exemplo de arrow function.
function paintCircles () {
    
    const getColourPallete = document.getElementsByClassName('colourPallete');
    for(let i = 0; i < getColourPallete.length; i += 1){
        getColourPallete[i].style.backgroundColor = createRandomColour();
    }
}

function showRGBColour () {
    const getGuess = document.querySelector('.guess').style.backgroundColor;

    const createH1 = document.createElement('h1');
    createH1.innerHTML = getGuess;
    getResult.appendChild(createH1);
};

function createScore () {
    const createDiv = document.createElement('div');
    createDiv.className = 'score';
    const createH2 = document.createElement('h2');
    createH2.innerHTML = score;
    createH2.className = 'valor';
    createDiv.appendChild(createH2);
    getResult.appendChild(createDiv);
}

function updateColours () {
    const getPallete = document.getElementById('pallete');
    const getCircles = document.querySelectorAll('.colourPallete');
    const getResultsx = document.getElementById('result');

    // console.log(getResultsx.childNodes);
    getResultsx.removeChild(getResultsx.childNodes[0]);
    // console.log(getResultsx.childNodes);
    getResultsx.removeChild(getResultsx.childNodes[0]);

    for(let i = 0; i < getCircles.length; i += 1){
        getPallete.removeChild(getCircles[i]);
    }
    createCircle();
    paintCircles();
    showRGBColour();
    createScore();
    createEventListener();
    // console.log(getPallete.removeChild());
}

function createEventListener () {
    const getGuess = document.querySelector('.guess');
    const getCircles = document.querySelectorAll('.colourPallete');
    const getH2 = document.querySelector('.valor');

    for(let i = 0; i < getCircles.length; i += 1){
        getCircles[i].addEventListener('click', () => {
            if(getCircles[i].className.includes('guess')){
                getH2.innerHTML = score += 1;
                updateColours();
            }else{
                getH2.innerHTML = score = 0;
            };
        });
    }
}

// Chamada das funcoes
createTitle();
createCircle();
createRandomColour();
paintCircles();
showRGBColour();
createScore();
createEventListener();