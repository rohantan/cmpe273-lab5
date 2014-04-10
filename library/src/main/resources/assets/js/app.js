$(":button").click(function() {
    var isbn = this.id;
    alert('About to report lost on ISBN ' + isbn);
    $.ajax({
  	  url: 'http://localhost:8001/library/v1/books/'+isbn,
  	  type: 'PUT',
  	  contentType: "application/json",
  	  data: JSON.stringify({"status" : "lost"}),
  	  dataType: 'json',
  	  success: function(html){
  	  location.reload();
  	  $("#"+isbn).attr('disabled', 'disabled');
      },  	  
  	  error: errorAlert
  });
});

function errorAlert(e, jqxhr)
{
	alert("Your request was not successful: " + jqxhr);
}
