let date;
let horas;
let minutos;
let segundos;

/* Relógio */
function relogio(){
    date = new Date();
    hor = date.getHours();
    min = date.getMinutes();
    seg = date.getSeconds();
    if(seg < 10){
        seg = "0" + seg;
    }
    if(min < 10){
        min = "0" + min;
    }
    if(hor < 10){
        hor = "0" + hor;
    }

    relh = `${horas}`;
    relm = `${minutos}`;
    rels = `${segundos}`;
    document.getElementById("relh").value=hor;
    document.getElementById("relm").value=min;
    document.getElementById("rels").value=seg;
}
let tempo=setInterval(relogio,1000);

/* Definir Alarme */
function definir(){
    let hora = Number (document.getElementById("HR").value);
    let minuto = Number (document.getElementById("MS").value);
    const audioAtivar = document.getElementById("ativar")

    if(formato(hora, minuto) == false){
        alert("Horário Invalido! ");
        res.innerHTML = "";
    }
    else {
        setInterval(() => {
            if (audio(hora, minuto) == true) {
                audioAtivar.play();
            }
        }, 1000);
        
        if(minuto < 10){
            res.innerHTML = `Horário Definido para ${hora}:0${minuto}`;
        }else{
            res.innerHTML = `Horário Definido para ${hora}:${minuto}`;
        }
    }
}
/* Formato Hora */
function formato(hora, minuto) {
    if(hora < 1 || hora > 24 || minuto < 0 || minuto > 60){
        return false;
    }else{
        return true;
    }
}
/* Desativar alarme */
function desativar(){
    const audioAtivar = document.getElementById("ativar")
    const audioDesativar =  document.getElementById("desativar")
    audioAtivar.pause();
    audioDesativar.play();
    
    res.innerHTML = "";
}

/* Controlador do Àudio */
function audio(hora, minuto){
    const data = new Date();
    const horaSys = data.getHours();
    const minutosSys = data.getMinutes();
    const segundosSys = data.getSeconds();
    
    if (hora == horaSys && minuto == minutosSys && segundosSys == 0){
        return true;
    }else{
        return false;
    }
}
