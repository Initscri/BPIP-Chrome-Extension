/**
 * @name BPIP.org Chrome Extension 	
 * @author Initscri (https://bitcointalk.org/index.php?action=profile;u=186520)
 */
 
/**
 * Get the closest element of a given element by class
 *
 * Take an element (the first param), and traverse the DOM upward from it
 * until it hits the element with a given class name (second parameter).
 * This mimics jQuery's `.closest()`.
 *
 * @param  {element} el    The element to start from
 * @param  {string}  clazz The class name
 * @return {element}       The closest element
 */
var closestByClass = function(el, clazz) {
    // Traverse the DOM up with a while loop
    while (el.className != clazz) {
        // Increment the loop to the parent node
        el = el.parentNode;
        if (!el) {
            return null;
        }
    }
    // At this point, the while loop has stopped and `el` represents the element that has
    // the class you specified in the second parameter of the function `clazz`

    // Then return the matched element
    return el;
}

var afterLinkSelectorText = 'View Profile';
var querySelection = 'img[title="' + afterLinkSelectorText + '"]';
var nodes = document.querySelectorAll(querySelection);
if(nodes.length > 0) {
	for(node in nodes) {
		if(nodes.hasOwnProperty(node)) {
			var curNode = nodes[node];
			
			// Find the users id by parent,
			var userPosterInfoContainer = closestByClass(curNode, 'poster_info');
			var userLink = userPosterInfoContainer.querySelector('b > a');
			var userName = userLink.textContent;
			
			// Create the link
			var nodeLink = document.createElement('a');
			nodeLink.setAttribute('href', 'https://bpip.org/profile.aspx?p=' + userName);
			nodeLink.setAttribute('target', '_BLANK');
			
			// Set the icon of the link.
			nodeLink.innerHTML = '<img style="width: 16px;height:16px" src="https://bpip.org/images/favicon.ico" />';
			
			// Insert the link on the profile.
			curNode.parentNode.parentNode.insertBefore(nodeLink, curNode.parentNode);
		}
	}
}
