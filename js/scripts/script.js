/*$(document).ready(function() {
    $(".my-progress-bar").circularProgress({
        line_width: 2,
        color: "#2aa0c1",
        starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage: true,
    })
	.circularProgress('animate', 100, 3000);
});*/

$(document).ready(function() {
    var jqBar1 = $('.my-progress-bar');
    var jqBar1Status = true;
	
	
	function circule(){
		$(".my-progress-bar").circularProgress({
			line_width: 2,
			color: "#2aa0c1",
			starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
			percent: 0, // percent starts from
			percentage: true,
		}).circularProgress('animate', 100, 3000);
	}
	
	
	
    $(window).scroll(function() {
        var scrollEvent = ($(window).scrollTop() > (jqBar1.position().top - $(window).height()));
        if (scrollEvent && jqBar1Status) { 
			console.log(scrollEvent,jqBar1Status)
            jqBar1Status = false;
			circule();
		
        }
    });
});