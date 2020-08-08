/* This file contains refrences to vendor libraries
we're using in ths project. This is used by webpack
in the production build only*. A separate bundle for vendor
code is useful as it is unlikely to change as often
as the application code. So all the libraries we reference
here will be written to vendor.js so they can be
cached until one of them change. So basically, this avoids
customers having to download the huge JS file anytime a line
of code changes. They only have to download vendor.js when a
a vendor library changes which should be less than frequent.
Any files that arent refrenced here will be bundled into
main.js for the production build.
*/

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';
