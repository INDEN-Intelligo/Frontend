import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { ApiHelperService } from '../services/api-helper.service';

export interface Bus {
  id: number;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.scss']
})

export class BusListComponent {
  dataSource: any;

  constructor(

    private router : Router,
    private http: HttpClient,

    private api: ApiHelperService,
  ) {}

  displayedColumns: string[] = ['id', 'ligne', 'arret', 'horraire'];
  
  ngOnInit(): void {
    this.get();
  }

  get(){

    //send a request with the HTTP client to the api
    const resquest: Observable<any> = this.http.get('http://localhost:3000/bus', { observe: 'response' });
    lastValueFrom(resquest).then((response: { body: any; }) => {
      this.dataSource = response.body;
      console.log(this.dataSource);
    });

  }

}