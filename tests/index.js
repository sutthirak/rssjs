"use strict";

describe("test parsing from xml string", function () {
    
    var rssString = '<?xml version="1.0" encoding="UTF-8" ?>'+
        '<rss version="2.0">'+
        '<channel>'+
        '<title>RSS Title</title>'+
        '<description>This is an example of an RSS feed</description>'+
        '<link>http://www.example.com/main.html</link>'+
        '<lastBuildDate>Mon, 06 Sep 2010 00:01:00 +0000 </lastBuildDate>'+
        '<pubDate>Sun, 06 Sep 2009 16:20:00 +0000</pubDate>'+
        '<ttl>1800</ttl>'+
        '<item>'+
            '<title>Example entry 1</title>'+
            '<description>Item 1 description</description>'+
            '<link>http://www.example.com/blog/post/1</link>'+
            '<guid isPermaLink="true">7bd204c6-1655-4c27-aeee-53f933c5395f</guid>'+
            '<pubDate>Sun, 06 Sep 2009 16:20:00 +0000</pubDate>'+
        '</item>'+
        '<item>'+
            '<title>Example entry 2</title>'+
            '<description>Item 2 description</description>'+
            '<link>http://www.example.com/blog/post/2</link>'+
            '<guid isPermaLink="true">7bd204c6-1655-4c27-aeee-53f933c5395g</guid>'+
            '<pubDate>Sun, 06 Sep 2009 16:20:00 +0000</pubDate>'+
        '</item>'+
        '</channel>'+
        '</rss>';
    
    var response = rssjs.parse(rssString);
    
    it('it should retrun correct title', function() {        
        expect(response.title).toBe('RSS Title');
    });
    
    it('it should retrun correct description', function() {        
        expect(response.description).toBe('This is an example of an RSS feed');
    });
    
    it('it should retrun correct link', function() {        
        expect(response.link).toBe('http://www.example.com/main.html');
    });
    
    it('it should retrun correct lastBuildDate', function() {        
        expect(response.lastBuildDate).toBe('Mon, 06 Sep 2010 00:01:00 +0000 ');
    });
    
    it('it should retrun correct pubDate', function() {        
        expect(response.pubDate).toBe('Sun, 06 Sep 2009 16:20:00 +0000');
    });
    
    it('it should retrun correct ttl', function() {        
        expect(response.ttl).toBe('1800');
    });
    
    it('it should retrun correct item size and value', function() {        
        expect(response.items.length).toBe(2);
        expect(response.items[0].title).toBe('Example entry 1');
        expect(response.items[1].title).toBe('Example entry 2');
        expect(response.items[0].description).toBe('Item 1 description');
        expect(response.items[1].description).toBe('Item 2 description');
        expect(response.items[0].link).toBe('http://www.example.com/blog/post/1');
        expect(response.items[1].link).toBe('http://www.example.com/blog/post/2');
        expect(response.items[0].guid).toBe('7bd204c6-1655-4c27-aeee-53f933c5395f');
        expect(response.items[1].guid).toBe('7bd204c6-1655-4c27-aeee-53f933c5395g');
        expect(response.items[0].pubDate).toBe('Sun, 06 Sep 2009 16:20:00 +0000');
        expect(response.items[1].pubDate).toBe('Sun, 06 Sep 2009 16:20:00 +0000');
    });
    
});