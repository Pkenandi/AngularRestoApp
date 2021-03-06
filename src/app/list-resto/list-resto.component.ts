import { Component, OnInit, EventEmitter } from '@angular/core';
import { RestoService} from '../resto.service';



@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  collection: any = [];
  p = 1;
  constructor(private resto: RestoService) { }

  ngOnInit(): void {
    this.resto.getList().subscribe((result) => {
      console.log(result);
      this.collection = result;
    });
  }
  // tslint:disable-next-line:typedef
  deleteResto(id)
  {
    this.collection.splice(id - 1, 1);
    this.resto.deleteResto(id).subscribe((result) => {
      console.log('result', result);
    });
  }
  // tslint:disable-next-line:typedef
  pageChanged(event)
  {
    this.p = event;
  }

}
