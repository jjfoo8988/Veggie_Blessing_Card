const myForm = document.querySelector('#new-form');
const sender = document.querySelector('#Sender');
const receiver = document.querySelector('#Receiver');
const message = document.querySelector('#Message');
const Errmsg = document.querySelector('.error-msg');
const submitForm = document.querySelector('#submit-form');
const btn = document.querySelector('.btn');
const mealcalc = document.querySelector('#sub-display');
var arr=[];
const card = document.querySelector('.board');


//Slide image
const carouselSlide = document.querySelector('.carousal-slide');
const carouselImages = document.querySelectorAll('.carousal-slide img');

//Buttons for slide image
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Slide image counter
var counter = 1;
const size = 227;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Slide Image Button listener
nextBtn.addEventListener('click', () =>{
    if (counter >=carouselImages.length-1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', () =>{
    if(counter <=0)return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

carouselSlide.addEventListener('transitionend', ()=>{
    console.log(carouselImages[counter].src);
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length-2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});


//define meal image
const mealsimg = document.createElement("img");
mealsimg.height = 110;
mealsimg.style.marginTop = '20px';

//count number of words
var maxlength = 80;
var currentValue = 0;


//Image appear before clicking
mealsimg.src = "/images/meals.jpg";
mealcalc.appendChild(mealsimg);


class Person {
    constructor(csender, creceiver, cmsg, cmeals) {
      this.csender = csender;
      this.creceiver = creceiver;
      this.cmsg = cmsg;
      this.cmeals = cmeals;
    }
}



$('textarea').keyup(function(){
    var length = $(this).val().length;
    var length = maxlength -length;
    $('#countdown').text(length);
});



//console.log(radios);

btn.addEventListener('click', (e)=>{ //detecting mouse event


    e.preventDefault();
    var meals = document.querySelector('input[name = "meals"]:checked');
      
     if(sender.value === '' && receiver.value === '' &&  meals === null){
        alert('not complete');
    } else if (sender.value === ''){
        //Errmsg.classList.add('error');
        //Errmsg.innerHTML = '請輸入祝福者與收件者姓名！'
        //setTimeout(() =>Errmsg.remove(),3000);
        alert('请输入祝福者姓名！');
    } else if(receiver.value === ''){
        alert('请输入收件者姓名！');
    } else if(meals === null){
        alert('请记得写下你发愿的餐数哦！');
    } 
    else {

        const Person1 = new Person(sender.value, receiver.value, message.value, meals.value);
        console.log(sender.value);
        console.log("Meals value is" + meals.value);
        console.log(Person1.csender);
       // var queryString = "?para1=" + Person1.csender;
        window.location.href = "../index2.html" ;
        //+ queryString;
        localStorage.setItem("dsender",sender.value);
        localStorage.setItem("dreceiver",receiver.value);
        localStorage.setItem("dmsg",message.value);
        localStorage.setItem("dmeals",meals.value);  
        localStorage.setItem("dcards",carouselImages[counter].src) 
        postToGoogle(meals.value);
        alert('感恩你的发心');     
    }

    
 
    
});



function handleClick(meals){
    console.log(meals.value);
   
    if(meals.value ==='50'){
       
       mealsimg.src = "/images/meals17.jpg";
       mealcalc.appendChild(mealsimg);
       
    } else if(meals.value ==='100'){
        
        mealsimg.src = "/images/meals34.jpg";
        mealcalc.appendChild(mealsimg);
        
        
    } else if(meals.value ==='200'){
        
        mealsimg.src = "/images/meals67.jpg";
        mealcalc.appendChild(mealsimg);

     
    } else if(meals.value ==='300'){
        
        mealsimg.src = "/images/meals100.jpg";
        mealcalc.appendChild(mealsimg);
                
    
    } else if(meals.value ==='400'){
        
        mealsimg.src = "/images/meals134.jpg";
        mealcalc.appendChild(mealsimg);
    
    } else if(meals.value ==='500'){
        
        mealsimg.src = "/images/meals167.jpg";
        mealcalc.appendChild(mealsimg);
        
    
    }    
    else{
        mealsimg.src = "/images/meals.jpg";
        mealcalc.appendChild(mealsimg);
    }

    
}

function postToGoogle(mealvalue) {
    var field1 = $("#Sender").val();
    var field2 = $("#Receiver").val();
    var field3 = $("#Message").val();
    var field4 = mealvalue;
    console.log("Field 4 is " + field4); 
    

    $.ajax({
        
        url: "https://docs.google.com/forms/d/e/1FAIpQLSdmZhnAJSMZgxrHPlwvHhCwhPrKpkSyrE0PfCnFXN58Wisw1A/formResponse?",
        data: {"entry.277829981": field1, "entry.176410795": field2, "entry.690569167": field3, "entry.1767992553": field4},
        type: "POST",
        dataType: "xml",
        success: function(d)
        {
        },
        error: function(x, y, z)
            {

                $('#success-msg').show();
                $('#form').hide();
                
            }
    });
    return false;
}
