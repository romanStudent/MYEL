let product_parent = document.querySelector('.products');

class product {
	constructor(header, img_src, img_alt, price, col) {
		    this.header = header;
		    this.img_src = img_src;
		    this.img_alt = img_alt;
        this.price = price;
        this.col = col;
	}


	render() {
		let div = document.createElement('div');
     div.classList.add(`${this.col}`, 'products_item', 'text-center');

       if(window.innerWidth <= 700) {

         div.style.marginLeft = "auto";
         div.style.marginRight = "auto";

       }

       div.innerHTML = `
        <h5>${this.header}</h5>
        <img src="${this.img_src}" alt="${this.img_alt}">

          <div class="col-12 buy flex">
             <p href="#" class="price col-4">${this.price}</p>
             <input type="button" name="buy" value="Shop now" class="col-8">
          </div>
        `;

let po = 0;

        product_parent.append(div);

po++;
        return div;
	}
}




let col;

if(innerWidth >= 700) {
    col = 'col-4';
} else {
   col = 'col-8';
}


let product_1 = new product('Stein Necklace in Silver', 'img/Accessories/Stein Necklace.png', 'Stein necklace', '$310', col);
let product_2 = new product('Gold Ring', 'img/Accessories/image2.png', 'Gold ring', '$350', col);
let product_3 = new product('Origines Pendart', 'img/Accessories/Origines Pendant.png', 'Pendart', '$280', col);

product_1.render();
product_2.render();
product_3.render();



let products_slides = product_parent.children;

export default products_slides;