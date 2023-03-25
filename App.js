const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById('result')
const sound = document.getElementById('sound')
const btn = document.getElementById('searchbtn')

btn.addEventListener("click", () => {
    let holder = document.getElementById("placeholder").value;
    fetch(`${url}${holder}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
            <div class="word">
                <h3>${holder}</h3>
                <button onclick='playSound()' class='btn2'> 
                <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/${data[0].phonetic}/</p>
            </div>
            <p class="meaning">${data[0].meanings[0].definitions[0].definition}</p>
            <p class="example">${data[0].meanings[0].definitions[0].example || ""}</p>`;
            sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
            console.log(sound);
        })
        .catch(()=>{
            result.innerHTML = `<h3 class="error">Couldn't find the word</h3>`
        });
});
function playSound() {
    sound.play();
}
