import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {
  constructor(
      private activatedRoute: ActivatedRoute,
      private router:Router
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => console.log({ params })
    )

    this.activatedRoute.queryParams.subscribe(
      queryParams => console.log({ queryParams })
    )

    // setInterval(() => {
      // this.router.navigate(['404']) // navegações internas
      // this.router.navigateByUrl('404') // navegar para outra página (esse faz o reload da tela)
    // }, 5000) 
  }
}
