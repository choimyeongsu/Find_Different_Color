let palette = document.getElementById("palette");
let stage = document.getElementById("stage");
let timer = document.getElementById("timer");
const modal = document.getElementById("modal");
const closeBtn = modal.querySelector(".close-area");
const stagescore = modal.querySelector(".stage_score");

let color;
let timercount=15;
let stagelevel=1;
let time;

let timerword = document.createElement('div');
timerword.innerHTML="timer "+timercount;
timer.appendChild(timerword);

let stageword = document.createElement('div');
stage.innerHTML="stage : "+ stagelevel;
stage.appendChild(stageword);

function start()
{
    time = setInterval(()=>{
        
        timercount--;
        //console.log("setinterval timercount"+timercount);
        timerword.innerHTML="timer "+timercount;
        if(timercount==0)
        {
            clearInterval(time);
    
            //결과모달출력
            //게임설정값초기화 
            resetgame();
            console.log("다음에 도전하세요");
    
        }
    },1000);
}


function resetgame()
{
    stagelevel=1;
    stage.innerHTML="stage : "+ stagelevel;
    timercount=15;
    colorsize=2;
    palette.replaceChildren();
    create();
    CreateColor();
    CreateEvent();
    //console.log("timercount : "+ timercount);
    start();
}
let colorsize=2; //처음 색상칸개수지정 
function create()
{
    for(let i=0; i<colorsize; i++)
    {
        let line=document.createElement('div');
        line.setAttribute('class', "line");
        palette.appendChild(line);
        for(let j=0; j<colorsize; j++)
        {
            let temp=document.createElement('div');
            temp.setAttribute('class', "color");
            line.appendChild(temp);
        }
    }
}



let array=document.getElementsByClassName("color");
let line = document.getElementsByClassName("line");


let size=100;

//랜덤하게 헥스코드로반환하는 함수 
function randomcolor()
{
  let color_r = Math.floor(Math.random() * 127 + 128).toString(16);
  let color_g = Math.floor(Math.random() * 127 + 128).toString(16);
  let color_b = Math.floor(Math.random() * 127 + 128).toString(16);
  return `#${color_r+color_g+color_b}`;
}

let falsenumber; //다른 색상이 들어간 인덱스 
let falsecolor;
function CreateColor()
{
    falsenumber=Math.floor(Math.random()*(colorsize*colorsize)); //랜덤생성
    console.log(falsenumber);
    color = randomcolor();
    falsecolor = randomcolor();
    for(let i=0; i<(colorsize*colorsize); i++)
    {
        
        //색상지정 
        if(falsenumber==i)
        {
            console.log("faslecolor :" + falsecolor);   
            if(falsecolor==color)
            {
                console.log("if if");
                falsecolor=randomcolor();
            }
            array[i].style.backgroundColor=falsecolor;
            //색상을 생성해주는 함수필요
            //array[i].style.backgroundColor=`skyblue`
        }
        else
        {
            if(falsecolor==color)
            {
                console.log("else if");
                color=randomcolor();
            }
            console.log(color);
            array[i].style.backgroundColor=color;      
        }
               
    }
}
function updatecolor()
{
    colorsize++;
}
function stageupdate()
{
    timercount=15;
    stagelevel++;
    stage.innerHTML="stage : " + stagelevel;
}
function no()
{
    modal.style.display="flex";
    stagescore.innerHTML="기록 : STAGE "+stagelevel;
    clearInterval(time);
    
} 
function yes()
{
    alert("정답입니다");
    palette.replaceChildren(); //이전생성한 색상삭제(자식노드삭제)
    updatecolor(); // 사이즈 업데이트
    create(); // 자식노드생성
    CreateColor(); //자식색상생성
    CreateEvent(); //자식이벤트생성
    stageupdate();//stage +1
    //item들에 관련된 사이즈 같은 값들 업데이트해주는함수
    //다시 item 생성
}

function CreateEvent() //각 색상요소들의 클릭이벤트생성 
{
    for(let i=0; i<(colorsize*colorsize); i++)
    {
        if(falsenumber===i)
        {
            array[i].addEventListener("click", yes);
        }
        else
        {
            array[i].addEventListener("click", no);
        }
    }
}
closeBtn.addEventListener("click",e=>{
    
    modal.style.display="none";
    resetgame();
})

create();
CreateColor();
CreateEvent();
start();