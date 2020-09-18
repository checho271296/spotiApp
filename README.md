# Spotiapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

For develop, this application needs a Spotify access token, you can get it¿ following the instructions in 

https://developer.spotify.com/documentation/general/guides/authorization-guide/

In the section : Client Credentials Flow

Yoy also need a Client ID and Client Secret that is provided by Spotify in https://developer.spotify.com/dashboard/, when you create a new
aplication.

When you have the token, you can use it in:

app/services/spotify.service.ts

 getQuery(query :string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
   #   'Authorization': 'Bearer acessToken'
    });

and change it in the Authorization line.

## Description

This is a project in Angular that use Spotify API, you can hear your favorites songs for any artist that is saved in spotify server.