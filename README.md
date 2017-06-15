# Scribo
###### I Write
<img src="http://i.imgur.com/TF0ILTg.png" title="source: imgur.com" />

### Screenshot

### Links

### About
Scribo is a judgement free platform that connects aspiring writers with other writers and bibliophiles that want to read a story. Writers can use this app to get advice from other writers on the message board, get random writing prompts, post their stories and sell their stories in the BookStore. Anyone can read a story or create a story, but only logged in users can create, update and delete posts tied to their account.

### Wireframes
<img src="http://i.imgur.com/j2MBNo3.png" title="source: imgur.com" />
Home: Carousel slideshow that displays highlighted stories and writers

<img src="http://i.imgur.com/LeLGCsN.png" title="source: imgur.com" />
Stories: Search the will render results according to genre, name, post date, or author.

<img src="http://i.imgur.com/8twHiYv.png" title="source: imgur.com" />
FAQ: Frequently asked questions, answered by the admin

<img src="http://i.imgur.com/lVUZCxe.png" title="source: imgur.com" />
Login: User login page; user has ability to log into existing account or sign up to create an account

<img src="http://i.imgur.com/PyoJNH9.png" title="source: imgur.com" />
Contact: Form that sends user input to the Scribo admin email upon form submission 

<img src="http://i.imgur.com/uz5zCTa.png" title="source: imgur.com" />
Message Board: Users interact with eachother through various topics; standard message board

<img src="http://i.imgur.com/vJ1YD2P.png" title="source: imgur.com" />
Store: Sell ebooks and physical copies of authors merchandise 

### Psuedocode
Home Page

```
- Use bootstrap jumbotron to spotlight stories and writers
- Jumbtron will have automatic carasel slideshow to display the featured stories and writers

Header: 
- Build out header navbar to link to stories, inspiration, chat, login and store page
- Contain (quick) search field that will capture user search query and return the desired result
- Onclick event will happen if user selects the returned result, which will bring the user to the result page
- Header will remain consistent on all other pages

Footer:
- But out footer navbar that will link to contact, FAQ and Scribo social media 
- Footer will remain consistent on all othe rpages
```
Stories Page

```
- Contain (advanced) search field that will allow users to filter results by genre, post date or author
- Search field will capture user search query and return the desired result
- Onclick event will happen if user selects the returned result, which will bring the user to the result page
- Render stories from database to display on page
```

Inspiration Page

```
- Call to api to make get request for writing prompts
- Make function that will randomize writing prompts then render writing prompts in div on page
- Below writing prompts render inspirational articles
- Add crud functionality to articles 
```
Chat Page

```
- Use gem that will provide blueprint for message board
- Have users be able to post questions and answer questions
- Posts will have full crud
```

FAQ Page

```
- Render list of frequently asked questions
- Render unqiue answer that goes along with unique question
- Answers appear on toggle when question is clicked 
```
Contact Page

```
- Render form that includes username, email and message input
- Upon submit, form will generate email to Scribo admins that is comprised of values taken from user input
```

Store Page

```
- Use gem that will provide blueprint for store
- Render various items that the authors are selling
- Allow store items to be filtered by price, item type and book format
```

Login Page

```
- Display div that has a button for logging in and a button for signing up
- Upon click of specific button either login form or signup form will be toggled down 
```

### User Stories
- As a user, I want a professionally well designed, interactive website, to appeal to my visual aesthetics.
- As a user, I want to be able to edit my profile because customizations makes websites more engaging.
- As a user, I want to be able to search for stories, so I can discover new stories or find existing ones.
- As a user, I want the option of creating, editing or deleting my stories, so that my posting experience is elevated.
- As a user, I want a functional message board, so that I can connect and interact with others. 
 
### ERD

### Hurdles

### Approach Taken

### MVP
- Search feature by genre, author, post date, etc.
- Random prompt generator
- Jumbotron on homepage with spotlighted writers, stories and prompts campaign
- Login Authentication
- Shopping Cart/ Bookstore 
- CRUD for stories
- Mobile responsive

### Beyond MVP
- Ability to share stories on social media
- Message board 
- Authentication using social media 
- User profiles for authentication
- Feature to display random stories like Google feeling lucky feature

### Techonologies Used
- Ruby on Rails
- Devise 
- PostgreSQL
- Bootstrap
- Spree
- HTML/CSS/JavaScript
- Thredded

### Installation Instructions
1. Download the repo zip file or ```git clone``` this repo in terminal.
2. To make sure you have the latest version run ```gem update rails```. If you don't have rails installed at all run ```gem install rails``` in terminal.
3. Run ```bundle install``` command to make sure all gems are successfully installed.
4. Open server using ```rails server``` or rails server -p *port name* for example ```rails server -p 3001```

