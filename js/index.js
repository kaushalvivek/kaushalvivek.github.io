/*
 * Star Wars opening crawl from 1977
 * 
 * This original version was created by Tim Pietrusky.
 *
 * An article on how it works:
 * http://timpietrusky.com/star-wars-opening-crawl-from-1977
 * 
 * Youtube link for the crawl:
 * https://www.youtube.com/watch?v=7jK-jZo6xjY
 * 
 * Stuff used:
 * - CSS (animation, transform)
 * - HTML audio (the opening theme)
 * - SVG (the Star Wars logo from wikimedia.org)
 *   http://commons.wikimedia.org/wiki/File:Star_Wars_Logo.svg
 * - JavaScript (to sync the animation/audio)
 *
 * Thanks to Craig Buckler for his amazing article 
 * http://www.sitepoint.com/css3-starwars-scrolling-text/ 
 *
 * Sound copyright by The Walt Disney Company.
 * 
 * Design copyright by Tim Pietrusky
 * timpietrusky.com
 * 
 * 
 * 2017 copyright Vivek Kaushal
 * vivekkaushal.com
 */

StarWars = (function() {

    /* 
     * Constructor
     */
    function StarWars(args) {
        // Context wrapper
        this.el = $(args.el);

        // Audio to play the opening crawl
        this.audio = this.el.find('audio').get(0);

        // Start the animation
        this.start = this.el.find('.start');

        // The animation wrapper
        this.animation = this.el.find('.animation');

        // Remove animation and shows the start screen
        this.reset();

        // Start the animation on click
        this.start.bind('click', $.proxy(function() {
            this.start.hide();
            this.audio.play();
            this.el.append(this.animation);
        }, this));

        // Reset the animation and shows the start screen
        $(this.audio).bind('ended', $.proxy(function() {
            this.audio.currentTime = 0;
            this.reset();
        }, this));
    }

    /*
     * Resets the animation and shows the start screen.
     */
    StarWars.prototype.reset = function() {
        this.start.show();
        this.cloned = this.animation.clone(true);
        this.animation.remove();
        this.animation = this.cloned;
    };

    return StarWars;
})();

new StarWars({
    el: '.starwars'
});