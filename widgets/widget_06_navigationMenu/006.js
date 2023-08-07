const list = document.querySelectorAll('.list');
function activeLL(){
    list.forEach((aa)=>
    aa.classList.remove('active'));
    this.classList.add('active');   
};

list.forEach((aa)=>
aa.addEventListener('click',activeLL ));