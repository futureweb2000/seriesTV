

$.ajax({
	url:'http://api.tvmaze.com/shows',
	success: function(data){
		console.log(data[0]);
	}

})


var template = '<div class="tv-show">'+
					'<figure>'+
						'<img src=":showImg:" alt=":showImg:">'+
					'</figure>'+
					'<h2>showTitle</h2>'+
					'<p>:showSumary:</p>'+
				'</div>';


$('#search')
	.find('form')

	.on('submit',function (ev){
		ev.preventDefault();
		alert('se hizo submit')
		
	})