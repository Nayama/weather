
$('#inp').on('focus',function(){
	$('#inp').val(' ');
});
$('#btn').on('click',function(){
		var city=$('#inp').val().trim();
		// if(city!==' '){
		// 	$('#city').text(city);
		// }
		$('#weather-ul,#week-ul,#weather-show').empty();
		jsonpData(city);
});


function tap(climate){
	console.log('climate==>',climate);
	$('#city').text(climate.city);
	var div=$('<div>'+'<span class="date" id="date">'+climate.data[0].date+'</span>'+'</div>'+
	'<span class="temp" id="temp">'+climate.data[0].tem2+'°'+'~'+climate.data[0].tem1+'°'+'</span>'+
	'<span class="weather" id="weather">'+climate.data[0].wea+'</span>');
	$('#weather-show').append(div);
	
	// 24小时天气
	for(var i=0;i<climate.data[0].hours.length;i++){
		var li=$('<li>'+'<div>'+'<span class="today-time">'+climate.data[0].hours[i].hours+'</span>'+
		'<span class="iconf">'+
		'<img src="img/'+climate.data[0].hours[i].wea_img+'.png">'+'</span>'+
		'<span class="today-weather">'+climate.data[0].hours[i].wea+'</span>'+
		'<span class="today-temp">'+climate.data[0].hours[i].tem+'°'+'</span>'+
		'</div>'+'</li>');
		$('#weather-ul').append(li);
	}
	
	for(var j=0;j<climate.data.length;j++){
		var lis=$('<li class="week-date">'+'<span>'+climate.data[j].date+'</span>'+'<span>'+climate.data[j].week+'</span>'+'<span>'+climate.data[j].wea+'</span>'+'<span>'+climate.data[j].tem2+'°'+'~'+climate.data[j].tem1+'°'+'</span>'+'</li>');
		$('#week-ul').append(lis);
	}
	
	
}


function jsonpData(city){
	var url='https://www.tianqiapi.com/api?appid=92421184&appsecret=FPz8mYnp&version=v9&callback=tap';
	
	if (city !== undefined) {
	  url += '&city=' + city;
	  console.log(url)
	}
	var script=document.createElement('script');
	script.src=url;
	document.body.appendChild(script);
}
jsonpData();
