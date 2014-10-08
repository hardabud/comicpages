**Comic viewer**

Single page [angular](https://angularjs.org) application to show comics working in all screen sizes thanks to [bootstrap](http://getbootstrap.com). 

**How to use it for your comics**

1. Clone this repo
2. Number your pages and replace those in the image folder
3. Call your cover page "cover.png" and put it in the same folder
4. Verify that the file format of your images (.jpg .png ...) corresponds to line 4 in partials/comic-page.html and partials/index-page.html
5. In js/routes.js (line 12) change 26 for the number of your pages plus one. I have 25 pages. Clicking next on the last page takes you back to the cover page
6. Change style in style.css


