import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSocial]'
})
export class SocialDirective implements OnInit {

  constructor(private e:ElementRef) { }

  ngOnInit(){
    this.e.nativeElement.innerHTML = `
    <ul class="nav navbar-nav">
      <li><a href="#"><i class="fa fa-facebook"></i></a></li>
      <li><a href="#"><i class="fa fa-twitter"></i></a></li>
      <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
      <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
      <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
    </ul>
    `;
  }

}
