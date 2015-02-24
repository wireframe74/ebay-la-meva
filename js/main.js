jQuery(document).ready(function($){
	//Right Click Protection
	//$(document).bind("contextmenu",function(e){ return false;});


$('#mc-tabs2 ul li  a:not(:first)').addClass('inactive');
$('.mc-tabpanel2').hide();
$('.mc-tabpanel2:first').show();
	
$('#mc-tabs2 ul li a').click(function(e){

	e.preventDefault();
  var t = $(this).attr('id');
  if($(this).hasClass('inactive')){ //this is the start of our condition 
    $('#mc-tabs2 ul li a').addClass('inactive');           
    $(this).removeClass('inactive');

    $('.mc-tabpanel2').hide();
	
    $('#'+ t + 'C').fadeIn('slow');
 }
});
	

	
	
});

		
		


jQuery(document).ready(function($) {
 
 
  
// var maylike = $('#foo22').bxSlider({
//     slideWidth: 230,
//     minSlides: 1,
//     maxSlides: 4,
//     slideMargin: 10,pager:false, nextText:'', prevText:''
//   });
 
//   var thumbnails = $('#foo2').bxSlider({
//     slideWidth: 60,
//     minSlides: 1,
//     maxSlides: 4,
//     slideMargin: 8,pager:false , nextText:'', prevText:''
//   });	
  
  
  var w = $(window).width();
  
 

	// $('#foo2 li img').click(function(){
	// 	$('.primary-product-image img').attr('src',$(this).attr('src'));							   
	// });
	
	
	
	var payment = '<p>Paypal is our prefered method of payment but we also accept Direct Deposit. If you would like to pay via Direct Deposit please email us for the details.</p>';
	$('#payment-text').html(payment);
	
	var delivery = '<p></p>';
	$('#delivery-text').html(delivery);
	
	var return_ = '<p>Return policy is 30 days.</p><p>When shopping online we want to ensure you are happy with your purchase and feel good about the experience of shopping with us. If for any reason you are not pleased with the items purchased online, or if it is not what you expected, you have the option of returning the item to us for a full refund of the product price subject to the following conditions:</p><p>If you simply have changed your mind, the refund will be for the product price only and not the postage cost;<br>If you post the item to us, you do so at your own expense; and<br>The item must be returned in original condition and packaging within 14 days of receipt.<br></p><p><strong>Faulty or Damaged Goods</strong></p><p>Please Contact Us to discuss the faulty items and to obtain our reply paid address.</p><p>Please note that refunds can only be issued to the bank account or PayPal account that was originally charged.</p>';
	
	$('#return-text').html(return_);
	
  
  	//Footer
	var footer = "\n\r<div id=\"os-footer\"><div class=\"os-inner\"><div id=\"ftop\"><div id=\"pos1\" class=\"footer_text\"><h4>Contact Us</h4><b>Peppermint</b><br>8 Mercery Lane<br>Canterbury, Kent<br>CT1 2JJ<br>United Kingdom<br><br><i class=telf></i>01227 470326<br><i class=email></i>info@peppermint.uk.com</div><div id=\"pos3\" class=\"footer_text\"><h4>Shop Categories</h4><a href=\"http://stores.ebay.co.uk/Peppermint-Shop/Clothing-/_i.html?_fsub=5199494016&_sid=1141659496&_trksid=p4634.c0.m322\">Clothing</a><br><a href=\"http://stores.ebay.co.uk/Peppermint-Shop/Shoes-/_i.html?_fsub=5199498016&_sid=1141659496&_trksid=p4634.c0.m322\">Shoes</a><br><a href=\"http://stores.ebay.co.uk/Peppermint-Shop/Peppermint-/_i.html?_fsub=5691426016&_sid=1141659496&_trksid=p4634.c0.m322\">Peppermint</a><br><a href=\"http://stores.ebay.co.uk/Peppermint-Shop/Handbags-/_i.html?_fsub=5691436016&_sid=1141659496&_trksid=p4634.c0.m322\">Handbags</a><br><a href=\"http://stores.ebay.co.uk/Peppermint-Shop/Sale-/_i.html?_fsub=5691437016&_sid=1141659496&_trksid=p4634.c0.m322\">Sale</a></div><div id=\"pos2\" class=\"footer_text\"><h4>Customer Care</h4><a href=\"http://stores.ebay.co.uk/Peppermint-Shop/Shipping-Information.html\">Returns & Refunds</a><br><a href=\"http://stores.ebay.co.uk/Peppermint-Shop/Shipping-Information.html\">Delivery Info</a><br><a href=\"http://stores.ebay.co.uk/Peppermint-Shop/Shop-Policies.html\">Terms and Conditions</a><br>Customer Services opening hours:<br>Monday to Friday: 9am - 5pm<br></div><div id=\"pos4\" class=\"footer_text\"><h4>Spread the love!</h4><a class=\"sicons fb\" href=\"http://www.facebook.com/Peppermint.Fashion.Footwear.Clothing\"></a> <a class=\"sicons tw\" href=\"https://twitter.com/PeppermintUK1\"></a><a class=\"sicons pin\" href=\"http://pinterest.com/peppermintuk/\"></a><a  class=\"sicons inst\" href=\"http://www.instagram.com/peppermintuk1\"></a><div class=\"os-clear\"></div>To receive details of our regular offers sign up our  email Newsletters.<div id=\"footer_button\" style=\"margin-top: 10px;\"><a href=\"http://my.ebay.co.uk/ws/eBayISAPI.dll?AcceptSavedSeller&linkname=includenewsletter&sellerid=peppermint-shop&_trksid=\">Sign Up for our email updates</a></div></div><div class=\"os-clear\"></div></div><div id=\"fbottom\">Copyright &copy; Peppermint &nbsp;|&nbsp; All Rights Reserved &nbsp;|&nbsp; <a href=\"http://www.uberebayshopdesign.com/\" target=\"_blank\">eBay Shop Design</a></div></div></div>";
		
			$("#html-footer-listing").html(footer);	
   
});