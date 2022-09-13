const buttonSkill = document.getElementById('button_skills');
const buttonLang = document.getElementById('button_language');
const buttonPort = document.getElementById('button_portifolio');


buttonSkill.addEventListener('click', ()=>{
    document.getElementById('section__skills').classList.toggle('open');
    document.getElementById('conteudo__skills').classList.toggle('open')    
})

buttonLang.addEventListener('click', ()=>{
    document.getElementById('section__language').classList.toggle('open');
    document.getElementById('conteudo__language').classList.toggle('open')  
})

buttonPort.addEventListener('click', ()=>{
    document.getElementById('section__portifolio').classList.toggle('open');
    document.getElementById('conteudo__portifolio').classList.toggle('open')  
})


