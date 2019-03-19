# Bello
#### Connect people via virtual notes left at locations using Google Maps API

![](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/774/833/datas/gallery.jpg)

### Inspiration: 
We wanted to capture a slice of the world and what’s happening in it, localized in the immediate area. Life is full of passing by the little things and stopping to look at everything is infeasible. With Bello, you can follow people tied to the same location through time.

### Function: 
Travel the environment and leave messages for others to find. Leave notes at popular locations or place messages in obscure locations for others to find and comment on.

### How we built it: 
This application was made using two servers, one for the Back-End using Python Flask, and one for the Front-End using React.js. The database used to store data is SQLite3. The CSS Frameworks used for styling were Semantic UI and Bulma. Axios was used to handle RESTful APIs from Front-End to Back-End. The design of leaving messages on a map was influenced by how Dark Souls leaves messages behind for future players.

### Challenges: 
We had to deal with the asynchronous behavior of JavaScript to make sure all data fetched from the back-end was consistent and fetched in time to render it on the front-end. Displaying stuff on google maps and then interacting with the DOM there was one of the biggest challenges! Our team has to learn on the fly, since we were working with the Google Maps API for the first time and most of us had yet to touch React. Creating the Bello logo took some time since it wasn’t considered until the last minute but the final product gave us a better idea of the logo design.

### What we learned: 
We found Bulma as a framework to be simple, elegant, and powerful. We also learned that Google has great documentation that explains everything very clearly. We also learned how to use the Google Maps API.

### What's next Bello: 
We want to make the webapp more accessible on mobile devices such phones and tablets. We also want to fix some issues still present with the way data is fetched.

### Built With: 
Google Maps API, Bulma, Semantic UI Icons, Flask, Python, React.js, SQLite3, CSS, HTML
