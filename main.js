import product_slides from './aktion.js'
import catalog_content_slides from './catalog.js'



let header_navigation = document.querySelector('.header_navigation').children;

      let parent_header_menu = header_navigation.parentNode;



 function resize_dynamic() {  
   window.addEventListener('resize', function() {
     location.reload();
   })
}

resize_dynamic();
   




      if (window.innerWidth <= 700) {


let arr_header_navigation = [];
for(let i = 0; i < header_navigation.length; i++) {
  arr_header_navigation[i] = header_navigation[i];
}


for(let i = 0; i < 7; i++) {
  if(i === 3) {
    arr_header_navigation[i].style.width = '80%';
  }
   else if(arr_header_navigation[i].classList.contains('mobile')) {
 arr_header_navigation[i].classList.remove('col-1');
continue;
  }
   else {
    arr_header_navigation[i].remove();
  }
}






let slideIndex = 0;
let slideIndex_products = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");


  for (i = 0; i < slides.length; i++) {

   slides[i].classList.add('fade', 'col-12');
   slides[i].classList.remove('col-4');
    slides[i].style.display = "none";

   product_slides[i].classList.add('fade');
    product_slides[i].style.display = "none";
  
  }

  slideIndex++;
  if (slideIndex > slides.length) {
         slideIndex = 1;
      };    
  
    slides[slideIndex - 1].style.display = "block"; 

  slideIndex_products++;
  if (slideIndex_products > product_slides.length) {
   slideIndex_products = 1;
};

  product_slides[slideIndex_products - 1].style.display = "block"; 



  setTimeout(showSlides, 2000);
};










let stimulus = document.getElementsByClassName("stimulus");


stimulus[0].classList.remove('col-6');
stimulus[0].classList.add('col-12', 'text-center');


let counter = 0;


  function animate() {

  images_mittel.classList.add('animate');
  books.classList.add('animate');
  ring_demonstration.classList.add('animate');


  setTimeout(function dt() {
    images_mittel.classList.remove('animate');
    images_mittel.classList.add('animate1');

    books.classList.remove('animate');
    books.classList.add('animate1');

    ring_demonstration.classList.remove('animate');
    ring_demonstration.classList.add('animate1');

  }, 5000+counter); 

 setTimeout(function dty() {
    images_mittel.classList.add('animate');
    images_mittel.classList.remove('animate1');

     books.classList.add('animate');
    books.classList.remove('animate1');

    ring_demonstration.classList.add('animate');
    ring_demonstration.classList.remove('animate1');


  }, 10000+counter);
  

counter += 10005;
};


setInterval(animate, 0);









function way_create_mobile() {
let way_create_main_title = document.getElementsByClassName('way_create_main')[0].childNodes[1];


way_create_main_title.classList.add('text-center');


let way_create_content = document.getElementsByClassName('way_create_content')[0].childNodes;


for(let i = 1; i < 6; i += 2) {


way_create_content[i].style.display = "none";
way_create_content[i].classList.remove('col-4');
way_create_content[i].classList.add('col-8', 'way_create_slide');


let way_create_item_describe = way_create_content[i].childNodes[5];
way_create_item_describe.classList.add('text-center');


let way_create_item_photo = way_create_content[i].childNodes[1];
way_create_item_photo.classList.add('text-center');


}

 let back = document.createElement('a');
 let next = document.createElement('a'); 


function back_next() {

back.classList.add('col-2', 'back');
next.classList.add('col-2', 'next');

back.innerHTML = '<img src="img/to_left.png">';
next.innerHTML = '<img src="img/to_right.png">';


function style_back_next(element) {
  element.children[0].style.height = '50px';
  element.children[0].style.width = '50px';
  element.children[0].style.position = 'relative';
  element.children[0].style.top = '45%';

element.addEventListener('mouseover', function() {
    element.style.backgroundColor = "lightgrey";  
});

element.addEventListener('mouseout', function() {
    element.style.backgroundColor = "#F1F1F1";  
});


}

style_back_next(next);
style_back_next(back);

return [back, next];
 }





let buttons_back_next = back_next();
 back = buttons_back_next[0];
 next = buttons_back_next[1];





let parent_way_create_content = way_create_content[1].parentNode;

parent_way_create_content.style.margin = '40px 0px 40px 0px';


let parent_way_create_main = parent_way_create_content.parentNode;


parent_way_create_main.style.margin = '100px 0px 30px 0px';

document.querySelector('.way_create_content').prepend(back);
document.querySelector('.way_create_content').append(next);


let count = 2;
way_create_content[count].style.display = 'block';



const next_click = next.addEventListener('click', function(){
   
   if(count < 6) {

    way_create_content[count].style.display = 'none';
    way_create_content[count + 2].style.display = 'block';
    count += 2;

} else {

  count = 2;
      way_create_content[count + 4].style.display = 'none';
   way_create_content[count].style.display = 'block';

}

});

const back_click = back.addEventListener('click', function(){
   
   if(count > 2) {

    way_create_content[count].style.display = 'none';
    way_create_content[count - 2].style.display = 'block';
    count -= 2;

} else {

   count = 6;
   way_create_content[count - 4].style.display = 'none';
   way_create_content[count].style.display = 'block';

}

});

return [next, back];
        };

 way_create_mobile();





    let footer_main = document.getElementsByClassName('footer_main')[0];


