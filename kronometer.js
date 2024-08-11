const shfaq = document.getElementById("shfaq");
let koha = null;
let filloKohen = 0;
let kohapoKalon = 0;
let poPunon = false;

function fillo(){
    
    if(!poPunon){
        filloKohen = Date.now() - kohapoKalon;
        koha = setInterval (ripuno, 10);
        poPunon = true;
    }
    
}

function ndalo(){

    if(poPunon){
        clearInterval(koha);
        kohapoKalon = Date.now() - filloKohen;
        poPunon = false;
    }

}

function riktheje(){
    let timer = null;
    filloKohen = 0;
    kohapoKalon = 0;
    poPunon = false;
    shfaq.textContent="00:00:00:00";
}

function ripuno(){
   
    const kohaTani = Date.now();
    kohapoKalon = kohaTani - filloKohen;

    let oret = Math.floor(kohapoKalon / (1000 * 60 * 60));
    let minutat = Math.floor(kohapoKalon / (1000 * 60) % 60);
    let sekonda = Math.floor(kohapoKalon / 1000 % 60);
    let milisekonda = Math.floor(kohapoKalon % 1000 / 10);

    oret = String(oret).padStart(2,"0");
    minutat = String(minutat).padStart(2,"0");
    sekonda = String(sekonda).padStart(2,"0");
    milisekonda = String(milisekonda).padStart(2,"0");

    shfaq.textContent = `${oret}:${minutat}:${sekonda}:${milisekonda}`;
}