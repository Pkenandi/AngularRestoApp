import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { RestoService } from '../resto.service';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private router: ActivatedRoute, private resto: RestoService) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.resto.getId(this.router.snapshot.params.id).subscribe((result) => {
      this.UpdateForm = new FormGroup({
        name: new FormControl(result['name']),
        address: new FormControl(result['address']),
      });
    });
  }

  UpdateResto()
  {
    this.resto.updateRsto(this.router.snapshot.params.id, this.UpdateForm.value).
      subscribe((result) => {
      this.alert = true;
    });
  }

  close()
  {
    this.alert = false;
  }

}
