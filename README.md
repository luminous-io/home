# Luminous!
More info coming soon!


## Running the site
1. Run ``npm install``
2. Run ``grunt web``

## Grunt tasks

``grunt``: the default tasks, just runs jshint.

``grunt build``: runs jshint, concats the js files, and uglifies them.

``grunt web``: does ``grunt build``, and then launches a local web server to run the site. It then continuously monitors for changes to the js files.
