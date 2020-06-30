

## CitiEscape



**This website is to provide users options and ideas about where to take short city breaks once leisure travel has been restored and to provide locations closer to home for people based in Ireland**

  
  [Live Site](#)
  [Repository](https://github.com/TheBigBushman/milestone-2)



## UX







  

## User Stories



> David Doe is an entrepreneur from Ireland who loves to travel and has been stuck at home due to the current COVID situation. He wanted a platform to be able to share with his family, friends and locals of Ireland the best and closest city breaks that people could take once travel resumes. In the future he will look at affiliate marketing but for now he wants to provide a light resource to attract potential customers who can then search for flights and get some inspiration.
> 
>**Joe Doe is an 18 year old fresh out of school student who is looking at possible options to travel around Europe once the restrictions are lifted. He has very little knowledge of the world but has a keen interest in other cultures. He does not want to venture to far from home on his first couple of trips and is looking for a resource that he feels would point him in the right direction.**
>
> Johan Doe is a recent college graduate and is currently looking for somewhere romantic to propose to his partner of the last 4 years. He wants to do it abroad and wants to be able to see his options in a nicely coordinated list. He wants this to be special for his partner but also with the recent pandemic he will want it to be somewhere safe that would not detract from the special moment. 
  



## Wireframes



Wireframes created with Balsamiq. Project was developed from initial wireframes however changes were made to the final project outcome. Wireframe located in <i>assets/img/wireframes/Emily7-milestone-wireframe.pdf</i> and you can find them [HERE](#).

  



## Features



  

**Home Page**

Navigation bar with logo font to the left followed by 4 options: Home, Flights, Contact & Map.

 - **Hero Section** - Background scrolling parallax Image is a nice city view of a typical Paris street from an elevated position. I have covered this with a background overlay and set the opacity to a more aesthetically pleasing look as the font and background lighting effected other HTML content. 
 - Within the hero section is a Skyscanner Widget  taken from [SkyScanner.com](www.skycanner.com). The original scope was to implement a SkyScanner API but my request for these permissions was denied. I was then directed to implement the widget instead and for the aesthetic and concept I proceeded. The original widget contained Flights. Hotel & Car rental but I customized it to suit the clients needs and just display flights & hotel. I have changed the font color and on buttons to match my color theme for continuity.
 - **Card Section** - Added a card section that was intended to host my random city generator that when a user clicks the option it would take them down to a random city. Unfortunately due to time constraints and issues with JS I was unable to implement. This section is now a slow slide to effect to my city tiles below.
 - Parallax 2 - Sliding parallax with a background of Nyhavn in Copenhagen to break up the content.
 - **Top City Destinations** - Here I have created a grid of city tiles that display as they intersect in the view port. As the user scrolls down they fade in and as the user scrolls up they fade out. The smooth roll affect had was non functioning to begin with and I found a resource on Stack Overflow of a person who had a similar issue [here](https://stackoverflow.com/questions/18071046/smooth-scroll-to-specific-div-on-click/18071231). This pointed me in the right direction of how to apply this effect. Another effect I struggled with was the infinity load / lazy loading. I had created a separate repository to practice this and try to prefect what I needed but I struggled with one or two aspects of it. After toying with the concept on and off for over a week I decided to settle with a fade in on scroll option that simulated content loading on scroll but not originally what I had planned. I found a query on stack overflow to be extremely helpful in creating refining my attempt and it helped me progress past the speed bump I was dealing with. This can be seen [ here](https://stackoverflow.com/questions/26694385/fade-in-on-scroll-down-fade-out-on-scroll-up-based-on-element-position-in-win).
 - **Map** - Googlemap API that displays the above city tiles as markers centering over central Europe. This section houses the main content of what each city break has to offer. These cities have a header, brief summary taken from [Wikipedia](https://www.wikipedia.org/) and a link that takes the user to the respective cities tourism page.
 - **Footer** - Footer element contains links to external resources and links on the page.

  
**Contact**

 - Contact form created using [emailJS](https://www.emailjs.com/) and [Bootstrap](https://getbootstrap.com/). Collects relevant information from the user and sends the details to my Gmail e-mail address. Information comes through and is formatted correctly which is done on the emailJs side.  I have added a basic alert that lets the user know an e-mail was sent and the form resets.
 - The contact page was created in a way that when the user clicks contact from the nav bar that the only difference that appears in the viewport should be the changing of the skyscanner widget and the contact from.


**Socials**

The Owner wants to grow his brand from the ground up and is using targeted ads to bring customers to his website.

  



## Features Left to Implement


  

 - Getting approved from SkyScanner APi to be able to monetise the traffic sent to it via affiliate marketing
 - Adding in a blog page for the merchant to be able to write his travel tips and write ups
 - A section for users to log in and upload their photos and tips in a user forum gallery
 - Replace the fade in fade out animation with an lazy load feature that pulls from a JSON file. 
 - Create a feature for hotel of the month and link in booking.com api to increase affiliate marketing revenue through that platform
 - Create a top travel gadgets section that would be a sliding carousel on the page that would give a brief description and then if the user commits to purchase it will redirect them to [ amazon](amazon.co.uk) to complete purchase. This will also be part of the amazon affiliate network. 
 - Update the maps api and add in content about the city's once a marker is clicked. 
 - Ideally have a slide down / flip card animation showing the current weather, average cost and random fact about each city tile.

## Technologies Used

**

**HTML**

>Basic structure for a web site

**CSS**

>Required to style my HTML and images and 

**[Balsamiq](https://balsamiq.com/)**

>Used to develop wireframes and I am extremely grateful for the licence to use this product for the rest of this year. .

**[Bootstrap](https://getbootstrap.com/)**

>Provided useful components and layout features to create this website. Extremely powerful box grid system for developing websites with a responsive design.

**[Unsplash](https://www.unsplash.com/)**

>A host of free photos used in this project from the hero image to the city tiles.


**[w3Schools](https://www.w3schools.com/)**

>Amazing library of full web framework components to pull from and assisted with understanding the structure of certain elements. Focused a lot on Jquery, JS, AJAX and some bootstrap / CSS elements.

**[Git](https://git-scm.com/) / [GitHub](https://github.com/)**

>Used for version control and storing and deploying website once complete.

**[Font Awesome](https://fontawesome.com/)**

>Used this for icons and favicons for the likes of socials

**[Animista](https://animista.net/)**



**[Google Fonts](https://fonts.google.com/)**

>Used google fonts to pick appropriate fonts travel site

**[Jquery](https://jquery.com/)**

>Used Jquery to help with the manipulation of the website and to bring other effects to life. 

**[Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**

>Used to create functionality and interactivity on my site and to implement API's


## Testing

**

**Testing phase 1**


**Testing Phase 2**


**

**Testing Phase 3**

**
Tested each individual webpage on https://validator.w3.org/ 
 

**

**Testing Phase 4**

**


Follow on testing from GTmetrix.com showed the page has a speed score of A (92%), A fully load time of 1.6seconds. Test server location: Vancouver, Canada using chrome.



  
|Scenario|--------------------------------------------------------------------------------------------|Result|




## **Bugs**

> Throughout development I encountered issues with how the city tiles were rendering. They were wrapping and not displaying in line with bootstrap grid. I updated the grid system completely and this seemed to fix the issue

>The contact form was submitting and sending an e-mail but the content was all undefined. I had amended the fields in emailJS and did not realize. Once this was checked my emails were coming through with the correct content. 

>When emails were being sent via the contact form it was not resetting nor was it notifying. I inserted an alert on success and a reset function to clear the form. 

> Currently have issues with how the city name presents on the city tiles. It is not fixed but seems to slide between break points. On each size screen it seems to render fine but as you progress through them you can see the city name sliding out of center. 

> Issue with google-map not showing data. Found the original issue to be an incorrect path. 


## Deployment


To deploy the project I followed these steps:

 - From within the main Repo
   [Here](https://github.com/TheBigBushman/emily7-MS1) I clicked on the
   settings button on the right hand side.
 - I then Scrolled down to Github Pages and selected master branch as a
   source.
 - This page is now deployed to [here](https://thebigbushman.github.io/emily7-MS1/index.html)
  
 - If i make any new changes to this repo it will automatically update
   on Github Pages

  

**

## Credits

**

[**Codepen.io**](codepen.io)

>Viewed some websites for inspiration as to what to build and how to implement them.

**Nishant Kumar (Mentor)**
>Nishant again has had amazing faith and provided excellent guidance. I am extremely grateful for his feedback and guidance throughout this project.

**[Academind](https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w)**
>A fantastic resource and videos explaining map API's and other JS / Jquery content. 

**[Code Institute](https://codeinstitute.net/)** 
>Amazing course, has provided me with clear direction in everything I have created so far. The trainers explain things in a great way and provide great resources to be able to further learn.

**[Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)**
>Excellent resources and how to guides on API's and map options.

**[Steve Griffith](https://www.youtube.com/channel/UCTBGXCJHORQjivtgtMsmkAQ)**
>Steve has many intros that I have watched just to understand things from a different point of view and to see how someone else approaches the logic. I really benefited from watching these and would have struggled with some concept ideas without them.

**[Stack Overflow](https://stackoverflow.com/)**
>I frequently used stack overflow as a lot of my errors throughout this development were questions and problems others have faced in the past. Any JS error that came up was once upon a time a question someone had on stack overflow and I found it an invaluable resource in understanding JS logic. Although the members do not provide straight answers, they give you some guidance in how you should approach the problem...Sometimes. 

## Content

**

 [**Lorem Ipsum**](https://www.lipsum.com/)
>The Dummy text used on the website primarily on about.html is from.
A really useful resource for adding in authentic looking language to give the impression of a functioning web page. 

[**Unsplash**](https://www.unsplash.com/search/concert/)
>All images from this site were taken from unsplash, a free open source site for sharing images.



## Acknowledgements

**
Code Institute
Nishant Kumar
Unsplash
Traversy Media
Bootstrap Library
Steve Griffith
