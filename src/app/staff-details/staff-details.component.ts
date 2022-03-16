import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css']
})
export class StaffDetailsComponent implements OnInit {

  // variables
  staffDetails: Staff = {id:1, name:"Tanvi", department: "Backend"};
  staffDetails2: Staff = {id:2, name:"Raj", department: "DevOPS"};
  staffDetails3: Staff = {id:3, name:"Dhruv", department: "FrontEnd"};

  // line 15 and 16 are same, can be accessed same.
  staffGroup: Array<Staff> = [this.staffDetails, this.staffDetails2, this.staffDetails3];

  staffGroup2: Array<Staff> = [{id:1, name:"Tanvi", department: "Backend"}, {id:2, name:"Raj", department: "DevOPS"},{id:3, name:"Dhruv", department: "FrontEnd"} ]

  constructor() {}


  // life cycle hooks
  ngOnInit(): void {

    this.staffGroup2.push({id:4, name:"Avni", department: "DataBase"}, {id:5, name:"Nidhi", department: "FoodTech"});

    // if different datatype either use let or new Staff as below
    // this.staffGroup2.push(new Staff{ id:5, name:"Bindi", department: "Pharma"});
  }

  // Note : when a class created with a properties/variables, must assign the default values.
}

//class can be anywhere
// Method 1
  // class Staff {
  //   id: number = 0;
  //   name: string = "";
  //   department: string = "";
    
  
  // functions()
// }

// Method 2
class Staff {
  id: number ;
  name: string ;
  department: string ;


constructor() {

  this.id = 0;
  this.name = "Sweta";
  this.department = "";
 }
}
