/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', () => {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // this test loops through allFeeds object and ensure that it has a URL 
        // that is defined and not empty
        it('each feed URL is defined and not empty', () => {
             allFeeds.forEach(feed => {
                 const feedUrl = feed.url;
                 expect(feedUrl).toBeDefined();
                 expect(feedUrl.length).not.toBe(0);
             });
         });
         //this test ensures that every feed has a name 
         // And ensures that the name is not empty
         it('each feed has a name defined and not empty', () => {
             allFeeds.forEach(feed => {
                 feedName = feed.name;
                 expect(feedName).toBeDefined();
                 expect(feedName.length).not.toBe(0);
             });
         });
    });
    // A new test suite 'The menue'
    describe('The menu', () => {
        // this test is to ensure that the menue is hidden by default
        it('The menue is hidden', () => {
            expect(document.body.classList.contains('menu-hidden')).toBe(true)
        });
        // this test ensures that the menue changes visibility when clicked
        // we need top test if the class 'menu-hidden' toggled when click the icon
        it('menue change visibility when clicked', () => {
           // the icon to be clicked
           const menu = document.querySelector('.menu-icon-link');
           // click the icon and click it again and test existence of the class 'menu-hidden'
           menu.click();
           // if not exist test pass
           expect(document.body.classList.contains('menu-hidden')).toBe(false);
           //click it again and test existence of the class 'menu-hidden'
           menu.click();
           // if  exist test pass
           expect(document.body.classList.contains('menu-hidden')).toBe(true);

        });
    });
    // A new test 'Initial Entries'
    describe('Initial Entries', () => {
        // loadFeed is asynchronus function 
        beforeEach(done => loadFeed(0, done));
        //checking if at least a single .entery element present in .feed container
        it('.feed contains .entry', () => {
            //if container with class '.feed' has at least one child test will pass
            expect((document.querySelector('.feed')).firstElementChild).toBeDefined();
        });
    });
    // A new test suite 'New Feed Selection'
   describe('New Feed Selection', () => {
        let prevFeed;
        /* loadFeed is asynchronus function
         we need to make sure that content changes after it works and load a new feed*/
        beforeEach(done => {
            // the previous one
            loadFeed(0, done);
            // the previous feed content
            prevFeed = document.querySelector('.feed').innerHTML;
            // the new feed loaded
            loadFeed(1, done);          
        });
        // the new feed content
        let newFeed = document.querySelector('.feed').innerHTML;    
        // checking if the content actually changes when a new feed loaded
        it('the new feed is different from the previous one', () => {
            expect(newFeed).not.toEqual(prevFeed);
        });
    }); 
}());
