
 /* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */


$(function() {
    
    describe('RSS Feeds', function() {
        /* Tests to make sure that the allFeeds variable has been defined and that it is not empty.*/
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* Test that ensures it has a URL defined and that the URL is not empty.*/
         it('url defined', function(){
            for(let feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
         });
         it('name defined', function(){
            for(let feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
         });




        });


        
        describe('The menu', function(){
        //let callback = jasmine.createSpy("body", "toggleClass");
        const body = document.querySelector('body');
        /* Test that ensures the menu element is hidden by default.  */
        it('is hidden', function(){
            
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

         /* Test that ensures the menu changes visibility when the menu icon is clicked.*/
        it("changes visbility when clicked", function () {
            
            const menu = document.querySelector('.menu-icon-link');
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
          /*if (callback.calls.count() % 2 === 0) {
              expect(body.classList.contains("menu-hidden")).toBe(true);
        } else {
              expect(body.classList.contains("menu-hidden")).toBe(false);
        }*/
        });

        });

        
        describe('Initial Entries', function() {



        /* Test that ensures a single .entry element within the .feed container.*/
         beforeEach(function(done){
            loadFeed(0, done);
         });
         it('contains one .entry whithin .feed', function(){
            const feed = document.querySelector('.feed');
            expect(feed.children.length > 0).toBe(true);
         });
        });

        
        describe('New Feed Selection', function() {

            let firstFeed;
            let secondFeed;
            const feed = document.querySelector('.feed');
            beforeEach(function(done) {
                loadFeed(0,function() {

                    firstFeed = feed.innerText;
                    loadFeed(1,function(){
                    done();
                });

            });
            //firstFeed = $('h1.header-title')[0].innerText;
            
        });
        /*afterEach(function(done) {
             loadFeed(1);
             //secondFeed = $('h1.header-title')[0].innerText;
             secondFeed = feed.innerText;
             done();
        });*/



        /* Test that ensures when a new feed is loaded the content actually changes. */
         it('changes content when clicked', function(done) {
            secondFeed = feed.innerText;
            expect(firstFeed).not.toEqual(secondFeed);
            done();
        });
        });
         


}());
