import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiHelperService } from '../services/api-helper.service';
@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.scss']
})


export class BusListComponent {

  data = "bus";

  ngOnInit(): void {
    console.log("buslist");
    this.data = "bus";
  }

}
