function displayIloveYou(response){
      let showBox = document.querySelector("#loader");
    showBox.classList.remove("loader");
 new Typewriter('#IloveYou', {
    strings: response.data.answer,
    autoStart: true,
    delay:60,
    cursor:"",
    });
}
function generate(event){
    event.preventDefault();
    let instructionInput=document.querySelector("#userInstruction");
    //console.log(instructionInput.value);
    let apiKey = "c1f9c61a43fbf0460to00d7010dfa109";
    let prompt = "you are a language expert. please provide a short anwer and only say i love you in the given language";
    let context =`what is it in ${instructionInput.value}`;
    let Url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let showBox = document.querySelector("#loader");
    showBox.classList.add("loader");

    
    axios.get(Url).then(displayIloveYou);
   
 
}
let languageFormElement = document.querySelector("#language-form");
languageFormElement.addEventListener("submit" , generate)
