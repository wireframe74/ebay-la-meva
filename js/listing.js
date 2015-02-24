jQuery(document).ready(function(){
	//Right Click Protection
	//$(document).bind("contextmenu",function(e){ return false;});

$('#mc-tabs2 ul li  a:not(:first)').addClass('inactive');
$('.mc-tabpanel2').hide();
$('.mc-tabpanel2:first').show();
	
$('#mc-tabs2 ul li a').click(function(){
  var t = $(this).attr('id');
  if($(this).hasClass('inactive')){ //this is the start of our condition 
    $('#mc-tabs2 ul li a').addClass('inactive');           
    $(this).removeClass('inactive');

    $('.mc-tabpanel2').hide();
	
    $('#'+ t + 'C').fadeIn('slow');
 }
});
	

$('#menu_left ul').html('<li><a href="http://stores.ebay.co.uk/Peppermint-Shop">Home</a></li> <li><a href="http://stores.ebay.co.uk/Peppermint-Shop/Brands-/_i.html?_fsub=5754844016&_sid=1141659496&_trksid=p4634.c0.m322">Brands</a></li> <li><a href="http://stores.ebay.co.uk/Peppermint-Shop/Shoes-/_i.html?_fsub=5754846016&_sid=1141659496&_trksid=p4634.c0.m322">Footwear</a></li> <li><a href="http://stores.ebay.co.uk/Peppermint-Shop/Clothing-/_i.html?_fsub=5754845016&_sid=1141659496&_trksid=p4634.c0.m322">Clothing</a></li> <li><a href="http://stores.ebay.co.uk/Peppermint-Shop/Peppermint-/_i.html?_fsub=5691426016&_sid=1141659496&_trksid=p4634.c0.m322">Peppermint</a></li> <li><a href="http://stores.ebay.co.uk/Peppermint-Shop/Luxury-Slippers-/_i.html?_fsub=5691427016&_sid=1141659496&_trksid=p4634.c0.m322">Luxury Slippers</a></li> <li><a href="http://stores.ebay.co.uk/Peppermint-Shop/Handbags-/_i.html?_fsub=5691436016&_sid=1141659496&_trksid=p4634.c0.m322">Handbags</a></li> <li><a href="http://stores.ebay.co.uk/Peppermint-Shop/_i.html?rt=nc&_sc=1&_sid=1141659496&_trksid=p4634.c0.m14&_sop=10&_sc=1">New In</a></li> <li><a href="http://stores.ebay.co.uk/Peppermint-Shop/Sale-/_i.html?_fsub=5691437016&_sid=1141659496&_trksid=p4634.c0.m322">Sale</a></li>');	
	
	
});

		
		


