import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http : HttpClient) { }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQACGailzKHV6DZEfSCp5eRJdsXCTBdMBxtQodHRDOEZcvoyhOvXYdWFJ5ZMz1a9YUWjJYVWE0YRVSaVDy4'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers} );
  }


  getArtist(term:string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQACGailzKHV6DZEfSCp5eRJdsXCTBdMBxtQodHRDOEZcvoyhOvXYdWFJ5ZMz1a9YUWjJYVWE0YRVSaVDy4'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${term}&type=artist`,{headers} );
  }
}
