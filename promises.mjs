import fetch from 'node-fetch';
import {readFile} from 'fs';

fetch('https://randomuser.me/api/?results=30')
  .then(response => response.json())
  .then(data => data.results)
  .then(results => console.log(`We got ${results.length} rows`));

 
  fetch('https://randomuser.me/api/?results=30')
  .then(response => response.json())
  .then(data => {console.log('This is the error that I made')})
  .then(results => {throw new Error(`We got ${results.length} rows`)})
  .catch(err => console.log('Something went wrong', {err}));