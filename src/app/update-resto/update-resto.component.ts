import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  alert = false;
  UpdateForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
  });
  constructor(private resto: RestoService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  UpdateResto()
  {
  }

}
