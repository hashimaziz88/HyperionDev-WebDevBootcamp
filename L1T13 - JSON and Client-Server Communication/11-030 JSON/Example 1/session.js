let total = 0;

function add(){
	total = total + 10;
	/*Without sessionStorage, this information about changes to the variable above
	will be lost every time the page loads because the variable total will be reset to 0. 
	If we want to be able to access this information 
	accross page loads (e.g. when we navigate to a different page), we need to add the information
	we want to use to sessionStorage. Opening a page in a new tab or window will 
	cause a new session to be initiated.*/
	alert(total);
	//Below we add the value in the variable called 'total' to session storage. To retrieve this value
	//from sessionStorage, we will use the key, 'total'.
	sessionStorage.setItem("total",total);
}

function showUs(){
	//We use the getItem method of the sessionStorage object to get the value stored using the key 'total'.
	alert(sessionStorage.getItem("total"));
}

//For more information about HTTP as a stateless protocol see:
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#HTTP_is_stateless_but_not_sessionless and 
//https://stackoverflow.com/questions/13200152/why-is-it-said-that-http-is-a-stateless-protocol