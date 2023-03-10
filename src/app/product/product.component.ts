import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';

interface orders{
  product:string;
  payment:string;
  shipping:string
}




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit,OnDestroy,OnChanges{
  closeResult = '';
  ar:orders[]=[]
  value=false;
  sub : Subscription
  @Input() myValProp: string;

  propChanges: any;

	constructor(private modalService: NgbModal,private http:ProductService) {}
  ngOnInit() {
    this.sub = this.http.getProducts().subscribe(data=>{
      this.ar=data;
    })
  }
  ngOnChanges(changes: SimpleChanges) {
    this.propChanges = changes;
    console.log(this.propChanges);
  }
  

  

	open(content) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

  registrationform=new FormGroup({
    // product:new FormControl(' '),
    // pay:new FormControl(''),
    // shipping:new FormControl('')
    product:new FormControl('',Validators.required),
    payment:new FormControl('',Validators.required),
    shipping:new FormControl('',Validators.required)
  });

  onfun(){
    // let data:orders={
    //   product:this.registrationform.controls.product.value,
    //   payment:this.registrationform.controls.payment.value,
    //   shipping:this.registrationform.controls.shipping.value
    // }
    this.value=true
    let data:orders;
    data={
        product:this.registrationform.controls.product.value,
        payment:this.registrationform.controls.payment.value,
        shipping:this.registrationform.controls.shipping.value
      }
      if(this.registrationform.valid){
        this.value=false;
    this.ar.push(data)
    document.getElementById("ModalClose")?.click();
    this.onsub()
      }
    
  }

  onchange(){
    this.value=false;
  }
  delete(index: any){
    console.log(index);
    this.ar.splice(index,1);
    
  }
  onsub(){
    this.registrationform.reset();
  }

  ngOnDestroy(){
    this.sub.unsubscribe()
  }
ng

}

