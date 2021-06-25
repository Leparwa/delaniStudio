$(document).ready(function(){
    $("#sendButton").click(function(){
        var name = $("#nameInput").val();
        var email =$("#emailInput").val();
        var message =$("#messageInput").val();
        const userResponse={name: name, email:email, message:message}
        // alert(userResponse);
        $.ajax({
			type: "POST",
		url: "https://bigbreakbjj.us14.list-manage.com/subscribe",
			dataType: "jsonp",
			data: {
                userResponse
			},
			success: function(data) {
				console.log(data);
				alert("Subscribed!");
			},
			error: function() {
                alert(`${name} we have received your message, thank you reaching out to us`)
			}
		});
    });

});
