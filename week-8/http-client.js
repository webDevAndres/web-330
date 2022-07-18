/*
Title: htt-client.js
Author: Andres Macias
Date: 7/17/2022
Description: builds a request
*/

export class HttpClient {

async get(url, params = '') {
    url = new URL(url);
    url.search = new URLSearchParams(params);
    
    let res = await fetch(url.toString(), {
        method: 'GET'
    });
    return res.json();
}

};