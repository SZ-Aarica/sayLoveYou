function displayIloveYou(response){
     //const div = document.getElementById("IloveYou");
   // const loader = document.getElementById("loader");
    // Hide loader
    //loader.classList.add("hidden");
    
 new Typewriter('#IloveYou', {
    strings: response.data.answer,
    autoStart: true,
    delay:60,
    cursor:"",
    });
}
function generate(event){
    event.preventDefault();
     let ShowTextBox = document.querySelector("#IloveYou");

    if(ShowTextBox.classList.contains("hidden")){
        ShowTextBox.classList.remove("hidden");
    }else{
        ShowTextBox.innerHTML = "<div class='nothing' id='loader'></div>";

    }
    let instructionInput=document.querySelector("#userInstruction");

    
    let apiKey = "c1f9c61a43fbf0460to00d7010dfa109";
    let prompt = "you are a language expert. please provide a short anwer and only say i love you in the given language";
    let context =`what is it in ${instructionInput.value}`;
    let Url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let loader = document.querySelector("#loader");
    if(!loader.classList.contains(loader)){
       loader.classList.add("loader");
    }
    
    axios.get(Url).then(displayIloveYou);
   
 
}
let languageFormElement = document.querySelector("#language-form");
languageFormElement.addEventListener("submit" , generate)
