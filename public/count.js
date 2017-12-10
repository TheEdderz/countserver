var PORT = 3000;

function countClick(){
	$.ajax({url: 'http://localhost:' + PORT + '/click', success: function(data){
    	$('#countDiv').html(data);
  	}});
}

$(function(){
	$('#btn').on('click',countClick);
	$.ajax({url: 'http://localhost:' + PORT + '/count', success: function(data){
    	$('#countDiv').html(data);
  	}});
});
