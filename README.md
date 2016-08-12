# [Skeleton-Styl](http://getskeleton.com)

Skeleton-Styl is the (un)official Stylus version of [Dave Gamache's](https://twitter.com/dhg) Skeleton Framework. It currently featues a stable version of Skeleton 2.0.4

-----

Skeleton is a simple, responsive boilerplate to kickstart any responsive project.

Check out <http://getskeleton.com> for documentation and details.

## Getting started

### Install Global Dependancies
  
  * [Node.js](http://nodejs.org)
  * [bower](http://bower.io): `[sudo] npm install bower -g`
  * [grunt.js](http://gruntjs.com): `[sudo] npm install -g grunt-cli`

### Install Local Dependancies
  * [Download zip](https://github.com/mamboer/Skeleton-Styl/archive/master.zip), [clone the repo](github-mac://openRepo/https://github.com/mamboer/Skeleton-Styl) or `bower install skeleton-styl` from your terminal
  * cd to project folder
  * run `[sudo] npm install` (first time users)
  * run `gulp` (to watch and compile stylus files)

### What's in the download?

The download includes Skeleton's source files and distribution files, ~~ a sample favicon, and an index.html as a starting point.

```
skeleton/
├── index.html
├── src/
│   └── skeleton.styl
├── dist/
│   └── skeleton.css
│   └── skeleton.lite.css
├── images/
│   └── favicon.png
├── package.json
├── gulpfile.js
└── README.md

```

> PLS, `skeleton.css` embeds normalize.css as its reset while `skeleton.lite.css` is a lite version without normalize.css.

### Contributions
The goal of Skeleton-Styl is to have a mirrored Stylus repository of Skeleton. In order to keep the integrity of the original Skeleton framework, I cannot accept any features or functionality outside the original implementation of [Dave Gamache's](https://twitter.com/dhg) [Skeleton Framework](https://github.com/dhg/Skeleton). If you would like to see features, functionality, or extensions outside of the original please make a PR / or issue on the original skeleton framework.

If you have stylus improvements, additional mixins, or other helpful stylus techniques that stay within the original codebase. Feel free to make a pull request!

### Why it's awesome

Skeleton is lightweight and simple. It styles only raw HTML elements (with a few exceptions) and provides a responsive grid. Nothing more.
- Minified, it's less than a kb
- It's a starting point, not a UI framework
- ~~No compiling or installing...just vanilla CSS~~


## Browser support

- Chrome latest
- Firefox latest
- Opera latest
- Safari latest
- IE latest

The above list is non-exhaustive. Skeleton works perfectly with almost all older versions of the browsers above, though IE certainly has large degradation prior to IE9.


## License

All parts of Skeleton-Styl are free to use and abuse under the [open-source MIT license](http://opensource.org/licenses/mit-license.php).


## Colophon

Skeleton was built using [Sublime Text 3](http://www.sublimetext.com/3) and designed with [Sketch](http://bohemiancoding.com/sketch). The typeface [Raleway](http://www.google.com/fonts/specimen/Raleway) was created by [Matt McInerney](http://matt.cc/) and [Pablo Impallari](http://www.impallari.com/). Code highlighting by Google's [Prettify library](https://code.google.com/p/google-code-prettify/). Icons in the header of the documentation are all derivative work of icons from [The Noun Project](thenounproject.com). [Feather](http://thenounproject.com/term/feather/22073) by Zach VanDeHey, [Pen](http://thenounproject.com/term/pen/21163) (with cap) by Ed Harrison, [Pen](http://thenounproject.com/term/pen/32847) (with clicker) by Matthew Hall, and [Watch](http://thenounproject.com/term/watch/48015) by Julien Deveaux.


## Acknowledgement

Skeleton was created by [Dave Gamache](https://twitter.com/dhg) for a better web.

Skeleton-Styl was created by [LV](http://faso.me) for a better Skeleton.

