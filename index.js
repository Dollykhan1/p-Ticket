
// console.log conncted("")

// let countLoss = 40;
// for(const btn of allBtn){
// count = count + 1;
// btn.addEventListener('clck',function(){
//     count=count + 1;
//     decument.getElementById('set-count').innerText = count 
//     countLoss = countLoss - 1;
//     document.getElementById('seat-los').innerText = countLoss;
//     const price =document.getElementById('price').innerText
//     //console.log(pricess)
//     const btnName = document.guerySelector(btn).innerText
//     //console.log(btnName)
//     const titleContainer = document.getElementById('container')
//     console.log(titleContainer)
//     const p =document.createElement('p')
//     p.innerText = btnName.innerText + 'employee' + price
//     titleContainer.appendChild('p')
    
// })

// }
function gototicket(){
    window.scrollBy(0, 2000);
    //console.log("0,500")
}
function changsetcolor(){
    document.getElementById('A1').style.backgroundColor="green";
    const getseatnumber=document.getElementById('A1').innerHTML;
   const satseatnumber=document.getElementById('select-seat-number').innerHTML=getseatnumber;

   const get_total_seat = document.getElementById('set_left').innerHTML;
   
   document.getElementById('set_left').innerHTML = get_total_seat-1;
}

function SelectSetD1(){
    document.getElementById('d1').style.backgroundColor="green";
    const getseatnumber=document.getElementById('d1').innerHTML;
   const satseatnumber=document.getElementById('select-seat-number2').innerHTML=getseatnumber;

   const get_total_seat = document.getElementById('set_left').innerHTML;
   
   document.getElementById('set_left').innerHTML = get_total_seat-1;
   
}

function SelectSetB3(){
    document.getElementById('b3').style.backgroundColor="green";
    const getseatnumber=document.getElementById('b3').innerHTML;
   const satseatnumber=document.getElementById('select-seat-number3').innerHTML=getseatnumber;

   const get_total_seat = document.getElementById('set_left').innerHTML;
   
   document.getElementById('set_left').innerHTML = get_total_seat-1;

    const price1= document.getElementById("price1").innerHTML;
    const price2= document.getElementById("price2").innerHTML;
    const price3= document.getElementById("price3").innerHTML;
    const total_price = parseInt(price1)+parseInt(price2)+parseInt(price3);

    document.getElementById("total_price").innerHTML="BDT"+total_price;

    document.getElementById("grand_total").innerHTML="BDT"+total_price;
   
}


function submit_to_sucess(){
    document.getElementById('success-bar').style.display="block";
}