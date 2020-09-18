import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit {


  @Input() newRealeses : any[];

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  getArtist(release: any){
    let idArtist = "" ;
    if(release.type == 'album'){
      idArtist = release.artists[0].id;
    }else{
      idArtist = release.id;
    }
    if(idArtist != ""){
      this.router.navigate(['/artist',idArtist]);
    }     
  }

}
