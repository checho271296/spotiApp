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
      'Authorization': 'Bearer BQBsMjPqpRpbpQigOCLr2tCe5QUE-xjgf4-U1j0aRClDGAwyEULAlzkpaRHhEpjzDR2ei-UBnbaYx1kjutc'
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

  getArtistbyID(id:string){
    return this.getQuery(	`artists/${id}`)
  }

  getTopTracks(id:string){
    return this.getQuery(	`artists/${id}/top-tracks?country=us`)
      .pipe(map(data => data['tracks']));
  }
}
