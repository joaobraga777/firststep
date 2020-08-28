var pizza =document.getElementById('pizza');
var latte =document.getElementById('latte');
var parfait =document.getElementById('parfait');
var imglist = document.querySelectorAll('img')
pizza.addEventListener('click',show)
latte.addEventListener('click',show)
parfait.addEventListener('click',show)

function show() {
    for (var i=0;i<imglist.length;i++){
        imglist[i].className="hide";
    }
    var change = "pic-"+this.id
    if (document.getElementById(change).className ==='hide'){
        document.getElementById(change).className ='';
    }else{
        document.getElementById(change).className ='hide';
    }

    
}