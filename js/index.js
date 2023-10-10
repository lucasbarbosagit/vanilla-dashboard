// elementos
var btnEpx = document.querySelector('#btn-exp');
const menuSide = document.querySelector('.sidebar');
const container = document.querySelectorAll('.container'); 
const containerPrinc = document.querySelector('.container-princ'); 
const arrowicon = document.querySelector('.arrow-left-icon');
const epflogo = document.querySelector('.epf_logo');
const header = document.querySelector('.header_iner');
const epfillus = document.querySelector('.epf-site-illus-img');
const epfbtn = document.querySelector('.epf-site-illus-button');

//func para desativar toogle quando precisar
var functionHolder;
var funcenabled = true
function disabletoogle(){
    if(!functionHolder) functionHolder = window.toggleSidebar;
    window.toggleSidebar = function(){};
    funcenabled = false;
}

//iniciando a pagina com o toggle desativado
disabletoogle();

btnEpx.addEventListener('click', function(){
   
   // menuSide.classList.toggle('expandir');
    
    if(arrowicon.classList.contains("arrow-left-icon")){
        btnEpx.src="img/icons/chevron_right.svg";
        arrowicon.classList.replace("arrow-left-icon", "arrow-right-icon");
        container.forEach(el => el.style.paddingLeft = "65px");
        containerPrinc.style.paddingLeft = "85px";
        header.style.height = "70px";
    }
    else{
        btnEpx.src="img/icons/chevron_left.svg";
        arrowicon.classList.replace("arrow-right-icon", "arrow-left-icon");
        container.forEach(el => el.style.paddingLeft = "250px");
        containerPrinc.style.paddingLeft = "280px";
        header.style.height = "100px";
    }

    function tooglefunction (){
    funcenabled ? disabletoogle() : enabletoggle();
    };

    tooglefunction();
   
});

//func para ativar toogle quando precisar
function enabletoggle(){
 window.toggleSidebar = functionHolder;
 funcenabled = true;
};

//toogle sidebar
var mini = true;
function toggleSidebar() {
    if (mini) {
      header.style.height = "70px";
      btnEpx.style.left = "56px";
      document.querySelector(".sidebar").style.width = "65px";
      document.querySelectorAll('ul').forEach(el => el.style.margin = "3px 10px");
      epflogo.src='img/epf_logo_menor.svg';
      epflogo.classList.replace('epf_logo', 'epf_logo_menor');
      epfillus.style.display = "none";
      epfbtn.style.display = "none";
      this.mini = false;
    } else {
      btnEpx.style.left = "238px";
      document.querySelector(".sidebar").style.width = "250px";
      container.forEach(el => el.style.paddingLeft = "65px");
      containerPrinc.style.paddingLeft = "85px";
      document.querySelectorAll('ul').forEach(el => el.style.margin = "3px 15px");
      epflogo.src='img/epf_logo.svg';
      epflogo.classList.replace('epf_logo_menor', 'epf_logo');
      epfillus.style.display = "flex";
      epfbtn.style.display = "flex";
      this.mini = true;
    }
}
  
//list item active cada pagina no sidebar
var listItem = document.querySelectorAll('.list-item')

function selectLink(){
    listItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

listItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)