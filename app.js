const quiz = [
  {
    question: 'イーライリリー本社がある国はどこ？',
    answers: [ 'イギリス', 'スイス', 'ドイツ', 'アメリカ'],
    correct: 'アメリカ'
  }, {
    question: '日本イーライリリーがある場所はどこ？',
    answers: [ '兵庫', '東京', '大阪', '神奈川'],
    correct: '兵庫'
  }, {
    question: 'イーライリリー本社があるアメリカの州はどこ？',
    answers: [ 'ニューヨーク州', 'ニュージャージー州', 'カルフォルニア州', 'インディアナポリス州'],
    correct: 'インディアナポリス州'
  }, {
    question: 'イーライリリーの製品はどれ？',
    answers: [ 'フルベストラント', 'ベージニオ', 'イブランス', 'アフィニトール'],
    correct: 'ベージニオ'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}
