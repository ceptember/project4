import React from "react";

function Documentation(){
    return (
        <div className='content'>
            <h2>Documentation</h2>

            <h3>Introduction</h3>
            <p>
                This documentation will guide you through using this REST API. The data provided in this API includes quotes from the works of Lewis Carroll. It is intended for developers to use in their projects as sample filler text, such as in a demonstration of a chat app, social platform, or review page. 
            </p>


            <h3>Authentication</h3>
            <p>
                The current version (version 1.0) of Wonderland API is free and open to use without an authentication token. Subsequent versions may add in authentication if the creator and/or contributors deem it warranted. 
            </p>

            <h3>How to Use the API </h3>
            <p>
                You can send an HTTP request to any of the URLs listed in the "Available Endpoints" section, and the Wonderland API server will return the data that you specified. 
            </p>

            <p>
                From the terminal, the request and response would look as follows: 
            </p>

            <div className='responsePreview' >
                $ curl "https://wonderland-api.herokuapp.com/quotes/45"
                <br /> <br />
                &#123; "id":45,"quote":"We're all mad here. I'm mad. You're mad. You must be, or you wouldn't have come here.","character": &#123;"name":"Cheshire Cat" &#125;,"book": &#123;"title":"Alice's Adventures in Wonderland" &#125; 
            </div>

            <p>
                If using the data for a web app, you can include the following in your JavaScript file:
            </p>

            <div className='responsePreview' >
                fetch("https://wonderland-api.herokuapp.com/quotes/1") <br />
                .then( r =&gt; r.json()) <br />
                .then( data =&gt; &#123; <br />
                yourFunction(data)
                )
                &#125;
            </div>

            <p>
                You can then manipulate the data as you would any JavaScript object. 
            </p>

            <p>
            See here for additional help in using Fetch to get data from an API: 
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" target="_blank"> https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch ↗ </a>
            </p>

            <h3></h3>
            <p>

            </p>

            <h3>Copyright</h3>
            <p>
                Wonderland API is copyrighted under the MIT License. 
            </p>
            
            <p>
                Copyright 2022 Christina Perozzi 
            </p>

            <p>
                Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
            </p>

            <p>
                The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
            </p>

            <p>
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            </p>


            <h3>Source Material </h3>
            <p>
            The original works that provide the text used as source material for this project are in the Public Domain. A public-domain book is a book published with no copyright, or one where the copyright has expired or been forfeited. 
            The works were published before January 1, 1923, and are in the public domain worldwide because the author, Lewis Carroll (born Charles Lutwidge Dodgson), died in 1898, more than 100 years ago.
            </p>

            <p>
            See here for more information: <a href="https://www.legalcurrent.com/alice-in-wonderlands-adventures-in-case-law/" target="_blank">https://www.legalcurrent.com/alice-in-wonderlands-adventures-in-case-law ↗ </a>
            </p>
            <p>
            Full text of Alice in Wonderland: <a href="https://www.gutenberg.org/ebooks/11" target="_blank">https://www.gutenberg.org/ebooks/11 ↗</a>
            </p>
            <p>
            Full tect of Through the Looking Glass: <a href="https://www.gutenberg.org/ebooks/12" target="_blank">https://www.gutenberg.org/ebooks/12 ↗</a>
            </p>

            <h3>About the Creator</h3>
            <p>
                Christy Perozzi is a full-stack web developer who must be mad, or she wouldn't have come here.   
            </p>

        </div>
    )
}

export default Documentation 