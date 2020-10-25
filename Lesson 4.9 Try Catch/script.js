let json = '{"id":2}'

try {
	let user = JSON.parse(json);
	console.log(user);
	if (!user.name){
		throw new Error("'name' not found in this data")
	}

	console.log("Start");
	console.log(data);
	console.log("Result");
} catch (error) {
	console.log("Stop: " + error);
	console.log("Name: " + error.name);
	console.log("Message: " + error.message);
	console.log("Stack: " + error.stack);
} finally {
	console.log("I'm work always!");
}
console.log("The code works further");