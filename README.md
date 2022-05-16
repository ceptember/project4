# Wonderland API

https://wonderland-api.herokuapp.com/

## Description

This project is a REST API that provides quotes from the works of Lewis Carroll. It was completed by Christy Perozzi as a project for Flatiron School's Software Engineering program. It is intended for other developers to use in projects where they need filler text, such as a demonstration of a chat app, social platform, or review page. It was written using Ruby on Rails for the backend and React.js for the frontend.  

## Using the API 

This API is available at [https://wonderland-api.herokuapp.com/](https://wonderland-api.herokuapp.com/). 

### Authentication 
The current version of Wonderland API is free and open to use without an authentication token. Subsequent versions may add in authentication if the creator and/or contributors deem it warranted. 

### How to Use the API 

You can send an HTTP request to any of the URLs listed in the "Available Endpoints" section, and the Wonderland API server will return the data that you specified. 

From the terminal, the request and response would look as follows: 

`$ curl "https://wonderland-api.herokuapp.com/quotes/1"`

`{"id":1,"book_id":1,"character_id":1,"quote":"What is the use of a book without pictures or conversations?","character":{"id":1,"name":"Alice","species":"","home":""}}`

If using the data for a web app, you can include the following in your JavaScript file:

```
fetch("https://wonderland-api.herokuapp.com/quotes/1")
  .then( r => r.json())
  .then( data => {
    yourFunction(data)
    })
 ``` 
You can then manipulate the data as you would any JavaScript object. 

See here for additional help in using Fetch to get data from an API: [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

### Available Endpoints 

• https://wonderland-api.herokuapp.com/quotes will return all of the quotes.  
• Adding an id number, such as https://wonderland-api.herokuapp.com/quotes/45, will return a single quote.  
• https://wonderland-api.herokuapp.com/characters will return all of the characters.  
• Adding an id number, such as https://wonderland-api.herokuapp.com/characters/1, will return a single character.  
• https://wonderland-api.herokuapp.com/books will return all of the books.  
• Adding an id number, such as https://wonderland-api.herokuapp.com/books/1, will return a single book.  

## Modifying and Contributing 

### Copyright 

Wonderland API is copyrighted under the MIT License. 

Copyright 2022 Christina Perozzi 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### How to Modify

Feel free to clone this repository and use it as per the above license. 

Requirements: 

•  Ruby 2.7.4  
•  NodeJS (v16), and npm  
•  Postgresql  

### Contributing 

Please reach out if you'd like to contribute to this project [https://www.linkedin.com/in/chrizzi/](https://www.linkedin.com/in/chrizzi/)

## Resources
The original works that provide the text used as source material for this project are in the Public Domain.  
[https://www.gutenberg.org/ebooks/11](https://www.gutenberg.org/ebooks/11)
[https://www.gutenberg.org/ebooks/12](https://www.gutenberg.org/ebooks/12)