import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {  map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http : HttpClient) { }

  getQuery(query :string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAjT40TN3q7htcuSIHQpjSPmTzs6w2n4h5bI4kqkEKAXbx5bvtQolYsATytfqwgFlHL0JgpyWcMgSiarZo'
    });

    return this.http.get(url,{headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));
  }


  getArtist(term:string){
    return this.getQuery(`search?q=${term}&type=artist`)
      .pipe(map(data => data['artists'].items));
  }
}
