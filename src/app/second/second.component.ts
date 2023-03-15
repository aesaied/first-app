import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  name!: string;
  name2!: string;

  // private route!: ActivatedRoute;
  // private router!: Router;

  constructor(private route: ActivatedRoute, private router: Router) {
    // this.route = route;
    // this.router = router;


  }

  ngOnInit(): void {
    //  
    //
    this.route.params.subscribe(params => {
      this.name = params['name'] || 'Guest';


    });



    //  get  first  value from  

    this.name2 = this.route.snapshot.paramMap.get('name') || 'Guest';


  }



}
