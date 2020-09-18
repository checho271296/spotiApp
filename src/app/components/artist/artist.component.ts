import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent  {
  loading : boolean;
  artist : any = {};
  topTacks : any[] = [];

  constructor(private spotifyService: SpotifyService,private activatedRoute: ActivatedRoute) { 
    this.loading = true;
    this.activatedRoute.params.subscribe( params =>{
      this.getArtist(params['id']);
      this.getTopTrack(params['id']);
    });
    
  }

  getArtist(id :string ){
      this.spotifyService.getArtistbyID(id)
        .subscribe(data =>{
          this.artist = data;
          this.loading = false;
    });
  }

  getTopTrack(id:string){
    this.spotifyService.getTopTracks(id)
      .subscribe(data => {
        this.topTacks = data;
        console.log(this.topTacks);
      })
  }
        
  

}
