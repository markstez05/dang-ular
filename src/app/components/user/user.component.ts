import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age: number;
  email:string;
  address: Address;
  hobbies: string[];
  hello: any;
  isEdit:boolean = false;

  constructor(private dataService: DataService) {
    console.log('constructor ran..')
  }

  ngOnInit() {
    console.log('ngOnInit ran...')

    this.name = 'John Doe'
    this.age = 30;
    this.email = "mark@email.com"
    this.address = {
      street:'50 Main St',
      city: 'Boston',
      state:'MA'
    }
    this.hobbies = ['Write Code', 'Watch Movies', 'Music'],
    this.hello = "hello"
  }

  onClick(){
    this.name='Mark Stesney';
    this.hobbies.push('New Hobby')
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    console.log(hobby)
    for(let i = 0; i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i,1);
      }
    }
  }
  editToggle(){
    this.isEdit = !this.isEdit;
  }
}


interface Address{
  street:string,
  city:string,
  state:string
}
