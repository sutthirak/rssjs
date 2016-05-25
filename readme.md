RSSJS
=====

Javascript framework for parsing RSS document

#Using

You can use it by passing string of RSS document content to function. 
RSSJS will return result as JSON.

```javascript
var rss = rssjs.parse(rssString);

//access title of rss document.
console.log(rss.title);

//print list of item
for(var i in rss.items){
    console.log(rss.items[i].title);
} 

```
