/*$(function(){
	var bar = new ProgressBar.Line(container, {
	 strokeWidth: 4,
	 easing: 'easeInOut',
	 duration: 6000,
	 color: '#007bae',
	 trailColor: '#54cbdf',
	 trailWidth: 1,
	 svgStyle: {width: '100%', height: '50%'},
	 from: {color: '#007bae'},
	 to: {color: '#00feff'},
	text: {
style: {
 // Text color.
 // Default: same as stroke color (options.color)
	 right: '0',
	 top: '30px',
	 padding: 0,
	 margin: '-5vw',
	 transform: null
	},
	autoStyleContainer: false
    },
	step: (state, bar) => {
	bar.setText(Math.round(bar.value() * 100) + ' %');
	}
	});

	bar.animate(0.3);  // Number from 0.0 to 1.0
}); */


$(function(){
    var jqBar = $('#container');
    var jqBarStatus = true;
    $(window).scroll(function() {
        var scrollEvent = ($(window).scrollTop() > (jqBar.position().top -  window.innerHeight));
		
					console.log( jqBar.position().top , window.innerHeight)
        if (scrollEvent && jqBarStatus) { 
            jqBarStatus = false;

				var bar = new ProgressBar.Line(container, {
					 strokeWidth: 4,
					 easing: 'easeInOut',
					 duration: 6000,
					 color: '#007bae',
					 trailColor: '#54cbdf',
					 trailWidth: 1,
					 svgStyle: {width: '100%', height: '50%'},
					 from: {color: '#007bae'},
					 to: {color: '#00feff'},
					text: {
				style: {
				 // Text color.
				 // Default: same as stroke color (options.color)
					 right: '0',
					 top: '30px',
					 padding: 0,
					 margin: '-5vw',
					 transform: null
					},
					autoStyleContainer: false
					},
					step: (state, bar) => {
					bar.setText(Math.round(bar.value() * 100) + ' %');
					}
					});

			bar.animate(0.3);  // Number from 0.0 to 1.0
        }
    });
});