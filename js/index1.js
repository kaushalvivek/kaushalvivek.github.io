// 'use strict';

// function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// var max_particles = 1000;

// var tela = document.createElement('canvas');
// tela.width = $(window).width();
// tela.height = $(window).height();
// $("body").append(tela);

// var canvas = tela.getContext('2d');

// var Particle = function () {
//   function Particle(canvas, progress) {
//     _classCallCheck(this, Particle);

//     var random = Math.random();
//     this.progress = 0;
//     this.canvas = canvas;

//     this.x = $(window).width() / 2 + (Math.random() * 200 - Math.random() * 200);
//     this.y = $(window).height() / 2 + (Math.random() * 200 - Math.random() * 200);
//     this.s = Math.random() * 1;
//     this.a = 0;
//     this.w = $(window).width();
//     this.h = $(window).height();
//     this.radius = random > .2 ? Math.random() * 1 : Math.random() * 3;
//     this.color = random > .2 ? "#2E4765" : "#b5ff00";
//     this.radius = random > .8 ? Math.random() * 2 : this.radius;
//     this.color = random > .8 ? "#2E4765" : this.color;

//     // this.color  = random > .1 ? "#ffae00" : "#f0ff00" // Alien
//     this.variantx1 = Math.random() * 300;
//     this.variantx2 = Math.random() * 400;
//     this.varianty1 = Math.random() * 100;
//     this.varianty2 = Math.random() * 120;
//   }

//   Particle.prototype.render = function render() {
//     this.canvas.beginPath();
//     this.canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
//     this.canvas.lineWidth = 2;
//     this.canvas.fillStyle = this.color;
//     this.canvas.fill();
//     this.canvas.closePath();
//   };

//   Particle.prototype.move = function move() {
//     this.x += Math.cos(this.a) * this.s;
//     this.y += Math.sin(this.a) * this.s;
//     this.a += Math.random() * 0.8 - 0.4;

//     if (this.x < 0 || this.x > this.w - this.radius) {
//       return false;
//     }

//     if (this.y < 0 || this.y > this.h - this.radius) {
//       return false;
//     }
//     this.render();
//     this.progress++;
//     return true;
//   };

//   return Particle;
// }();

// var particles = [];
// var init_num = popolate(max_particles);
// function popolate(num) {
//   for (var i = 0; i < num; i++) {
//     setTimeout(function () {
//       particles.push(new Particle(canvas, i));
//     }.bind(this), i * 20);
//   }
//   return particles.length;
// }

// function clear() {
//   canvas.globalAlpha = 0.05;
//   canvas.fillStyle = '#000155';
//   canvas.fillStyle = '#000021'; // Alien
//   canvas.fillRect(0, 0, tela.width, tela.height);
//   canvas.globalAlpha = 1;
// }

// function update() {
//   particles = particles.filter(function (p) {
//     return p.move();
//   });
//   if (particles.length < init_num) {
//     popolate(1);
//   }
//   clear();
//   requestAnimationFrame(update.bind(this));
// }
// update();




// #### The second alternative



// // Initial Setup
// const canvas = document.querySelector('canvas');
// const c = canvas.getContext('2d');

// canvas.width = innerWidth;
// canvas.height = innerHeight;


// // Variables
// let mouse = {
//     x: innerWidth / 2,
//     y: innerHeight / 2
// };

// const colors = [
//     '#2185C5',
//     '#7ECEFD',
//     '#FFF6E5',
//     '#FF7F66'
// ];


// // Event Listeners
// addEventListener('mousemove', function(event) {
//     mouse.x = event.clientX;
//     mouse.y = event.clientY;
// });

// addEventListener('resize', function() {
//     canvas.width = innerWidth;
//     canvas.height = innerHeight;

//     init();
// });


// // Utility Functions
// function randomIntFromRange(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function randomColor(colors) {
//     return colors[Math.floor(Math.random() * colors.length)];
// }


// // Objects
// function Particle(x, y, dx, dy, radius, color) {
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = -dy;
//     this.radius = 5;
//     this.color = color;
//     this.timeToLive = 2;
//     this.opacity = 1;
//     this.r = 10;
//     this.g = 10;
//     this.b = randomIntFromRange(150, 250);

//     this.update = function() {
//         if (this.y + this.radius + this.dy > canvas.height) {
//             this.dy = -this.dy;
//         }

//         if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius + this.dx < 0) {
//             this.dx = -this.dx;
//         }
//         // this.dy += gravity * this.mass;
//         this.x += Math.random() > 0.5 ? dx : -dx;
//         this.y += Math.random() > 0.5 ? dy : -dy;
//         this.draw();


