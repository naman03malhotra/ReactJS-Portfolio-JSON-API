



<footer class="sections">

	<div class="container-fluid wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
		<div class="row text-center">
			<a href="#header-top" id="heart_hit"><span class="color-danger" style="font-size: 10vh;"><i class="fa fa-heart fa fa-heart animated rubberBand infinite"></i></span></a>

		</div>
		<div class="row" style="background-color: #00BCD4;">
			<div class="col-md-12 text-center"><h5 class="color-white"><i class="fa fa-copyright"></i> Naman Malhotra 2016 </h5></div>
		</div>
	</div>


</footer>


<script src="bundle.min.js" type="text/javascript"></script>
<script src="assets/js/sine.js" type="text/javascript"></script>
<script src="assets/js/wow.min.js" type="text/javascript"></script>




</body>
</html>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-89542709-1', 'auto');
  ga('send', 'pageview');

</script>

<script type="text/javascript">



	var rand = 2.3; 
	var rand_speed = rand/10;


	(function($) {
		"use strict"; 


		new WOW().init();

	})(jQuery); 

	var waves = new SineWaves({
  el: document.getElementById('waves'),
  
  speed: 4,
  
  width: function() {
    return $(window).width();
  },
  
  height: function() {
    return $(window).height();
  },
  
  ease: 'SineInOut',
  
  wavesWidth: '700%',
  
 waves: [
		{
			timeModifier: 1+rand_speed,
			lineWidth: 100*rand,
			amplitude: -100*rand/2,
			wavelength: 100*rand
		},
		{
			timeModifier: 1.01+rand_speed,
			lineWidth: 110*rand,
			amplitude: -110*rand/2,
			wavelength: 100*rand
		}

		],
 
  // Called on window resize
  resizeEvent: function() {
    var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
    gradient.addColorStop(0,"rgba(23, 210, 168, 0.2)");
    gradient.addColorStop(1,"rgba(255, 255, 255, 0.5)");
    gradient.addColorStop(0,"rgba(23, 210, 168, 0.2)");
    
    var index = -1;
    var length = this.waves.length;
	  while(++index < length){
      this.waves[index].strokeStyle = gradient;
    }
    
    // Clean Up
    index = void 0;
    length = void 0;
    gradient = void 0;
  }
});


	$(window).on('load', function() { 
		$(".cssload-body").animate({ marginLeft: "200%"} , 1000);
		setTimeout(function() {
			$(".preloader").delay(500).fadeOut("slow");
		}, 500);

	})


</script>






















<div id="myData" class="modal fade in">
	<div class="modal-dialog modal-lg">
		<div class="modal-header">
			<a  href="" data-dismiss="modal" class="close"  aria-label="Close"><p style="color:white !important;opacity:1;text-shadow:none;font-weight:normal">x</p></a>
			<h4 class="modal-title" id="myModalLabel" style="color: whitesmoke;">Preview / Download</h4>
		</div>
		<div class="modal-content text-center">
			<div class="modal-body plot_data">
				<br>
				<div class="dwl-data text-center row">

					<div class="col-md-4">
						<select id="file_export" class="form-control" required>
							<option value="" style="display:none">Select Format To Download</option>
							<option value="sql">SQL</option>
							<option value="csv">CSV</option>
						</select>
					</div>
					<div class="col-md-4">
						<a class="btn btn-primary my-btn" value="Upload File" id="down_hit" style="display: none;" download><span class="fa fa-download"></span> Download</a>
					</div>
					<div class="col-md-4"><a href="" id="newMap_hit" class="btn btn-success" style="display: none;">New Map</a> </div>

				</div>
				<br>
				<br>

				<div class="showData table-responsive text-left" id="showData"> Data will be displayed here </div>


				<br>

			</div>

			<div class="bg-primary text-center" id="result-prev">

			</div>

		</div><!-- /.modal-content -->
	</div><!-- /.modal-dalog -->
</div><!-- /.modal -->