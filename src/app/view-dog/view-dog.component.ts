import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-dog',
  templateUrl: './view-dog.component.html',
  styleUrls: ['./view-dog.component.css']
})
export class ViewDogComponent implements OnInit {

  // 0 not account / 1 adotante / 2 adm-canil
  loginType: number = 2;

  constructor() { }

  ngOnInit(): void {
  }

  isAdotante(){
    if(this.loginType == 1 || this.loginType == 0) return true;
    else return false;
  }
  isCanil(){
    return !this.isAdotante();
  }

}
