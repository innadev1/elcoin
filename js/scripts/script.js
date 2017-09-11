$(document).ready(function() {
    $(".my-progress-bar").circularProgress({
        line_width: 2,
        color: "#2aa0c1",
        starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage: true,
    }).circularProgress('animate', 100, 3000);
});

/*$(document).ready(function() {
    var jqBar = $('.my-progress-bar');
    var jqBarStatus = true;
    $(window).scroll(function() {
        var scrollEvent = ($(window).scrollTop() > (jqBar.position().top - $(window).height()));
        if (scrollEvent && jqBarStatus) { 
            jqBarStatus = false;
            $(".my-progress-bar").circularProgress({
				line_width: 2,
				color: "#2aa0c1",
				starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
				percent: 0, // percent starts from
				percentage: true,
			}).circularProgress('animate', 100, 3000);
        }
    });
});*/