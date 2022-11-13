var check = false;

function changeVal(el) {
  var qt = parseFloat(el.parent().children(".qt").html());
  var price = parseFloat(el.parent().children(".price").html());
  var eq = Math.round(price * qt * 100) / 100;
  
  el.parent().children(".full-price").html( eq + "Rs" );
  
  changeTotal();			
}

function changeTotal() {
  
  var price = 0;
  
  $(".full-price").each(function(index){
    price += parseFloat($(".full-price").eq(index).html());
  });
  
  price = Math.round(price * 100) / 100;
  var tax = Math.round(price * 0.05 * 100) / 100
 var shipping = parseFloat($(".shipping span").html());
 var fullPrice = Math.round((price + tax + shipping) *100) / 100;
 var fullPrice = Math.round(price  *100) / 100;
  if(price == 0) {
    fullPrice = 0;
  }
  
  $(".subtotal span").html(price);
  $(".tax span").html(tax);
  $(".total span").html(fullPrice);
}

$(document).ready(function(){
  
  $(".remove").click(function(){
    var el = $(this);
   el.parent().parent().addClass("removed");
  

    window.setTimeout(
      function(){
        el.parent().parent().slideUp('fast', function() { 
          el.parent().parent().remove(); 
          if($(".product").length == 0) {
            if(check) {
              $("#cart").html("<h1>The shop does not function, yet!</h1><p>If you liked my shopping cart, please take a second and heart this Pen on <a href='https://codepen.io/ziga-miklic/pen/xhpob'>CodePen</a>. Thank you!</p>");
            } else {
              $("#cart").html("<h1>No products!</h1>");
            }
          }
          changeTotal(); 
        });
      }, 200);
  });
  
  $(".qt-plus").click(function(){
    $(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) + 1);
    
    $(this).parent().children(".full-price").addClass("added");
    
    var el = $(this);
    window.setTimeout(function(){el.parent().children(".full-price").removeClass("added"); changeVal(el);}, 150);
  });
  
  $(".qt-minus").click(function(){
    
    child = $(this).parent().children(".qt");
    
    if(parseInt(child.html()) > 1) {
      child.html(parseInt(child.html()) - 1);
    }
    
    $(this).parent().children(".full-price").addClass("minused");
    
    var el = $(this);
    window.setTimeout(function(){el.parent().children(".full-price").removeClass("minused"); changeVal(el);}, 150);
  });
  
  window.setTimeout(function(){$(".is-open").removeClass("is-open")}, 1200);
  
  $(".btn").click(function(){
    check = true;
    $(".remove").click();
  });
});

// price calculation
  
var total;
let count=1;
var temp= document.getElementById("price").innerHTML;
console.log(temp);
function totalFuctionAdd(){

  console.log(count);
console.log("Added cart1 successfully");
temp= document.getElementById("price").innerHTML;
const myCart =document.forms["one"];
for (let i = 0; i < myCart.length; i++) {
  count++;
 console.log(count);
 temp=count*temp;
 document.getElementById("full-price").innerHTML = temp;
  }
  console.log(temp);
}
count=count;
temp=temp;

function totalFuctionSub(){

console.log(count);
console.log("subtracted cart1 successfully");
temp= document.getElementById("price").innerHTML;
const myCart =document.forms["one"];
for (let i = 0; i < myCart.length; i++) {
  if(count>1){
count--;
  }
console.log(count);
temp=count*temp;
document.getElementById("full-price").innerHTML = temp;
}
console.log(temp);
}

count=count;
temp=temp;
//total=temp;

let counttwo=1;
var temptwo= document.getElementById("pricetwo").innerHTML;
console.log(temptwo);
function totalFuctionAddtwo(){

  console.log(counttwo);
console.log("Added cart1 successfully");
temptwo= document.getElementById("pricetwo").innerHTML;
const myCarttwo =document.forms["two"];
for (let i = 0; i < myCarttwo.length; i++) {
  counttwo++;
 console.log(counttwo);
 temptwo=counttwo*temptwo;
 document.getElementById("full-pricetwo").innerHTML = temptwo;
  }
  console.log(temptwo);
}
counttwo=counttwo;
temptwo=temptwo;

function totalFuctionSubtwo(){

console.log(counttwo);
console.log("subtracted cart1 successfully");
temptwo= document.getElementById("pricetwo").innerHTML;
const myCarttwo =document.forms["two"];
for (let i = 0; i < myCarttwo.length; i++) {
  if(counttwo>1){
counttwo--;
  }
console.log(counttwo);
temptwo=counttwo*temptwo;
document.getElementById("full-pricetwo").innerHTML = temptwo;
}
console.log(temptwo);
}

counttwo=counttwo;
temptwo=temptwo;
//total=temp;  

let countthree=1;
var tempthree= document.getElementById("pricethree").innerHTML;
console.log(tempthree);
function totalFuctionAddthree(){
  console.log(countthree);
console.log("Added cart1 successfully");
tempthree= document.getElementById("pricethree").innerHTML;
const myCartthree =document.forms["three"];
for (let i = 0; i < myCartthree.length; i++) {
  countthree++;
 console.log(countthree);
 tempthree=countthree*tempthree;
 document.getElementById("full-pricethree").innerHTML = tempthree;
  }
  console.log(tempthree);
}
countthree=countthree;
tempthree=tempthree;

function totalFuctionSubthree(){

console.log(countthree);
console.log("subtracted cart1 successfully");
temptwo= document.getElementById("pricethree").innerHTML;
const myCartthree =document.forms["three"];
for (let i = 0; i < myCartthree.length; i++) {
  if(countthree>1){
countthree--;
  }
console.log(countthree);
tempthree=countthree*tempthree;
document.getElementById("full-pricethree").innerHTML = tempthree;
}
console.log(tempthree);
}

countthree=countthree;
tempthree=tempthree;