//         this.timeToLive -= 0.01;
//     };

//     this.draw = function() {
//         this.opacity = this.timeToLive / 1;

//         c.save();
//         c.beginPath();
//         c.arc(this.x, this.y, 2, 0, Math.PI * 2, false);
//         c.fillStyle = 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.opacity.toFixed(2) + ')';
//         c.fill();

//         c.closePath();

//         c.restore();
//     };
// }

// function Mortar(x, y, dx, dy, radius, color) {
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.radius = radius;
//     this.color = color;
//     this.triggered = false;
//     this.explosion;
//     this.waveOffset = randomIntFromRange(1, 2);

//     this.update = delta => {
//         this.draw();
//         this.ttl -= 1;

//         this.dy += 0.11;
//         this.x += this.dx * Math.sin(delta) * this.waveOffset;
//         this.y += this.dy;

//         if (this.dy > 0) {
//             this.triggered = true;
//         }
//     };

//     this.draw = function() {
//         c.beginPath();
//         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//         c.fillStyle = this.color;
//         c.fill();
//         c.closePath();
//     };

//     this.explode = function(callback) {
//         // Create explosion... if particle count == 0, call callback
//         if (typeof this.explosion == 'undefined') {
//             this.explosion = new Explosion(this);
//             this.radius = 0;
//         }
//         this.explosion.update();

//         if (this.explosion.particles.length <= 0) {
//             callback();
//         }
//     };
// }

// function Explosion(source) {
//     this.particles = [];
//     this.rings = [];
//     this.source = source;

//     this.init = function() {
//         for (var i = 0; i < 12; i++) {
//             const v = 7;
//             var dx = v;
//             var dy = v;

//             // var hue = (255 / 5) * i;
//             // var color = "hsl(" + hue + ", 100%, 50%)";
//             this.particles.push(new Particle(this.source.x, this.source.y, dx, dy, 1, 'blue'));
//         }
//     };

//     this.init();

//     this.update = function() {
//         for (var i = 0; i < this.particles.length; i++) {
//             this.particles[i].update();

//             // Remove particles from scene one time to live is up
//             if (this.particles[i].timeToLive < 0) {
//                 this.particles.splice(i, 1);
//             }
//         }
//     };
// }

// // Implementation
// let mortars = [];

// function init() {}

// // Animation Loop
// let elapsed = 0;
// let randomInterval = randomIntFromRange(80, 170);

// function animate() {
//     requestAnimationFrame(animate);
//     c.fillStyle = 'rgba(0,0,0, 0.02)';
//     c.fillRect(0, 0, canvas.width, canvas.height);

//     for (let i = 0; i < mortars.length; i++) {
//         mortars[i].update(elapsed);

//         if (mortars[i].triggered === true) {
//             mortars[i].explode(() => {
//                 mortars.splice(i, 1);
//             });
//         }
//     }

//     if (elapsed % randomInterval == 0) {
//         const x = randomIntFromRange(10, canvas.width - 10);
//         const dy = randomIntFromRange(-5, -10);
//         mortars.push(new Mortar(x, canvas.height, 2, dy, 3, 'blue'));
//         randomInterval = randomIntFromRange(50, 100);
//     }

//     elapsed += 1;
// }

// init();
// animate();



// The Third one



/*
 * Star Wars opening crawl from 1977
 * 
 * I freaking love Star Wars, but could not find
 * a web version of the original opening crawl from 1977.
 * So I created this one.
 *
 * I wrote an article where I explain how this works:
 * http://timpietrusky.com/star-wars-opening-crawl-from-1977
 * 
 * Watch the Start Wars opening crawl on YouTube.
 * https://www.youtube.com/watch?v=7jK-jZo6xjY
 * 
 * Stuff I used:
 * - CSS (animation, transform)
 * - HTML audio (the opening theme)
 * - SVG (the Star Wars logo from wikimedia.org)
 *   http://commons.wikimedia.org/wiki/File:Star_Wars_Logo.svg
 * - JavaScript (to sync the animation/audio)
 *
 * Thanks to Craig Buckler for his amazing article 
 * which helped me to create this remake of the Star Wars opening crawl. 
 * http://www.sitepoint.com/css3-starwars-scrolling-text/ 
 *
 * Sound copyright by The Walt Disney Company.
 * 
 *
 * 2013 by Tim Pietrusky
 * timpietrusky.com
 * 
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