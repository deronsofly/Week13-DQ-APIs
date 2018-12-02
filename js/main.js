
// Basic API request using Vanilla Javascript

// Create an XHR object
// let myRequest = new XMLHttpRequest();

// //Call the open function, GET-type of request, url, true-asynchronous
// // XMLHttpRequest.open(method, url, async)
// myRequest.open('GET', 'https://api.github.com/users', true)

// // call the onload
// myRequest.onload = function(data){
// //check if the status is 200(means everything is okay)

// 	if (this.status === 200){
// 	 //return server response as an object with JSON.parse
// 	 var myData = JSON.parse(this.response);

// 		console.log(myData);

// 	}//end of if statment
// }//end of function

// // Sends the request to the server 
// myRequest.send();


// let myRequest = new XMLHttpRequest();

// // XMLHttpRequest.open(method, url, async)
// myRequest.open('GET', 'https://api.github.com/' + "users", true);


// Call the function on page load
// myRequest.onload = function(data){
// 	// If Server is OK, allow us to use API data
// 	if(this.status === 200){
// 		var myData = JSON.parse(this.response);

// 		console.log(myData);
// 	}
// }




// myRequest.send();






// let myRequest = new XMLHttpRequest();
// // .open(method, url, async)
// myRequest.open('GET', 'https://api.github.com/users', true);

// myRequest.onload = function(data) {

// 	if(this.status === 200){
// 		var mydata = JSON.parse(this.response);

// 		for(i=0; i<mydata.length; i++){
// 			document.body.innerHTML += "<h2>" + mydata[i].login + "</h2>";
// 			document.body.innerHTML += '<img src=' + mydata[i].avatar_url +'>'
// 		}
// 		console.log(mydata);
// 	}else{
// 		alert("Server is freaking out")
// 	}
// }
// // Sends the request to the server
// myRequest.send();















// Set a variable to make a request to githubs server
// var myRequest = $.get('https://api.github.com/users')

// myRequest.done(
// 	function(data) {
// 		for(i=0; i<data.length; i++){
// 			console.log(data[i].login)
// 		}
		
// 	}
// 	)


// myRequest.done(
// 	function(data) {
// 		for(i=0; i<data.length; i++){
// 			console.log(data[i]);
// 		}
// 	}
// 	)


// Getting our data to render on the page
// Using AJAX

	// $.ajax({
	// 	url: "https://jsonplaceholder.typicode.com/comments",

	// 	arr: [], 

	// 	dataType: "json",

	// 	success: function(data) {

	// 		var list = document.getElementById('list');

	// 		for(i=0; i<20; i++){

	// 			var h1 = document.createElement('H1');
	// 			var h2 = document.createElement('H2');
	// 			var h3 = document.createElement('H3');
	// 			var p = document.createElement('P');

	// 			var li = document.createElement('LI');

	// 			h1.className = "myH1";
	// 			h2.className = "myH2";
	// 			h3.className = "myH3";
	// 			p.className = "myP";
	// 			li.className = "list_item";


	// 			h1.textContent = data[i].id;
	// 			h2.textContent = "Name: " + data[i].name;
	// 			h3.textContent = "Email: " + data[i].email;
	// 			p.textContent = "Comment: " + data[i].body;


	// 			li.appendChild(h1);
	// 			li.appendChild(h2);
	// 			li.appendChild(h3);
	// 			li.appendChild(p);
	// 			list.appendChild(li);
	// 			console.log(data[i])
	// 		}




			
	// 	},

	// 	type: "GET" 
	// })


	$.ajax({
		url: "https://jsonplaceholder.typicode.com/todos",

		completed: [], 

		notCompleted: [],

		dataType: "json",

		success: function(data) {

			var list = document.getElementById('list');

			for(i=0; i<data.length; i++){

				if(data[i].completed === false){
					// console.log("This is false")
					this.notCompleted.push(data[i]);
				}else{
					// console.log("This is True")
					this.completed.push(data[i]);
				}
			
			}

			for(i=0; i<this.notCompleted.length; i++){
				var h1 = document.createElement('H1');
				var li = document.createElement('LI');

				h1.className = "myH1";
				li.className = "list_item"

				h1.innerHTML = this.notCompleted[i].title + "<br>" + "<span class='red'>  ^^ This is not completed </span>";

				li.appendChild(h1);
				list.appendChild(li);

			}

			for(i=0; i<this.completed.length; i++){
				var h1 = document.createElement('H1');
				var li = document.createElement('LI');

				h1.className = "myH1";
				li.className = "list_item"

				h1.innerHTML = this.notCompleted[i].title + "<br>" + "<span class='green'>  ^^ This is completed </span>";

				li.appendChild(h1);
				list.appendChild(li);

			}


			console.log(this.completed)
			console.log(this.notCompleted)

			
		},

		type: "GET" 
	})




	
































