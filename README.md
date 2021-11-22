# Project Title: Url Shortener
* **Short Description:** An web application where, a user can enter an arbitrary URL "X" and gets a shortened URL in return.

## Live Link:


## Server-Side code link:
https://github.com/Abir-Reza/urlShortener_ServerSide

## Functional Requirements
1. A user can enter an arbitrary URL "X" on the website and get a shortened URL in return.
2. On visiting the shortened URL, the user gets redirected to "X".
3. The shortening has to be idempotent, i.e. a given URL always has to yield the same short URL as a result.
4. [Bonus, if you feel like it :)] On the website, the user can also see stats for all shortUrls that have been generated (by anyone) on the site:
    * For each shortUrl, how often did someone attempt to shorten that specific URL?
    * For each shortUrl, how often was it visited?

## System Design:
#### What is URL shortener?
A URL shortener is a service that creates a shorter alias for a long URL. When user clicks on the short link, the service redirects to the original link.
There already exist some URL shortener service, for example- bitly.com . 
#### Encoding Algorithm:
To compute unique shortened code , I used **Base62** convertion. That means, the generated strings contain letters from **[A-z,a-z,0-9]** and in total it is 64.
While creating the Short code, there is an important question that what shoud be length of the generated code? 
* If the code contains 6 letters, there will be 64<sup>6</sup> possible unique code. 
* If the code contains 7 letters, there will be 64<sup>7</sup> possible unique code. 

But I decided not to be fixed in the length of the string. Code will start generating 6 letters srting and will continue to generate strings of 7 length, even if it exceeds the limit(64<sup>6</sup>) of 6 length.<br />

In addition, rather than converting the whole URL, I generated a 64Base code and assigned the long URL to the code. The algorithm takes a number as argument and convert it into base64 to generate a Short code. The value of the input increases by one every time, so that there is no chance of creating same short code again.<br />
The algorithm used for convertion is attached here: <br />

```
 const tokenGenerator = function(id) {
    const Base62 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const baseSize = Base62.length;
    let tokenarray = [];
      
          while (id > 0){      
            Remainder = id % baseSize;
            tokenarray.push(Base62[Remainder]);
            id = Math.floor(id / baseSize);
          }        
     token = tokenarray.join(""); 
    
     return token;      
  }
```
#### DataBase:
NoSQL database is used for the service. 
The database Schema- <br/>
1. **longUrl:** The long URL given by the user.
2. **urlcode:** Shortened code. 
3. **shortUrl:** Short code attached with server url .
4. **attemptCount:** For counting total attempt to shorten a specific URL.
5. **visitCount:** For counting the total visit of the original URL by hitting the shortened code.







## Tools and Technologies:
### Client-Side:
1. React
2. React-Bootstrap
3. Deploy: Firebase
### Server-Side:
1. Express js
2. MongoDb 
3. RestAPI 
4. Cloud storage: Mongo Atlas
5. Deploy: Heroku
#### Installation for backend:
1. Express: ```  npm init ```   then, ``` npm install express --save ```  <br/>
2. cors: ``` npm install cors ```  <br/>
3. dotenv: ``` npm install dotenv ``` <br/>
4. mongodb: ``` npm install mongodb ``` <br/>

 



