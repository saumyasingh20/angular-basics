import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-productmaster',
  templateUrl: './productmaster.component.html',
  styleUrls: ['./productmaster.component.css']
})
export class ProductmasterComponent implements OnInit {

  prod:Product={
    code:-1,
    name:'',
    desc:'',
    manu:'',
    price:0
  }
  products:Product[]=[];
   
  isUpdateVisible:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  addProduct():void{
    let new_prod={
      code:this.prod.code,
      name:this.prod.name,
      desc:this.prod.desc,
      manu:this.prod.manu,
      price:this.prod.price
    }
    this.products.push(new_prod);
    this.clearData();
  }
  clearData():void{
    this.prod={
      code:-1,
      name:'',
      desc:'',
      manu:'',
      price:0
    }
  }
 
  deleteProduct(code:number):void{
    this.products=this.products.filter(prod => prod.code!=code);

  }

  editProduct(code:number):void{
    
    for(let i=0;i<this.products.length;i++){
           let prod = this.products[i];
           if(prod.code==code){
              this.prod.code=prod.code;
              this.prod.name=prod.name;
              this.prod.desc=prod.desc;
              this.prod.manu=prod.manu;
              this.prod.price=prod.price;
           }
    }
    this.isUpdateVisible=true;
    
    
  }

  updateProduct(code:number):void{
    this.products.map(prod => {
        if (prod.code === code) {
          prod['name'] = this.prod.name;
          prod['desc'] = this.prod.desc;
          prod['manu'] = this.prod.manu;
          prod['price'] = this.prod.price;
        }
    });
    this.isUpdateVisible=false;
    this.clearData();
  }


}