function shop_by() {

   let shop_by_main = document.getElementsByClassName('shop_by')[0];
   let shop_by_first_part = document.getElementsByClassName('shop_by_first_part')[0];
   let shop_by_second_part = document.getElementsByClassName('shop_by_second_part')[0];

   
     footer_main.classList.add('text-center');

 shop_by_main.classList.remove('col-6');
 shop_by_main.classList.add('col-3');

 shop_by_first_part.append(shop_by_second_part);
 shop_by_first_part.classList.remove('col-3');
 shop_by_first_part.classList.add('col-12');

 shop_by_second_part.classList.remove('col-3');
 shop_by_second_part.classList.add('col-12');

};

shop_by();



function change_col_footer_mobile() {
   let footer_part = document.getElementsByClassName('footer_part')[0].childNodes;


   for(let r = 3; r < 8; r += 2) {
          footer_part[r].classList.remove('col-2');
          footer_part[r].classList.add('col-3');
   }

    footer_main.style.padding = '100px 0px 30px 0px';
    footer_main.style.margin = '0px 0px 0px 5px';
   
}

change_col_footer_mobile();




function footer_end() {
   let footer_part_first = document.getElementsByClassName('footer_part_first');
   let footer_part_second = document.getElementsByClassName('footer_part_second');

   
   footer_part_first[0].childNodes[3].remove();

    footer_part_first[0].classList.remove('col-5');
    footer_part_first[0].classList.add('col-6');

    footer_part_first[0].childNodes[1].classList.remove('col-4');
    footer_part_first[0].childNodes[1].classList.add('col-12');

   footer_part_second[0].childNodes[3].remove();

     footer_part_second[0].childNodes[1].classList.remove('col-9');
    footer_part_second[0].childNodes[1].classList.add('col-12');


    const div_end = document.createElement('div');

    footer_main.append(div_end);



   div_end.classList.add('flex');
   div_end.style.margin = '30px 0px 0px 0px';


    div_end.innerHTML = `<div class="languages_footer col-6" style="vertical-align: middle;">
   <a href="#" style="border-right: 3px solid black; padding: 10px;">En</a>
   <a href="#" style="padding: 10px;">Ru</a>
</div>
   <p class="col-6">Web Credits</p>
`;

};

footer_end();

     };




let languages_main = document.getElementsByClassName('languages-main')[0];
console.log(languages_main);
let languages_button = document.getElementsByClassName('languages-btn')[0];
console.log(languages_button);
     function languages() {


  let drop = document.getElementById("languages-content");

  if (drop.style.display === 'block') {
    drop.style.display = 'none';
    languages_button.style.color = 'black';
  } else {
   drop.style.display = 'block';
   languages_button.style.color = 'white';
  }

}

languages_button.addEventListener('click', languages);



function open_close() {

let side = document.getElementsByClassName('side')[0].children[0];


function sidenav() {

   document.getElementById('sidenav').style.width = '300px';
    let close_button_img = document.getElementsByClassName('close')[0].children[0];

    close_button_img.style.maxWidth = '200%';
   for(let y = 0; y < 2; y++) {

   let for_opacity_back = document.getElementsByClassName('for_opacity_back')[y];
   for_opacity_back.style.opacity = '0.5';
}

}

side.addEventListener('click', sidenav);

let close = document.getElementsByClassName('close')[0].children[0];
function close_opacity() {

    document.getElementById('sidenav').style.width = '0px';
      for(let y = 0; y < 2; y++) {
        
   let for_opacity_back = document.getElementsByClassName('for_opacity_back')[y];
   for_opacity_back.style.opacity = '1';
}

}


close.addEventListener('click', close_opacity);

}

open_close();











