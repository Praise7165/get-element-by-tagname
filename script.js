'use strict';

// The document.getElementsByTagName method returns all child elements with a given tag name. Implement your own version of this as a function that takes a node and a string (the tag name) as arguments and returns an array containing all descendant element nodes with the given tag name.

// To find the tag name of an element, use its nodeName property. But note that this will return the tag name in all uppercase. Use the toLowerCase or toUpperCase string methods to compensate for this.





console.log(document.body.childNodes);
console.log(document.body.childElementCount);
console.log(document.body.children);
console.log(document.body.children[0].hasChildNodes());
console.log(document.body.children[0].childElementCount);
console.log(document.body.children[0].children);
console.log(document.body.hasChildNodes());





function getElementsUsingTagName(node, tagName) {
    
    let allElement = [];
    tagName = tagName.toUpperCase();
    


    function exploreTags (node) {
        for (let child of node.children){
            
            if (child.nodeName === tagName) {
                allElement.push(child);
            }
    
            exploreTags(child);
        };
    }

    exploreTags(node);

    return allElement;

}


console.log(getElementsUsingTagName(document.body, 'h1'));
console.log(getElementsUsingTagName(document.body, 'div'));