$(document).ready(function() {
 
 
  
var maylike = $('#foo22').bxSlider({
    slideWidth: 230,
    minSlides: 1,
    maxSlides: 4,
    slideMargin: 10,pager:false, nextText:'', prevText:''
  });
 
  var thumbnails = $('#foo2').bxSlider({
    slideWidth: 60,
    minSlides: 1,
    maxSlides: 4,
    slideMargin: 8,pager:false , nextText:'', prevText:''
  });	
  
  
  var w = $(window).width();
  
 

	$('#foo2 li img').click(function(){
		$('.primary-product-image img').attr('src',$(this).attr('src'));							   
	});
	
	
	
	var payment = '<p>www.paypal.co.uk – we use PayPal as it is simply the safest and easiest method of sending and receiving payments. All payments must be cleared before the items are dispatched.</p>';
	$('#payment-text').html(payment);
	
	var delivery = '<p>Delivery Delivery to the UK – £3.95.  International delivery – £10.00.<br> Delivery costs will be charged for the entire order, not per item. Please note the following conditions: <strong>Orders placed before 3pm Monday - Friday will be despatched on the day of purchase. </strong><br>All orders sent to a UK Mainland address will be shipped with Royal Mail on a 48 hour Tracked service. However, during peak trading times, deliveries may take longer.<br> All orders will be delivered between 7am-7pm, Monday-Saturday. We do not deliver on bank holidays. Whilst we will endeavour to deliver to you as soon as possible, Peppermint shall not be liable for any failure to make delivery within our standard delivery time estimates. <br>If you are unavailable when our delivery partner tries to deliver your order, they will attempt to deliver again the next working day.<br> Alternatively, they will provide you with a Calling Card detailing the local collection point for your parcel. If you should refuse delivery of goods, or are not available to accept the delivery on both delivery attempts, you will be required to cover any extra costs incurred. Northern Ireland (BT), Isle of Wight (PO30-37), Isle of Man (IM), Scottish Highlands and Orkney Isles (PA, ML, EH, KA, G, KY, PH, DD, AB, IV, KW), Outer Hebrides and the Shetland Isles (HS, ZE) will incur additional charges and may also experience delivery delays. Morning, Saturday and next working day deliveries are optional and will also incur additional charges. Deliveries to the Isle of Wight, Isle of Man and Northern Ireland will take longer. We are unable to deliver to the Channel Islands. If you wish to cancel your order after it has been dispatched, you will be charged for both delivery and collection cost. Lost Parcels If your item fails to arrive within 10 days of despatch, contact us at info@peppermint.uk.com. Peppermint will investigate your claim and if we are satisfied that the non-arrival of the product(s) was attributable to us, then a refund will be credited to the credit/debit card used to place the order.. </p>';
	$('#delivery-text').html(delivery);
	
	var return_ = '<p>When shopping online we want to ensure you are happy with your purchase and feel good about the experience of shopping with us. If for any reason you are not pleased with the items purchased online, or if it is not what you expected, you have the option of returning the item to us for a full refund of the product price subject to the following conditions:</p><p>If you simply have changed your mind, the refund will be for the product price only and not the postage cost;<br>If you post the item to us, you do so at your own expense; and<br>The item must be returned in original condition and packaging within 14 days of receipt.<br></p><p><strong>Faulty or Damaged Goods</strong></p><p>Please Contact Us to discuss the faulty items and to obtain our reply paid address.</p><p>Please note that refunds can only be issued to the bank account or PayPal account that was originally charged.</p>';
	
	$('#return-text').html(return_);
	
  
  	//Footer
	var footer = "\n\r<div id=\"os-footer\"><div class=\"os-inner\"><div id=\"ftop\"><div id=\"pos1\" class=\"footer_text\"><h4>Contact Us</h4><b>Peppermint</b><br>8 Mercery Lane<br>Canterbury, Kent<br>CT1 2JJ<br>United Kingdom<br><br><i class=telf></i>01227 470326<br><i class=email></i>info@peppermint.uk.com</div><div id=\"pos3\" class=\"footer_text\"><h4>Shop Categories</h4><a href=\"http://stores.ebay.co.uk/Peppermint-Shop/Clothing-/_i.html?_fsub=5199494016&_sid=1141659496&_trksid=p4634.c0.m322\">Clothing</a><br><a href=\"http://stores.ebay.co.uk/Peppermint-Shop/Shoes-/_i.html?_fsub=5199498016&_sid=1141659496&_trksid=p4634.c0.m322\">Shoes</a><br><a href=\"http://stores.ebay.co.uk/Peppermint-Shop/Peppermint-/_i.html?_fsub=5691426016&_sid=1141659496&_trksid=p4634.c0.m322\">Peppermint</a><br><a href=\"http://stores.ebay.co.uk/Peppermint-Shop/Handbags-/_i.html?_fsub=5691436016&_sid=1141659496&_trksid=p4634.c0.m322\">Handbags</a><br><a href=\"http://stores.ebay.co.uk/Peppermint-Shop/Sale-/_i.html?_fsub=5691437016&_sid=1141659496&_trksid=p4634.c0.m322\">Sale</a></div><div id=\"pos2\" class=\"footer_text\"><h4>Customer Care</h4><a href=\"http://stores.ebay.co.uk/Peppermint-Shop/Shipping-Information.html\">Returns & Refunds</a><br><a href=\"http://stores.ebay.co.uk/Peppermint-Shop/Shipping-Information.html\">Delivery Info</a><br><a href=\"http://stores.ebay.co.uk/Peppermint-Shop/Shop-Policies.html\">Terms and Conditions</a><br>Customer Services opening hours:<br>Monday to Friday: 9am - 5pm<br></div><div id=\"pos4\" class=\"footer_text\"><h4>Spread the love!</h4><a class=\"sicons fb\" href=\"http://www.facebook.com/Peppermint.Fashion.Footwear.Clothing\"></a> <a class=\"sicons tw\" href=\"https://twitter.com/PeppermintUK1\"></a><a class=\"sicons pin\" href=\"http://pinterest.com/peppermintuk/\"></a><a  class=\"sicons inst\" href=\"http://www.instagram.com/peppermintuk1\"></a><div class=\"os-clear\"></div>To receive details of our regular offers sign up our  email Newsletters.<div id=\"footer_button\" style=\"margin-top: 10px;\"><a href=\"http://my.ebay.co.uk/ws/eBayISAPI.dll?AcceptSavedSeller&linkname=includenewsletter&sellerid=peppermint-shop&_trksid=\">Sign Up for our email updates</a></div></div><div class=\"os-clear\"></div></div><div id=\"fbottom\">Copyright &copy; Peppermint &nbsp;|&nbsp; All Rights Reserved &nbsp;|&nbsp; <a href=\"http://www.uberebayshopdesign.com/\" target=\"_blank\">eBay Shop Design</a></div></div></div>";
		
			$("#html-footer-listing").html(footer);	
   
});
