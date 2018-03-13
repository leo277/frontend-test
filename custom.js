$(document).ready(function(){
	$('#myform').submit(function(e){
		//dont do usual submit
		e.preventDefault();
		//get time
		var dt = new Date();
		var currSeconds = dt.getSeconds();
		//get input val
		var post = $("input[name='post']").val();
		//prepend to page
		$('#page').prepend("<p>" + post + " - " + currSeconds + "</p>");
	})

});