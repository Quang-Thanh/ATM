import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  constructor() { }
  account: string = '2014492@dlu.edu.vn';
  accountName: string = 'Vũ Quang Thanh';
  dateOfBirth: string = '30/06/2002';
  address: string = 'Trường đại học Đà Lạt';
  buget: number = 100000;
  sex: string = 'Nam';
}
