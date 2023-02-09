import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiHelperService } from '../services/api-helper.service';
import { Router } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.scss']
})

export class BusListComponent {
  dataSource: any;

  constructor(
    private http : HttpClient,
    private api: ApiHelperService,
    private router: Router,
  ) { }
  
    ngOnInit(): void {
      this.get();
    }
  
    get(){
    this.api.get({endpoint: ""}).then(response => {this.dataSource = response
    console.log(this.dataSource);
  });
  }
}