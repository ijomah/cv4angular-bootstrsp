import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pixslider',
  templateUrl: './pixslider.component.html',
  styleUrls: ['./pixslider.component.css']
})
export class PixsliderComponent implements OnInit {
images = [
  {img: "../asset/images/fb-pix-1.jpg"},
  {img: "../asset/images/fb-pix-2.jpg"},
  {img: "../asset/images/fb-pix-3.jpg"},
  {img: "../asset/images/fb-pix.jpg"},
  {img: "../asset/images/pix-new-copy.jpg"},
  {img: "../asset/images/my-cv-wall.png"},
  {img: "../asset/images/mypix2021.png"}
];

slideConfig = {
  "slidesToShow": 3,
  "slidesToScroll": 3,
  "dots": true,
  "infinite": true
};
  constructor() { }

  ngOnInit(): void {
  }

}
