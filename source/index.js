var rssjs = new Object();

rssjs.parse = function (rss) {
                   
    function _getNodeValue(element){
        var node = element.childNodes[0];
        return node.nodeValue;
    }
    
    function _getValueByTagName(doc,tag){
        var value = undefined;
        if(doc.getElementsByTagName(tag).length > 0){
             value = _getNodeValue(doc.getElementsByTagName(tag)[0]);
        }
        return value;
    }
    
    function _getItemElement(doc){
        return doc.getElementsByTagName("item");
    }
    
    var response = new Object();
    
    try {
        var parser = new DOMParser();
        var doc = parser.parseFromString(rss, "application/xml");
        
        response.title = _getValueByTagName(doc,"title");
        response.description = _getValueByTagName(doc,"description");
        response.link = _getValueByTagName(doc,"link");
        response.lastBuildDate = _getValueByTagName(doc,"lastBuildDate");
        response.pubDate = _getValueByTagName(doc,"pubDate");
        response.ttl = _getValueByTagName(doc,"ttl");                         
        
        response.items = [];
        var items = _getItemElement(doc);
        for(var i = 0; i < items.length;i++){
            var item = new Object();
            item.title = _getValueByTagName(items[i],"title");
            item.description = _getValueByTagName(items[i],"description");
            item.link = _getValueByTagName(items[i],"link");
            item.guid = _getValueByTagName(items[i],"guid");
            item.pubDate = _getValueByTagName(items[i],"pubDate");
            response.items.push(item);
        }
         
    }catch(ex){
        console.error(ex);
    }
    
    return response;
      
}