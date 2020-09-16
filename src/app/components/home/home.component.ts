import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newRealeses : any[] = []; 
  
  constructor(private  spotifyService:SpotifyService) {
      this.spotifyService.getNewReleases()
      .subscribe((res:any) => {
          this.newRealeses =res.albums.items;
      })
   }

  ngOnInit(): void {
    
  }

}
