import React from 'react';
import questionlist from './questionlist.json';
import './App.css';
import './nextButton.js'

function App() {

  //퀴즈영역 생성
  let quiz = document.getElementById("quiz");
  //입력값 관리
  const result = [];

  let slides = document.getElementsByClassName("slide");

  //퀴즈 영역의 문제를 1개씩 제공
  let slideIndex = 1;

  // 보기 입력값 체크
  function radioCheck() {
    let radio_btn = document.getElementsByName('radio_btn');
    let radio_btn_check = false;
    for (let i = 0; i < radio_btn.length; i++) {
      if (radio_btn[i].checked) {
        radio_btn_check = true;
        result.push(radio_btn[i].value);
        plusSlides(1);
        break;
      }
    }  if (!radio_btn_check) {
      alert("답변을 선택해주세요.");
    }
  }

  //결과 보기
  function resulte() {

    //문제영역 삭제
    var header = document.querySelector("#quiz");
    var body = document.body;
    body.removeChild(header);

    //결과영역 추가
    let resultPage = document.createElement('div');
    resultPage.className = 'results'
    document.body.append(resultPage);

    let sum = 0;
    for (let i = 0; i < result.length; i++) {
      sum += parseInt(result[i], 10);
    }
    if (sum < 21) {
      resultPage.innerHTML =
        `<p class="resultTitle">당신은 돈키호테 같은 사람입니다.</p>
        <p class="resultText">
          <p>당신은 부끄럼을 많이 타고, 소심하며, 우유부단하고, 누군가가 곁에서 돌봐줘야만 하며,</P>
          <p>본인의 일도 누군가가 대신해 결정해줘야만 하고 타인이나 어떤 일에 연루되는 것을 피하는 사람입니다.</P>
        </p>`;
    } else if (sum >= 21 && sum < 30) {
      resultPage.innerHTML =
        `<p class="resultTitle">당신은 집요하며 깐깐한 사람입니다.</p>
        <p class="resultText">' +
          <p>상당히 신중하고 대단히 조심스러우며 느리고도 꾸준하게 전진하는 사람이지요.</P>
          <p>무슨 일인가를 충동적으로 하는 모습을 본다면 친구들은 상당히 충격을 받을지도 모릅니다.</P>
          <p>당신은 무슨 일이든 꼼꼼히 모든 각도에서 살펴본 다음 대부분 퇴짜를 놓는 사람으로 생각되어 지고 있으니까요.</P>
        </p>`;
    } else if (sum >= 31 && sum < 40) {
      resultPage.innerHTML =
        `<p class="resultTitle">당신은 현명하고, 신중하며, 현실적입니다.</p>
        <p class="resultText">
          <p>당신은 똑똑하고, 재능과 능력이 있으면서 한편 겸손한 사람으로도 여겨지고 있습니다.</P>
          <p>당신은 친구를 사귈 때 너무 급하거나 가볍게 접근하지 않으며, 한번 사귄 친구에게는 상당히 극진하고 또 자신도 그렇게 대해주기를 기대합니다.</P>
        </p>`;
    } else if (sum >= 41 && sum < 50) {
      resultPage.innerHTML =
        `<p class="resultTitle">당신은 발랄하고 매력적이고 늘 즐거운 사람입니다.</p>
        <p class="resultText">
          <p>어디서든지 주위의 이목을 사로잡는 사람이지만 적당한 주제파악으로 교만해지지 않을 줄도 아는 사람이죠.</P>
          <p>당신은 다정하고 친절하며 이해심 많은 사람으로 여겨지고 있으며, 처진 기분은 업 시켜주고 어려울 땐 도와주는 사람으로 알려져 있습니다.</P>
        </p>`;
    } else if (sum >= 51 && sum < 60) {
      resultPage.innerHTML =
        `<p class="resultTitle">당신은 잘 흥분하고 상당히 변덕스러우며 충동적입니다.</p>
        <p class="resultText">
          <p>자연스러운 리더 타입으로 빠른(항상 옳은 것만은 아닌) 결정을 내릴 수 있습니다.</P>
          <p>당신은 과감하고 모험성이 있으며 무엇이든 한 번쯤은 시도해 보는 찬스에 강하고 모험을 즐기는 타입으로 보여집니다.</P>
          <p>당신과 가까이 하는 사람들은 당싱이 발하는 강렬함에 이끌립니다.</P>
        </p>`;
    } else if (sum > 61) {
      resultPage.innerHTML =
        `<p class="resultTitle">친구들이 보는 당신은 취급주의형 사람입니다.</p>
        <p class="resultText">
          <p>당신은 허영심이 있고, 자기 중심적이며 극히 지배적인 사람으로 비춰지고 있습니다.</p>
          <p>당신을 부러워하고 우러러보며 당신처럼 되기를 바라는 사람들도 있지만, 당신과 너무 가까워질까 우려하며 당신을 신뢰하지는 않습니다.</p>
        </p>`;
    }

    // 버튼 영역
    let buttonArea = document.createElement('div');
    buttonArea.className = 'button';
    buttonArea.innerHTML =
        `<button id="next" onclick="location.reload(true)">다시 하기</button>`;
    body.append(buttonArea);
  }


  //이전, 다음 버튼 선택에 따른 증가, 감소
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }


  //상황에 따른 슬라이드 보여주기
  function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    

    //모든 슬라이드를 보이지 않게 하고 1개씩 보이게 함         
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    
    console.log(slideIndex);
    console.log(slideIndex === slides.length);
    console.log(slides.length);
    
    // if(slideIndex !== slides.length){
    //   return(
    //     <button id = "next" onClick = {radioCheck}> 다음 질문 </button>
    //   )
    // } return(
    //     <button id = "done" onClick = {resulte}> 결과 보기 </button>
    //     )
    }
 
    
    
  

  return ( 
    <> 
    {/* 질문리스트 보기 */ } {
      questionlist.forEach(function (data) {

        //질문과 보기를 slide로 묶음 (1개씩 보이게 하기 위해)
        let slide = document.createElement('div');
        slide.className = 'slide';
        quiz.append(slide);

        //질문
        let questions = document.createElement('div');
        questions.className = 'question';
        questions.innerHTML = data.question;
        slide.append(questions);

        //보기 영역
        let optionContainer = document.createElement('form');
        optionContainer.className = 'optionContainer';
        slide.append(optionContainer);

        //낱개별 보기
        data.option.forEach(function (subData) {
          let labels = document.createElement('label');
          labels.innerHTML =
            '<input type="radio" name="radio_btn" value=' + subData.score + '>' +
            subData.text +
            '<br>';
          optionContainer.prepend(labels);
        });
      })
    }

    { /* 질문 리스트를 1개씩 보기 */ } 
    {
      showSlides(slideIndex)
    }
    
    { /* 버튼 생성 */ } 
    {/* <div className = 'button'>
      {
        slides.length !== slideIndex
        ? <button id = "next" onClick = {radioCheck}> 다음 질문 </button>
        : <button id = "done" onClick = {resulte}> 결과 보기 </button>
      }
      
    </div>  */}
  
  
    { /* 버튼 생성 */ } 
      <div className = 'button'>
        <button id = "next" onClick = {radioCheck} > 다음 질문 </button>   
        <button id = "done" onClick = {resulte} > 결과 보기 </button>            
      </div>

    </>
  );
}

export default App;
