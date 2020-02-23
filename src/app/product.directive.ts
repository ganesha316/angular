import { Directive, OnInit, ElementRef, Input, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[appProduct]'
})
export class ProductDirective implements OnInit{
  @Input() product;
  constructor(private el:ElementRef, private render:Renderer) { }

  @HostListener('mouseover') onMouseover(){
    this.applyCss(true);    
  }
  
  @HostListener('mouseout') onMouseout(){
    this.applyCss(false);      
  }

  applyCss(type){
    this.render.setElementClass(this.el.nativeElement,'my-class',type);
  }

  ngOnInit(){
    this.el.nativeElement.innerHTML=`
      <div class="product-image-wrapper">
          <div class="single-products">
              <div class="productinfo text-center">
                  <img src="/assets/images/home/${this.product.img}" alt="" />
                  <h2>$${this.product.price}</h2>
                  <p>${this.product.name}</p>
                  <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
              </div>
              <div class="product-overlay">
                  <div class="overlay-content">
                      <h2>$${this.product.price}</h2>
                      <p>${this.product.name}</p>
                      <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                  </div>
              </div>
          </div>
          <div class="choose">
              <ul class="nav nav-pills nav-justified">
                  <li><a href="#"><i class="fa fa-plus-square"></i>Add to wishlist</a></li>
                  <li><a href="#"><i class="fa fa-plus-square"></i>Add to compare</a></li>
              </ul>
          </div>
      </div>
    `;
  }

}
