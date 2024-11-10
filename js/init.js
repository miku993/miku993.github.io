////////////////////////////////////////////////////////////
// INIT
////////////////////////////////////////////////////////////
 /*!
 * 
 * DOCUMENT READY
 * 
 */
$(function() {
	$('#clockHolder').digitalClock({colour:'#8F44AD',
									blockWidth:12,
									blockHeight:60});
									
									
	$('#clockStaticHolder').digitalClock({colour:'#d9434e',
									blockWidth:8,
									blockHeight:40,
									animation:false,
									colonAnimation:false,
									twentyFourHour:true,
									inactiveAlpha:.1});
});