var getlogin = document.getElementById('btn-login');
var getmodal = document.getElementById('loginmodal');
var getclosebtn = document.querySelector('.close-btn');


getlogin.addEventListener('click',openmodal);

getclosebtn.addEventListener('click',closemodal);

window.onclick = function(e){

    if(e.target === getmodal){
        closemodal();
    }
}

function openmodal(){
    getmodal.style.display = 'block';
}

function closemodal(){
    getmodal.style.display = 'none';
}