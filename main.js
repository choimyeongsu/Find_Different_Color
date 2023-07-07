let palette = document.getElementById("palette");
let stage = document.getElementById("stage");
let timer = document.getElementById("timer");


let timerword = document.createElement('div');
timerword.innerHTML="timer";
timer.appendChild(timerword);

let stageword = document.createElement('div');
stage.innerHTML="stage : ";
stage.appendChild(stageword);



let colorsize=2;

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


let falsenumber;
function CreateColor()
{
    falsenumber=Math.floor(Math.random()*(colorsize*colorsize));
    console.log(falsenumber);
    for(let i=0; i<(colorsize*colorsize); i++)
    {
        if(falsenumber==i)
        {
            array[i].style.backgroundColor=`skyblue`
        }
        else
        {
            array[i].style.backgroundColor=`blue`;      
        }
               
    }
}
function updatecolor()
{
    colorsize++;
}
function no()
{
    alert("틀렸습니다");
}
function yes()
{
    alert("정답입니다");
    palette.replaceChildren(); //이전생성한 색상삭제(자식노드삭제)
    updatecolor(); // 사이즈 업데이트
    create(); // 자식노드생성
    CreateColor(); //자식색상생성
    CreateEvent(); //자식이벤트생성
    //item들에 관련된 사이즈 같은 값들 업데이트해주는함수
    //다시 item 생성
}

function CreateEvent()
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

create();
CreateColor();
CreateEvent();