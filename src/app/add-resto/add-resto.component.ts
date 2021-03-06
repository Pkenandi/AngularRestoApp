import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  alert = false;
  AddForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
  });
  constructor(private resto: RestoService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  AddResto()
  {
    // console.log(this.AddForm.value);
    this.resto.saveResto(this.AddForm.value).subscribe((result) => {
      this.alert = true;
      this.AddForm.reset({});
    });

  }
  // tslint:disable-next-line:typedef
  close() {
    this.alert = false;
  }
}
