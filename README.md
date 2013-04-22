requirejs-multipage-template-with-backbone-access
=================================================

A starter template for people hoping to leverage require.js / r.js across multiple pages while having a) access to backbone / other js libraries if they need it and b) the option to add page specific javascript to pages without the need for a backbone router and without having to load everything through require even if it's not being used.  You should have a max 3 js files loading one any page if this is done right.

This is NOT a template for a backbone driven app.  It's for a website that wants to use requirejs to manage/compile JS and occasionally use backbone on, say, an agenda page.  

Things of Note
--------------

run $ compass watch in the /dev/styles/ folder to use/compile .scss files.

run sh build.sh from /dev/build/ to compile everything into the /dist/ directory.

make sure you add any additional page specific js to the module section of /build/app.build.js so r.js to trace dependencies in those files as well.

The site structure looks like this:
-----------------------------------

Homepage >> loads require >> loads common >>> loads app/home  
Backbone >> loads require >> loads common >>> loads app/backbone which pulls in the jquery, backbone and underscore definitions from common  
Static >> loads require >> loads common through data-main attr  
Animation >> loads require >> loads common >> loads app/animation which pulls in jquery, TweenCSS, and TweenLite definitions from common  