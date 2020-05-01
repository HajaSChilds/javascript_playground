function DinnerBill(meal1,meal2) {
    this.meal1 = meal1;
    this.meal2 = meal2;
    this.tax = 0.15;
 
    this.subtotal  = this.tax * (this.meal1 +this.meal2);
   
}

const mybill = new DinnerBill(35.00, 40.00);
console.log(mybill);
