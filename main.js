let image = document.getElementById("image");
let stage = document.getElementById("stage");
let timer = document.getElementById("timer");
console.log(image);
//image 구역을8칸으로 나눠야한다.

let timerword = document.createElement('div');
timerword.innerHTML="timer";
timer.appendChild(timerword);

let stageword = document.createElement('div');
stage.innerHTML="stage : ";
stage.appendChild(stageword);

//이미지 생성하기 위한 html 태그생성
let tempcnt=0;
let tempsize=50;
for(let i=0; i<8; i++)
{
    let line = document.createElement('div');
    image.appendChild(line);
    for(let j=0; j<8; j++)
    {
        let temp = document.createElement('div');
        temp.setAttribute('class', "img");

        if(i==0&&j==2)
        {
            console.log(temp);
            temp.style.backgroundColor="green";
        }
        else
        {
            temp.style.backgroundColor="red";
        }
        
        tempcnt++;
        temp.innerHTML="span ";
        temp.style.width=`${tempsize}px`;
        temp.style.height=`${tempsize}px`;
        line.appendChild(temp);
    }
}


let img=document.querySelectorAll('img');
console.log(img);
img.forEach((target)=>target.addEventListener("click", ()=>{
    console.log("클릭");
}))
  


