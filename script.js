const text = document.getElementById("text");
const button = document.getElementById("mainButton");
const song = document.getElementById("song");

let stage = 0;



// typing function

function typeLines(lines, speed=40){

return new Promise(resolve=>{

text.innerHTML="";
let i=0;

function type(){

if(i < lines.length){

if(lines[i]=="\n") text.innerHTML+="<br>";
else text.innerHTML+=lines[i];

i++;
setTimeout(type,speed);

}
else resolve();

}

type();

});

}



function typeAppend(newText, speed=40){

return new Promise(resolve=>{

let i=0;

function type(){

if(i < newText.length){

if(newText[i] === "\n"){
text.innerHTML += "<br>";
}
else{
text.innerHTML += newText[i];
}

i++;
setTimeout(type, speed);

}
else{
text.innerHTML += "<br><br>";
resolve();
}

}

type();

});

}




// boot screen

typeLines(

"<span class='title'>Booting AhanOS v3.0</span>\n"+
"Initializing core modules...\n\n"+
"Scanning system...\n\n"+
"Priority user: DISHA detected\n"+
"Signal available..."

);



// floating symbols background

const symbols=["</>","{ }","♪","♫","🎸","JESUSSSS","Ayy chup kor toh b***"];

setInterval(()=>{

const s=document.createElement("div");
s.className="symbol";
s.innerHTML=symbols[Math.floor(Math.random()*symbols.length)];

s.style.left=Math.random()*100+"vw";
s.style.animationDuration=(6+Math.random()*10)+"s";

document.body.appendChild(s);

setTimeout(()=>s.remove(),15000);

},800);



// cursor hearts

document.onmousemove=e=>{

if(stage>=1){

const heart=document.createElement("div");

heart.className="heart";
heart.innerHTML="❤";

heart.style.left=e.clientX+"px";
heart.style.top=e.clientY+"px";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),1000);

}

};



// button logic

button.onclick=async()=>{

stage++;



// stage 1 cinematic connection

if(stage==1){

song.play();

document.body.style.background="linear-gradient(135deg,#0f0f0f,#2a0f1f,#ff6ec7)";

const floating=document.createElement("div");

floating.className="floatingConnection";
floating.innerText="Connection Established!";

floating.style.left="40vw";
floating.style.top="40vh";

document.body.appendChild(floating);



await delay(2000);

text.innerHTML="<div class='swell'>System behaving unexpectedly...</div>";

await delay(3000);



text.innerHTML="Stability increasing";

const container=document.createElement("div");
container.className="progressContainer";

const bar=document.createElement("div");
bar.className="progressBar";

container.appendChild(bar);
text.appendChild(container);



let progress=0;

const interval=setInterval(()=>{

progress+=Math.random()*8;

if(progress>=100){

progress=100;
clearInterval(interval);

button.innerText="Continue?? :)";

}

bar.style.width=progress+"%";

},200);

}



// stage 2 confessions

else if(stage==2){

// remove floating connection text
const floating = document.querySelector(".floatingConnection");
if(floating) floating.remove();

// clear text once
text.innerHTML = "";

// append lines progressively
await typeAppend("Some things are unexpected.");

await delay(1200);

await typeAppend("This was one of them.");

await delay(1200);

await typeAppend("I'm glad it happened...");

await delay(1200);

await typeAppend("And I'm glad it's you! 💞");

// update button for next stage
button.innerText = "Continue?? :)";

}





// stage 3 valentine

else if(stage==3){

text.innerHTML="Will you be my Valentine?";

button.innerText="YES";

const no=document.createElement("button");

no.innerText="NO";

document.getElementById("container").appendChild(no);

no.onmouseover=()=>{

no.style.position="absolute";
no.style.left=Math.random()*80+"vw";
no.style.top=Math.random()*80+"vh";

};

button.onclick=stage6;

}

};



// ending

async function stage6(){

// remove YES button
button.remove();

// remove NO button if exists
const noBtn = document.querySelector("button:not(#mainButton)");
if(noBtn) noBtn.remove();

// clear text
text.innerHTML = "";

// show system happy
await typeAppend("System state: happy");

await delay(2000);

// rewriting emotional core
await typeAppend("Rewriting emotional core...");

await delay(2000);

// rewriting baseline
await typeAppend("Rewriting baseline...");

await delay(2500);

// create exit button
const exitBtn = document.createElement("button");

exitBtn.innerText = "Exit";

exitBtn.style.marginTop = "30px";

document.getElementById("container").appendChild(exitBtn);


// exit click logic
exitBtn.onclick = async ()=>{

exitBtn.remove();

text.innerHTML = "";

// shutdown header
await typeAppend("END OF TRANSMISSION");

await delay(1500);

// resume message
await typeAppend("Program resumes when we meet on 26th 👀🥰!");

await delay(1500);

// milestone message (new feature)
await typeAppend(" ");

await delay(800);

await typeAppend("Next milestone: Meeting in person");

await delay(1000);

await typeAppend("Status: pending...");
};

}





function delay(ms){

return new Promise(r=>setTimeout(r,ms));

}
