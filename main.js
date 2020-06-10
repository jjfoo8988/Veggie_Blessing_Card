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

        swal({
            title: "确保以上的栏位都有填上哦！",
            icon: "warning",
            button: "OK!"
          })
    } else if (sender.value === ''){
        //Errmsg.classList.add('error');
        //Errmsg.innerHTML = '請輸入祝福者與收件者姓名！'
        //setTimeout(() =>Errmsg.remove(),3000);
        swal({
            title: "请输入祝福者姓名！",
            icon: "warning",
            button: "OK!"
          })
    } else if(receiver.value === ''){
        swal({
            title: "请输入收件者姓名！",
            icon: "warning",
            button: "OK!"
          })
    } else if(meals === null){
        swal({
            title: "请记得写下你发愿的餐数哦！",
            icon: "warning",
            button: "OK!"
          })
    } 
    else {
        swal({
            title: "确定完成祝福卡?",
            buttons: ["等等！","是的"],
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                let activeEle = document.querySelector('.item.active img');
                var carouselImages = activeEle.getAttribute('src');
                // console.log("carouselImages" + carouselImages);
                // console.log("activeELE" + activeEle.getAttribute('src'));
                console.log(sender.value);
                console.log("Meals value is" + meals.value);
               // var queryString = "?para1=" + Person1.csender;
                
                //+ queryString;
                localStorage.setItem("dsender",sender.value);
                localStorage.setItem("dreceiver",receiver.value);
                localStorage.setItem("dmsg",message.value);
                localStorage.setItem("dmeals",meals.value);  
                localStorage.setItem("dcards",carouselImages);
                postToGoogle(meals.value);
              swal("祝福卡已经完成!", {
                icon: "success",
                });
                sleep(2000)
                .then(() => { window.location.href = "../index2.html" ; })
              
            } else {
              swal("请继续填写！");
            }
          });


        

           
    }

    
 
    
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function handleClick(meals){
    console.log(meals.value);

    if(meals.value ==='10'){
       
    mealsimg.src = "/images/meals4.jpg";
    mealcalc.appendChild(mealsimg);

    
    }else if(meals.value ==='30'){
       
        mealsimg.src = "/images/meals10.jpg";
        mealcalc.appendChild(mealsimg);
    
    }else if(meals.value ==='50'){
       
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

$("#myCarousel").carousel({interval: false});


// //Slide image
// const carouselSlide = document.querySelector('.carousal-slide');
// const carouselImages = document.querySelectorAll('.carousal-slide img');
// var carouselImages1 = document.querySelector('.carousal-container').getBoundingClientRect().width;


// //Buttons for slide image
// const prevBtn = document.querySelector('#prevBtn');
// const nextBtn = document.querySelector('#nextBtn');

// //Slide image counter
// let counter = 1;
// // const size = carouselImages[0].clientWidth;
// var size = carouselImages1;
// //const size = 1;


// //carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';



// //Slide Image Button listener
// nextBtn.addEventListener('click', () =>{
//     if (counter >=carouselImages.length-1) return;
//     carouselSlide.style.transition = "transform 0.4s ease-in-out";
//     counter++;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// });

// prevBtn.addEventListener('click', () =>{
//     if(counter <=0)return;
//     carouselSlide.style.transition = "transform 0.4s ease-in-out";
//     counter--;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// });

// carouselSlide.addEventListener('transitionend', ()=>{
//     console.log(carouselImages[counter].src);
//     if(carouselImages[counter].id === 'lastClone'){
//         carouselSlide.style.transition = "none";
//         counter = carouselImages.length-2;
//         carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
//     if(carouselImages[counter].id === 'firstClone'){
//         carouselSlide.style.transition = "none";
//         counter = carouselImages.length - counter;
//         carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
// });