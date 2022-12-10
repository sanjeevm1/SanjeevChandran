


for(let a of document.getElementsByTagName("a"))
    a.target="_blank";



function speak(text){
   console.log("hi");
   let obj=new SpeechSynthesisUtterance();
   /*let arr=speechSynthesis.getVoices();
   obj.lang="en-IN-Standard-C";*/
   obj.text=text;
   speechSynthesis.speak(obj);
}


//document.addEventListener('load',()=>{speechSynthesis.speak(new SpeechSynthesisUtterance("Welcome"));});

for(let a of document.getElementsByTagName("a"))
    a.target="_blank";

