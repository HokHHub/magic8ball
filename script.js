let text = document.querySelector('#ballText')
let answers = [
    'бесспорно',
    'предрешено',
    'никаких сомнений',
    'определённо да',
    'можешь быть уверен в этом',
    'мне кажется — «да»',
    'вероятнее всего',
    'хорошие перспективы',
    'знаки говорят — «да»',
    'да',
    'пока не ясно, попробуй снова',
    'спроси позже',
    'лучше не рассказывать',
    'сейчас нельзя предсказать',
    'сконцентрируйся и спроси опять',
    'даже не думай',
    'мой ответ — «нет»',
    'по моим данным — «нет»',
    'перспективы не очень хорошие',
    'весьма сомнительно'
];

let blacklist = [
    "куда", "зачем", "почему", "как", "где", "что", 
    "когда", "откуда", "сколько", "чей", "какой", 
    "зачем-то", "почем", "для чего", "кто", "отчего", 
    "по какой причине", "по какому поводу", "с какой целью", 
    "с какой стати", "в чем", "насколько", "по какой причине"
];

text.addEventListener('click', addRandomAnswer)

function addRandomAnswer() {
    text.textContent = answers[Math.floor(Math.random()*answers.length)]
}