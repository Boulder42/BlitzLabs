$(function () {

	var $stat = $('#stat');
	var $playerSearch = $('#search')
	$.ajax({
  		type: 'GET',
  		url: 'https://api.wotblitz.com/wotb/account/info/?application_id=78fa78c7decbb895651faefb6f6ef497&account_id=1009382745',
  		success: function(statistic) {
  			$.each(stat, function(i, data) {
  				$stat.append('<li>'+ data.statistics +'</li>')
  			});
  		},
  		error: function() {
  			alert('Yo something went wrong');
  		}
 	});

	$('#submitPlayerSearch').on('click', function() {

	});

});