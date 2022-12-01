	

		$('document').ready(function(){
			
			$.post('contact.php',null,function(data){
				$('.footer-contact-info').html(data);
			});

		});
			

		$('document').ready(function(){
			var dyear =1;
			$.post('sin.php',{dyear:dyear},function(data){
				$('#block-copyright').html('© Copyrights '+data.trim()+'.  All rights reserved.');
			});

		});
		$('document').ready(function(){
			var i55 =1;
			$.post('sin.php',{i55:i55},function(data){
				$('#i55').html(data);
			});

		});
			

		$('document').ready(function(){
			var  i56 = 1;
			$.post('sin.php',{i56:i56},function(data){
				$('#i56').html(data);
			});

		});
		
	
		