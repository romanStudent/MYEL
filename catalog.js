let catalog_content_parent = document.querySelector('.catalog_content_main');
let catalog_content_items = document.querySelector('.catalog_content').children;
let catalog_content_items_parent = document.querySelector('.catalog_content');
let product_parent = document.querySelector('.products');





class catalog_content_item {
	constructor(name_catalog, img_src, img_alt, col) {
		this.name_catalog = name_catalog;
		this.img_src = img_src;
		this.img_alt = img_alt;
        this.col = col;
	}



	render_card() {
		let div = document.createElement('div');
    div.classList.add(`${this.col}`, 'products_item');


catalog_content_items_parent.classList.add('flex');


        div.innerHTML = `
      <img src=${this.img_src} alt=${this.img_alt} class="col-12">
         <div class="overlay text-center text"><span class="text-white">${this.name_catalog}</span></div>
        `;

let po = 0;
po++;
        return div;
	}



    render_arrows() {
         let bac = document.createElement('a');
         let nex = document.createElement('a');


      function back_nex() {

            bac.classList.add('col-2', 'bac');
            nex.classList.add('col-2', 'nex');

            bac.innerHTML = '<img src="img/to_left.png">';
            nex.innerHTML = '<img src="img/to_right.png">';

         function style_back_next(element) {
               element.children[0].style.height = '50px';
               element.children[0].style.width = '50px';
               element.children[0].style.position = 'relative';
               element.children[0].style.top = '35%';

                  
                  element.addEventListener('mouseover', function() {
                       element.style.backgroundColor = "lightgrey";   
                  });

                  element.addEventListener('mouseout', function() {
                       element.style.backgroundColor = "#F1F1F1";  
                  });


         }

         style_back_next(nex);
         style_back_next(bac);

return [bac, nex];
 }


 let buttons = back_nex();
 bac = buttons[0];
 nex = buttons[1];

catalog_content_parent.prepend(bac);
catalog_content_parent.append(nex);

return [bac, nex]
    }


    change_style_main_block() {
        catalog_content_parent.style.marginLeft = '0px';
    }
}






let col;
  
  if(innerWidth <= 700) {
      col = 'col-5';
  } else {
      col ='col-3'
  }


 let catalog_content_item_1 = new catalog_content_item('Brangles', 'img/Accessories/Brangle.png', 'Brangles', col);
 let catalog_content_item_2 = new catalog_content_item('Earrings', 'img/Accessories/Earring.png', 'Earrings', col);
 let catalog_content_item_3 = new catalog_content_item('Rings', 'img/Accessories/Ring.png', 'Rings', col);



 let div1 = catalog_content_item_1.render_card();
 let div2 = catalog_content_item_2.render_card();
 let div3 = catalog_content_item_3.render_card();
 
 catalog_content_items_parent.append(div1);
 catalog_content_items_parent.append(div2);
 catalog_content_items_parent.append(div3);

if(innerWidth <= 700) {

 catalog_content_items[2].style.display = "none";

   let buttons = catalog_content_item_1.render_arrows();

   let bac = buttons[0];
   let nex = buttons[1];


     catalog_content_item_1.change_style_main_block();



     let count = 0;

       const next_click = nex.addEventListener('click', function(){
   
          if(count < 2) {

            catalog_content_items[count].style.display = "none";  

            count += 2;
            
            catalog_content_item_3.render_card();
            catalog_content_items_parent.append(catalog_content_items[count]);
            catalog_content_items[count].style.display = "block"; 

} else {

            count = 0;

            catalog_content_items[count + 2].style.display = 'none';
            catalog_content_items[count].style.display = 'block';

}
});


const back_click = bac.addEventListener('click', function(){

   if(count > 0) {

            catalog_content_items[count].style.display = "none";  
            catalog_content_item_1.render_card();
            catalog_content_items_parent.prepend(catalog_content_items[count - 2]);
            catalog_content_items[count - 2].style.display = "block";

             count -= 2;

} else {

            catalog_content_items[count].style.display = 'none';
            catalog_content_items[count + 2].style.display = 'block';

             count += 2;

}
});

}




let catalog_content_slides = catalog_content_parent.children;

export default catalog_content_slides;