# Feed Reader Testing

## project overview

In this project Jasmine is used to test the functionality of a feed reader and ensure it has no issues, some tests are written agains an existing application and checking the functionality of some components of this application


## Tests included

#### Rss Feeds
* Testing allFeeds variable and making sure it is defined and not empty
* Testing each feed and making sure that each one has a url and this url is not empty
* ensuring that each feed has a name and this name is not empty string

#### The menue
* ensuring the menue is hidden by default
* ensuring the menue change visibility when clicked

#### Initial Entries
* checking if .feed container contains at least one entry

#### New Feed Selection
* ensuring that the content changes when a new feed is loaded

## Installation

clone the project by this command ``` $ git clone 'https://github.com/saher-elgendy/Udacity-feed-reader-testing'```.

Load index.html using your browser and check  all 7 specs.

You can check all tests by loading the file ```jasmine/spec/feedreader.js``` into your text editor.


