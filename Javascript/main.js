// window.addEventListener("load", () => {
    let form  = renderElement("form")
    let starts = renderElement(".starts")
    const words = [
        "npm cache",
        "vue",
        "hacking world",
        "end",
        "I",
        "all",
        "number",
        "oil",
        "within",
        "now",
        "right",
        "feet",
        "leave",
        "what",
        "now",
        "facebook",
        "came",
        "live",
        "test",
        "about",
        "netflix",
        "came",
        "set",
        "were",
        "follow",
        "study",
        "day",
        "structure",
        "over",
        "why",
        "why",
        "talk",
        "soon",
        "because",
        "random",
        "watch",
        "year",
        "her",
        "any",
        "snapchat",
        "I",
        "both",
        "around",
        "book",
        "line",
        "mother",
        "open",
        "now",
        "defend",
        "mile",
        "go",
        "by",
        "found",
        "said",
        "eye",
        "come",
        "so",
        "place",
        "food",
        "got",
        "city",
        "always",
        "these",
        "any",
        "use",
        "been",
        "was",
        "read",
        "their",
        "without",
        "as",
        "change",
        "leave",
        "can",
        "they",
        "those",
        "eat",
        "never",
        "no",
        "eat",
        "story",
      ]
      let setTimerInterval;
    let hero_btn = renderElement(".hero-btn")
    let urunishText = renderElement(".urinish")
    let time = renderElement(".vaqt")
    let hero_input = document.querySelector(".hero-input")
    hero_input.disabled = true
    let start_text = renderElement(".start")
    let text_random = renderElement(".text-random")
    let count = 4
    let start  = () => {
        let timer = setInterval(() => {
            count--
            start_text.textContent = count
            if(count === 0){
                console.log(count)
                setTimeout(() =>{
                start_text.textContent = "O'yin boshlandi ... "        
                setTimeout(() => {
                    start_text.style.display = 'none'
                    hero_input.disabled = false
                    // hero_btn.disabled = false
                    clearInterval(timer)                
                    text_random.classList.add("block")
                    start_btn.remove()
                    hero_input.addEventListener("keyup", handleKey)                
                     setTimerInterval = setInterval(()=>{
                        minut--
                        time.textContent = minut
                        if(minut === 0){
                           clearInterval(setTimerInterval)
                           gameOver() 
                        }
                        console.log(minut)
                    }, 1000)
                }, 1000)
                }, 1000)
            }
        }, 1000)    
    }
    let x = renderElement(".x")
    let m = renderElement(".m")
    let start_btn = renderElement(".start-btn")
    start_btn.addEventListener("click", start)
    let urunish = 20
    urunishText.textContent = urunish
    let falses = 0
    let minut = 60
    let trues = 0
    let randomElement;
    function gameOver(){
        setTimeout(() => {
        start_text.style.display = 'block'
        start_text.textContent = "Vaqtingiz tugadi ..."
        }, 1000)
         nav_title.textContent = "Vaqtigiz tugadi"
         hero_input.disabled = true
         x.textContent = trues
        m.textContent = falses   
        let a = createTag("a")
    a.href = " "
    a.className = "restart"
    a.appendChild(textNode("O'yinni qaytadan boshlash"))
    starts.appendChild(a)
    }
    function randomText(){
        return words[parseInt(Math.random()*words.length)]
    }
    function addToDom(){
        randomElement = randomText()
        text_random.textContent = randomElement
    } 
    function score(){
        randomElement = randomText()
        text_random.textContent = randomElement
    }
    // score()
    addToDom()
    function handleKey(e){
        let value = e.target.value
        if(e.keyCode === 13){
            urunish--
            if(urunish == 0){
                gameScoreOver()
            }
            urunishText.textContent = urunish 
            if(value === randomElement){
                trues++
                e.target.value = ""
                score()
            }else if(value !== randomElement){
                falses ++
            }
        }
    }
let nav_title = renderElement(".nav-title")
function gameScoreOver(){
    hero_input.disabled = true
    if(minut >= 1){
        setTimeout(() => {
            start_text.style.display = 'block'
            if(falses > trues){
                start_text.textContent = "Siz o'yinni mudddatidan oldin muvaffaqiyatsiz yakunladingiz"
            }else if(trues > falses){
                start_text.textContent = "Siz o'yinni muddatidan oldin muvaffaqiyatli yakunladingiz ... "
            }
        }, 1000)
    }
    clearInterval(setTimerInterval)
    nav_title.textContent = "Sizning urunishlaringiz soni tugadi"
    console.log("Sizning urunishlar soningiz tugadi")
    x.textContent = trues
    m.textContent = falses   
    let a = createTag("a")
    a.href = " "
    a.className = "restart"
    a.appendChild(textNode("O'yinni qaytadan boshlash"))
    starts.appendChild(a)
}