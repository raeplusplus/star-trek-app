# Federation Field Guide To Aliens
A field guide database to various star trek aliens 

**Link to project:** https://federationfieldguide.netlify.app/

![alt tag](https://github.com/raeplusplus/star-trek-app/blob/main/star-trek-app.gif)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js, Express.js, MongoDB

I started off by building the API separately, then created this client side repo. When you type in an alien name and click 'Get Info', it responds with the alien's data from my MongoDB database.

## Optimizations

Updated the data source from a class in the javascript server file and the data is now hosted in a MongoDB collection. Refactored code to request the data from MongoDB database instead of from my API's javascript. This way is much faster and allows for more flexibility when adding in new documents.

## Lessons Learned:

After working on this project for a few hours, I was nearly done and couldn't figure out why my requests weren't working. I double checked that everything had the correct spelling and syntax in my code about ten times and couldn't find the error. The next morning, I realized that my code was looking for 'name' instead of 'speciesName' in my database. Once I fixed that, everything worked perfectly! 

## Examples:
Take a look at these couple examples that I have in my own portfolio:


**Yggdrasil:** https://github.com/raeplusplus/Yggdrasil

**EA Internship - Vaxman Game:** https://github.com/raeplusplus/ea-vaxman-py



