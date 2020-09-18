import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistArray : any[] = [];
  constructor(private spotifyService:SpotifyService) { }
  loading : boolean ;
  ngOnInit(): void {
  }

  searchArtists(artist:string ){
    if(artist != ""){
      this.loading = true;
      this.spotifyService.getArtist(artist)
      .subscribe((res:any) =>{
        this.artistArray = res;
        this.loading = false;
      })
    }
    
  }
}
