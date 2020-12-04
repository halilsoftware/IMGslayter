var models = [{
    name : 'BMW 418d',
    Image : 'img/bmw.jpg',
    link : 'www.arabalar.com'
},
{
    name : 'Mazda Cx-3',
    Image : 'img/mazda.jpg',
    link : 'www.arabalar.com'
},
{
    name : 'Volvo S60',
    Image : 'img/volvo.jpg',
    link : 'www.arabalar.com'
},
{
    name : 'Skoda superb',
    Image : 'img/skoda.jpg',
    link : 'www.arabalar.com'
},
{
    name : 'Honda Civig',
    Image : 'img/honda.jpg',
    link : 'www.arabalar.com'
},
]
var index = 0;
var slaytCount = models.length;
var Interval;
var settings = {
 duration : '2000',
 random : false 
};
function init(settings){
    var prev;
   Interval = setInterval(function(){
       
        if(settings.random){
            do{
                index =Math.floor(Math.random()*slaytCount);
            }while(index == prev)
            prev = index;
            //random
           
        }else{
            if(slaytCount == index+1){
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
            //artan
        }
        showSlide(index);
    },settings.duration)
}

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(Interval);
    })
})

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
      init(settings);
    })
})

init(settings);
document.querySelector('.fa-arrow-left').addEventListener('click',function(){
    index--;
    showSlide(index);
});

document.querySelector('.fa-arrow-right').addEventListener('click',function(){
    
    index++;
    showSlide(index);
    
 });

 function showSlide(i){
     index = i;
     if (i<0){
       index = slaytCount - 1; 
     }
     if (i>4){
         index = 0;
     }

    
    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src',models[index].Image);
    document.querySelector('.card-link').setAttribute('href',models[index].link);
    
 }

