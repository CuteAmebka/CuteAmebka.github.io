function hide1(){
    document.getElementById("div_nomber").classList.add("hidden");
    document.getElementById("div_email").classList.remove("hidden");


}   
function hide2(){
    document.getElementById("div_nomber").classList.remove("hidden");
    document.getElementById("div_email").classList.add("hidden");
}
function form_out(){
    let login = document.reg.Name.value;
    let email = document.reg.email.value;
    let num = document.reg.nomber.value;
    let index = document.reg.question.selectedIndex;
    let question = document.reg.question[index].text;
    let _text;
    for (let i = 0; i < document.reg.contact.length; i++) {
        if (document.reg.contact[i].checked){
            _text = ("Здравствуйте, "+login+" ваш емаил "+email+" ваш номер телефона "+num+" мы вышлем вам приглашение "+document.reg.contact[i].value+" и ответ на ваш вопрос по теме "+question+" ");
}                   
    }
    if(document.reg.option1.checked){
        _text+=document.reg.option1.value;
    }
    if(document.reg.option2.checked){
        _text+=document.reg.option2.value;
    }
    if(document.reg.option3.checked){
        _text+=document.reg.option3.value;  
    }   
    document.getElementById("randomtext").innerText=_text;
    }


    function f(a){
        document.images[1].src = document.images[a].src;

    }
    id = null;
    a=2;
    function f1()
    {
        document.images[1].src = document.images[a].src;
        document.images[a].classList.toggle("b");
        if(a!=2){
            document.images[a-1].classList.toggle("b");
        }
        else{
            if(document.images[4].classList.contains('b')){
            document.images[4].classList.toggle("b");
            }
        }
        if(a==4){
            a=1;
        }
        a=a+1;
        id = setTimeout("f1()", 1000);
       
        
    }

    function stop()
    {
        clearTimeout(id);   
    }