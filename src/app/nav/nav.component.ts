import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(
    private route: Router
    
  ) {}

  bus() : void{
    this.route.navigateByUrl("/bus");
  }

  main() : void {
    this.route.navigateByUrl("");
  }

}
