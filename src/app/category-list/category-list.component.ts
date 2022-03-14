import { Component, OnInit } from '@angular/core';
import { Category } from 'src/shared/app.types';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  constructor() { }
  public prices:{value:number,description:string}[] = [];

  ngOnInit(): void {
    this.initCategories();
    this.initPriceFilter();
  }

  public categories:Category[] = [];

  public selectPrice(event:Event) : void{
    const range = parseInt((<HTMLInputElement>event.target).value) ?? 0 ;
    this.initCategories(); // This is invoked so that we have latest data everytime.
    if(!range)
        return;
    
        this.categories = this.categories.filter(category => category.price <= range );
  }

  private initCategories(): void{
    this.categories = [
      {name:'Iphone 10',description:'This is an apple phone which is more efficient and battery saver',img:'https://cdn.shopify.com/s/files/1/0083/6380/2720/products/38_1_527d61e4-a4d4-4606-9a87-393a2f8b2fbc.jpg?v=1636452661',price:80000,manufacturedBy:'Apple'},
      {name:'Samsung Galaxy S20',description:"Samsung Galaxy's most advanced zoom ever will help you capture amazing things from far away. Galaxy S20's Hybrid Optic Zoom allows you to zoom up to x3 on anything that catches your eye with absolutely no loss of image quality. ",img:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-5g-r1.jpg",price:30000,manufacturedBy:'samsung'},
      {name:'One plus Nord',description:"The OnePlus Nord is an Android-based smartphone manufactured by OnePlus, unveiled on 21 July 2020. It is the first device in the Nord series. It is the first mid-range smartphone from OnePlus since the 2015 OnePlus X",img:"https://m.media-amazon.com/images/I/61iy2Ru9KdS._SL1500_.jpg",price:15000,manufacturedBy:'oppo mobile'},
      {name:'Iphone 13',description:"Apple's iPhone 13 features a ceramic shield front, Super Retina XDR display with True Tone and an A15 Bionic chip. The first design change users will notice is the smaller notch. After years of using the same-sized notch to house the Face ID components, Apple has finally reduced its size by 20%.",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-blue-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645552346275",price:49000,manufacturedBy:'Apple'},
      {name:'Iphone 7',description:'The IPhone 7 features a 28mm 12-megapixel camera with optical image stabilization, a wider f/1.8 aperture 6-element lens, wide color capture, and a revamped Apple image signal processor, all of which result in brighter, sharper, more detailed photos, even in low-light conditions',img:'https://m.media-amazon.com/images/I/61VwZLSaSOL._AC_SX522_.jpg',price:25999,manufacturedBy:'Apple'},
      {name:'One plus 10',description:"OnePlus 10 Pro is equipped with an in-display fingerprint sensor for security, Dolby Atmos, and Hi-Res audio. The device packs a 5,000mAh battery with 80W SuperVOOC wired fast charging support.",img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202111/OnePlus_10_Pro_image.jpg?XXBe1aJ6GnOMJwgZBppT2VO5rYCzw4Ct&size=770:433",price:5000,manufacturedBy:'oppo mobile'},
      {name:'Samsung Galaxy S22 Ultra',description:"Galaxy S22 Ultra is the first Galaxy S with built-in S Pen. A precise tip and low latency make each stroke feel like putting pen to paper, and when you're done writing, control your phone with Bluetooth-enabled Air Actions. Then just place it right back into your phone to recharge.",img:"https://helios-i.mashable.com/imagery/reviews/074lTlwrLLcH7SVYrBFC2mU/hero-image.fill.size_1200x1200.v1645211431.jpg",price:100000,manufacturedBy:'Samsung'},
      {name:'Xiomi mi 11',description:"The Xiaomi Mi 11 is an Android-based high-end smartphone designed, developed, produced, and marketed by Xiaomi Inc. succeeding their Xiaomi Mi 10 series. The phone was launched globally on 8 February 2021",img:"https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SS450_.jpg",price:24999,manufacturedBy:'Xiaomi'},
      {name:'Samsung Galaxy F 12',description:"Samsung Galaxy F12 is a decidedly affordable phone that has a quite a few things to look forward to. It offers a 90Hz HRR display on a budget, has an appealing software, and a long lasting 6000mAh battery. On the downside, a sharper and better quality display would have made F12 a lot more appealing.",img:"https://assets.mspimages.in/wp-content/uploads/2021/04/Samsung-Galaxy-F12-2.jpg",price:10000,manufacturedBy:'Samsung'},
      {name:'Samsung Galaxy S20',description:"Samsung Galaxy's most advanced zoom ever will help you capture amazing things from far away. Galaxy S20's Hybrid Optic Zoom allows you to zoom up to x3 on anything that catches your eye with absolutely no loss of image quality. ",img:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-5g-r1.jpg",price:11000,manufacturedBy:'samsung'},
      {name:'One plus Nord',description:"The OnePlus Nord is an Android-based smartphone manufactured by OnePlus, unveiled on 21 July 2020. It is the first device in the Nord series. It is the first mid-range smartphone from OnePlus since the 2015 OnePlus X",img:"https://m.media-amazon.com/images/I/61iy2Ru9KdS._SL1500_.jpg",price:6000,manufacturedBy:'oppo mobile'},
    ]
  }

  private initPriceFilter(){
    this.prices = [
     { value:5000,description:'Below 5000'},
     { value:10000,description:'Below 10000'},
     { value:25000,description:'Below 25000'},
     { value:40000,description:'Below 40000'},
     { value:100000,description:'Below 100000'},
    ]
  }

}
