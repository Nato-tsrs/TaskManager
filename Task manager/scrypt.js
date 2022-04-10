
class Task{
    constructor(header, content){
      this.header=header;
      this.content=content;
    }
}
var pool=document.getElementById("result");
var count=0;

function clearAll(){
sessionStorage.clear();
count=0;
pool.innerHTML="";
}

function addtoLocalStorage(){
 
  var content0=document.getElementById("taskField");
  var content=document.getElementById("taskField").value;
  
  var name0=document.getElementById("name");
  var name=document.getElementById("name").value;
  if(content=="" ){
    content0.style.border="solid red";
  }
  else if(name=="" ){
    name0.style.border="solid red";
  }
 else{

  name0.style.border="none";
  content0.style.border="none";
  var temp=JSON.parse(sessionStorage.getItem("Tasks"));
  if(temp===null){ 
    temp=[];
    var obj=new Task(name,content);
    temp[count]=obj;
   
    count++;
 
  }
  else{
    temp[count]=new Task(name,content);
  count++; 
  }
  
  sessionStorage.setItem("Tasks", JSON.stringify(temp)) ;
  pool.innerHTML="";
  displayProducts();
//  add(content,name);
 }
}
function deleteTask(name){
 
  var l=JSON.parse(sessionStorage.getItem("Tasks"));
  for (var i=0;i<l.length;i++){
     if (l[i].header==name){
       l.splice(i,1);
     }
  }
  sessionStorage.setItem("Tasks", JSON.stringify(l)) ;
  count-=1;
  pool.innerHTML="";
  displayProducts();
}

// 
function add(content,name){
  // sessionStorage.saveItem("", ) ;
  var result=document.getElementById("result");
  sessionStorage.getItem(name) 
  var newnode=document.createElement("div");
  newnode.innerHTML=`
  <div class="taskn">
  <div class="header">
      <h1>${name}</h1>
      <i onclick="deleteTask(\`${name}\`)" class="fa-solid fa-x"></i>
  </div>
  <div onclick="displayModal(\` ${ content}\`)" class="content">
     <p> ${ content}</p>
  </div>
</div>
  `;
  result.append(newnode);
  
}


function remove(){
  
}
var modal = document.getElementById("modal");

function displayModal(content){
  var modall=document.getElementById("content");
  modall.innerHTML=content;
    modal.style.visibility = "visible";
}

function displayProducts(){
  var lste=JSON.parse(sessionStorage.getItem("Tasks"));
  // alert(lste[0]);
  for(var i=0;i<lste.length;i++){
    // alert(lste[i].content);
    add(lste[i].content, lste[i].header);
  }
  //  add("content1","nato1");
  //  add("content2","nato2");
  //  add("content3","nato3");
  //  add("content4","nato4");
  // const products = getProducts();
  // products.forEach(product => {
  //     addProductToList(product);
  // });
}
document.addEventListener('DOMContentLoaded', displayProducts);
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.visibility = "hidden";
    }
  }

