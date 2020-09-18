import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading :boolean;
  newRealeses : any[] = []; 
  error :boolean ;
  errorMessage : string;
  
  constructor(private  spotifyService:SpotifyService) {
    this.loading = true;
    this.error = false;
    
      this.spotifyService.getNewReleases()
      .subscribe((res:any) => {
          this.newRealeses =res;
          this.loading = false;
      },(error) =>{
        this.errorMessage = error.error.error.message;
        console.log(error);
        this.loading = false;
        this.error = true;
        
      })
   }

  ngOnInit(): void {
    
  }

}
