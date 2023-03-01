import { Component } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,FormControl, Validators } from '@angular/forms';

interface orders{
  product:string;
  payment:string;
  shipping:string
}
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  myform: FormGroup;
  closeResult = '';
  ar:orders[]=[]

	constructor(private modalService: NgbModal) {}

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
    let data:orders;
    data={
        product:this.registrationform.controls.product.value,
        payment:this.registrationform.controls.payment.value,
        shipping:this.registrationform.controls.shipping.value
      }
      console.log(this.registrationform.controls.product.value)
      if(this.registrationform.controls.product.value==null){
        console.log("value is null")
      }
    if(this.registrationform.valid){
    this.ar.push(data)
    this.onsub()
    }
    
  }

  delete(index: any){
    console.log(index);
    this.ar.splice(index,1);
    
  }

  onsub(){
    this.registrationform.reset();
  }
}
