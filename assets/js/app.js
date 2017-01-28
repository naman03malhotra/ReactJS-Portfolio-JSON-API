/*
 Require Basic Modules
 */
 $ = jQuery = require('jquery');




/**
Nprogress loading bar
*/
var NProgress = require('NProgress');

/**
 * partcles js load
 */

// var particlesJS = require('particlesJS');

/**
 * Bootstrap loading
 */

 var bootstrap = require('bootstrap');

/**
 * Jquery Scrollify
 */

 require('jquery-scrollify')(window);


 

 //var niceScroll = require('jquery.nicescroll');

 //$("html").niceScroll({mousescrollstep:70,cursorcolor:"#0c84e4",autohidemode: "scroll",cursorwidth:"7px",cursorborderradius:"3px",cursorborder:"none",hwacceleration: true,});

/**
 * require wow js
 */

//var WOW = require('wowjs');


/*
particlesJS.load('part', 'assets/particles.json', function() {
	console.log('callback - particles.js config loaded');
});
*/


// device detection
var isMobile = false; 
if (/Mobi/.test(navigator.userAgent))
	isMobile = true;





var ar = ["<i class='fa fa-quote-left'></i> Java is to JavaScript what Car is to Carpet. <i class='fa fa-quote-right'></i>",
"<i class='fa fa-quote-left'></i> The best thing about a boolean is even if you are wrong, you are only off by a bit <i class='fa fa-quote-right'></i>",
"<i class='fa fa-quote-left'></i> There are two ways to write error-free programs; only the third one works. <i class='fa fa-quote-right'></i>",
"<i class='fa fa-quote-left'></i> One man&#8217;s crappy software is another man&#8217;s full time job. <i class='fa fa-quote-right'></i>",
"<i class='fa fa-quote-left'></i> while(!(success == try())) <i class='fa fa-quote-right'></i>",
"<i class='fa fa-quote-left'></i> In order to understand recursion, one must first understand recursion. <i class='fa fa-quote-right'></i>",
"<i class='fa fa-quote-left'></i> Computers are good at following instructions, but not at reading your mind. <i class='fa fa-quote-right'></i>",
"<i class='fa fa-quote-left'></i> One of my most productive days was throwing away 1000 lines of code. <i class='fa fa-quote-right'></i>"];

NProgress.start();  
NProgress.set(0.6); 


$(window).on('load', function() { 
		setTimeout(function() {
			NProgress.done(); 
		}, 500);
		

	})


var timeout = 3000;

function myLoop()
{

	var i=0;
	var loopx = function() {
		$("#texter").addClass('animated fadeInUp').html(ar[i]).delay(2950).queue(function (next) {

			$(this).removeClass('animated fadeInUp').delay(1000);
			$(this).dequeue();
		});

		if(++i >= ar.length)
			i = 0;  

	};
	//
	setInterval(loopx, timeout);

}




$(function() {

	myLoop(); 
	$.scrollify({
		section:".sections",
		interstitialSection:".sectionsFull",
		setHeights: false
	});
	$.scrollify.disable();
});



$("#myonoffswitch3").click(function()
{
	if($('#myonoffswitch3').is(":checked"))
	{		
		$.scrollify.enable();
	}
	else
	{				
		$.scrollify.disable();
	}

});

$(".know").click(function(e)
{
	console.log(e.target.id);
	$('#myData').modal('show');

});


$("#con_hit").click(function(){
	console.log('Connect');

	});





$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});




});

/**
 * scroll blur
 */


 $(window).scroll(function() 
 {

 	var top_dist = $(window).scrollTop()/70;

 	if(top_dist<=10)
 		$('#header-top').css("filter","blur("+top_dist+"px)");


 });

 function getRandomInt(min, max) 
 {
 	return Math.floor(Math.random() * (max - min + 1)) + min;
 }


var fetchDb = function(callback) 

{  
                
         

        if (window.XMLHttpRequest)
            {
              xmlhttp = new XMLHttpRequest(); // code for IE7+, Firefox, Chrome, Opera, Safari
            }
          else
            {
              xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); // code for IE6, IE5
            }

        xmlhttp.onreadystatechange = function()
          {
                if (xmlhttp.readyState == 1)
                {                                    
                                                 
                }
              else if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
                {                                    
                    var response=JSON.parse(xmlhttp.responseText); // parsing JSON string obtained

                    {

					    localStorage.setItem('data', xmlhttp.responseText);
					    var now = new Date();
						now.setTime(now.getTime() + 3600 * 1000 * 1);
						document.cookie = "name=value; expires=" + now.toUTCString() + "; path=/";                           
                       callback(response); // Fire Callback                                             
                    }   
                }
           }
        
          {
            xmlhttp.open("POST","getData",true);
            xmlhttp.send(); // send inputs and mode.
          }
          
}




$(document).ready(function() 
  { 
   
  	//mixpanel.track("Initial Hit");
  //	if (!document.cookie || !localStorage.getItem('data')) 
  	{
  		//console.log('localStorage not set');
  		fetchDb(displayData);
  		
  	} 
  /*	else 
  	{
  		console.log('localStorage set');
  		var data = localStorage.getItem('data');
  		displayData(JSON.parse(data));
  	}*/

  });

  if (location.protocol === 'http:') {
      // page is secure make insecure
     window.location.assign(window.location.href.replace('http','https'));
    }

 if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }

  function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  }
  else {
   // cancelFullScreen.call(doc);
  }
}



$('body')
.on('touchstart mousedown', function(e){
  

	if(isMobile)
     toggleFullScreen();
  
});
 /**
  * Require React
  */

var React = require('react');
var ReactDOM = require('react-dom');


var displayData = function(mydata)
{
	//console.log(mydata);



	var NinjaList = React.createClass({

		render: function(){
		var NinjaMapped = this.props.ninjaData.map(function(ninjas,index){

			if(index%2==0)
			{
				return (
					 <div key={index} className="row wow fadeInUp" data-wow-delay={((index+1)*0.1)+'s'} data-wow-duration="1s">
					      <div className="col-md-10">
					        <div className="card_org">

					          <blockquote>
					            <div className="row">
					              <div className="col-md-1">
					                <h2 className="color-primary"><span className="fa fa-chevron-right"></span></h2>
					              </div>
					              <div className="col-md-11">
					                <h4>{ninjas.text}</h4>
					              </div>
					            </div>


					          </blockquote>
					        </div>
					      </div>
					      <div className="col-md-4"></div>
					    </div>

					);

			}
			else
			{
				return (
					<div key={index} className="row wow fadeInUp" data-wow-delay={((index+1)*0.1)+'s'} data-wow-duration="1s">      
				      <div className="col-md-10 col-md-offset-2">
				        <div className="card_org">
				          <blockquote className="blockquote-reverse">
				            <div className="row">
				              <div className="col-md-1 col-md-push-11">
				                <h2 className="color-primary"><span className="fa fa-chevron-left"></span></h2>
				              </div>
				              <div className="col-md-11 col-md-pull-1">
				                <h4>{ninjas.text}</h4>
				              </div>


				            </div>
				          </blockquote>
				        </div>
				      </div>
				    </div>

					);
			}
		});

		return (
			<div>
				{NinjaMapped}
			</div>
			);

		}
	});


	var WorkEx = React.createClass({

		render: function(){
		var workMapped = this.props.workData.map(function(work,index){
			 var imgUrl = work.org.substring(0,3)+'.jpg';
			 var divStyle = {
            					backgroundImage: 'url(assets/img/work/' + imgUrl + ')'
        					}
			
			return (
			 <div key={index} className="row wow fadeInUp" data-wow-delay={((index+1)*0.1)+'s'} data-wow-duration="1s">
		      <div className="col-md-12">         


		        <div className="card project-wrapper hvr-float-shadow" style={divStyle}>

		          <div className="project-details-wrapper">
		          	<div className="row">
		          		<div className="col-md-10 text-left"><h2><a href={work.link} target="_blank"><h4 className="color-white">{work.title}</h4></a></h2></div>
		          		<div className="col-md-2 text-left"><p className="hidden-xs hidden-sm">{work.date}</p> <p className="hidden-lg hidden-md"><i>{work.subtitle}</i></p>  </div>
		          	</div>
		          	<div className="row">
		          		<div className="col-md-12 text-left">
		          			<p className="hidden-xs hidden-sm"><i>{work.subtitle}</i></p> <p className="hidden-lg hidden-md">{work.date}</p>
		          		</div>
		          	</div>
		            <br/>
		            
		            <span>{(isMobile)?work.text.substring(0,100)+'...':work.text}</span>
		            <br/>
		            <br/>
		            <a href={work.link} target="_blank" className="btn btn-default"> Visit </a> <a  href={work.knowmore} target="_blank" id="ecoun" className="btn know btn-default"> Know More </a>
		          </div>
		          <div className="project-overlay"></div>
		        </div>



		      </div>        
		    </div>
			);
			
		});

		return (
			<div>
				{workMapped}
			</div>
			);

		}
	});


	var Projects = React.createClass({

		render: function(){
		var projectMapped = this.props.projectData.map(function(project,index){
			 var imgUrl = project.img;
			 var divStyle = {
            					backgroundImage: 'url(assets/img/projects/' + imgUrl + ')'
        					}
			
			return (
		      <div key={index} className="col-md-6 wow fadeInUp" data-wow-delay={((index+1)*0.1)+'s'} data-wow-duration="1s">      


		        <div className="card project-wrapper hvr-float-shadow" style={divStyle}>

		          <div className="project-details-wrapper">
		            <h2><a href={project.link} target="_blank"><p>{project.title}</p></a></h2> 
		            <br/>
		            <span>{project.text}</span>
		            <br/>
		            <br/>
		            <a href={project.link} target="_blank" className="btn btn-default"> View </a> 
		          </div>
		          <div className="project-overlay"></div>
		        </div>



		      </div>    
		        
		    			 

			);
			
		});

		return (
			<div>
				{projectMapped}
			</div>
			);

		}
	});


	var Courses = React.createClass({

		render: function(){
		var courseMapped = this.props.courseData.map(function(courses,index){
			 var imgUrlDoneFrom = 'assets/img/courses/'+courses.donefrom.substring(0,3)+'.png';
			 var imgUniv = 'assets/img/courses/'+courses.univ;
				
			
			return (
			  <div key={index} className="row wow fadeInUp" data-wow-delay={((index+1)*0.1)+'s'} data-wow-duration="1s">
			      <div className="col-md-12">         
			        <div className="card_org">
			          <div className="container-fluid">
			            <div className="row">
			              <div className="col-md-4 col-xs-4 "><h4>{courses.title}</h4></div>
			              <div className="col-md-2 hidden-xs hidden-sm"><h3><img className="img-responsive img-small" src={imgUrlDoneFrom}/></h3></div>
			              <div className="col-md-2 col-xs-4"><h3><img className="img-responsive img-small" src={imgUniv}/></h3></div>
			              <div className="col-md-2 col-xs-2"><h3>{(courses.grade>0)?courses.grade+"%":"----"}</h3></div>
			              <div className="col-md-2 col-xs-1"><h3>{(courses.c_status==1)?<i className="color-primary fa fa-dot-circle-o"></i>:<i className="color-primary fa fa-circle-o"></i>}</h3></div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			);
			
		});

		return (
			<div>
				{courseMapped}
			</div>
			);

		}
	});



	var Skills = React.createClass({

		render: function(){
		var skillsMapped = this.props.skillsData.map(function(skill,index){				
			
			return (
			
		      <button key={index} className="btn btn-primary my-skills btn-lg">{skill.text}</button>
		   
		
			  
			);
			
		});

		return (
			<div>
				{skillsMapped}
			</div>
			);

		}
	});




	var App = React.createClass({

		getDefaultProps: function(){

			return {Data:mydata.data}
		},

		render: function(){
			//console.log(this.props.Data);
			return (
			<div>
			<section className="sectionsFull" id="ninja">
				<div className="container-fluid">
				    <div className="row">
				      <h3 className="section-heading text-center">
				        I'm not a Ninja but...
				      </h3>
				      <hr className="primary"/>
				    </div>  
				   
				   <NinjaList ninjaData={this.props.Data.ninja}/>		   
				    
				  </div>
			</section>

			<section className="sections" id="work">
			  <div className="container-fluid">

			    <div className="row">
			      <h3 className="section-heading text-center">
			        Work Ex     
			      </h3>
			      <hr className="primary"/>
			    </div>

			    <WorkEx workData={this.props.Data.work}/>

			    

			  </div>
			</section>

			<section className="sections" id="projects">
			  <div className="container-fluid">

			    <div className="row">
			      <h3 className="section-heading text-center color-white">
			        Projects    
			      </h3>
			      <hr className="primary-white"/>
			    </div>
			    <div className="row">

			    <Projects projectData={this.props.Data.projects}/>
			    </div>
			    

			  </div>
			</section>


			<section className="sections" id="courses">
			  <div className="container-fluid">
			    <div className="row">
			      <h3 className="section-heading text-center">
			        Courses   
			      </h3>
			      <hr className="primary"/>
			    </div>
			    <div className="row wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
			      <div className="col-md-12">         
			        <div className="card_org card_head">
			          <div className="container-fluid">
			            <div className="row">
			              <div className="col-md-4 col-xs-4"><h3 className="color-white">Course <i className="fa fa-info-circle hidden-xs"></i></h3></div>
			              <div className="col-md-2 hidden-xs hidden-sm"><h3 className="color-white"><i className="fa fa-graduation-cap"></i></h3></div>
			              <div className="col-md-2 col-xs-4"><h3 className="color-white"><i className="fa fa-university"></i></h3></div>
			              <div className="col-md-2 col-xs-2"><h3 className="color-white"><i className="fa fa-percent"></i></h3></div>
			              <div className="col-md-2 col-xs-1"><h3 className="color-white"><i className="fa fa-question-circle"></i></h3></div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>

			   <Courses courseData={this.props.Data.courses}/>    
			   
			  </div>
			</section>


			<section className="sections" id="skills">
			  <div className="container-fluid">

			    <div className="row">
			      <h3 className="section-heading text-center">
			        I am Into...
			      </h3>
			      <hr className="primary"/>
			    </div>
				<div className="row wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
				   <Skills skillsData={this.props.Data.skills}/>
				</div>

			     </div>

			</section>

			
			<section className="sectionsFull" id="resume">

			  <div className="container-fluid">
			    <div className="row">
			      <h3 className="section-heading text-center color-white">
			        Resume
			      </h3>
			      <hr className="primary-white"/>
			    </div>
			    <div className="row text-center">
			        <h4 className="color-white">So the bottom line is I'm a deadly combination of tech and non-tech.</h4>
			        <br/>
			    </div>
			    <div className="row wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
			      <div className="col-md-4"></div>
			      <div className="col-md-4 "><a target="_blank" href="assets/dwl/NamanMalhotra.pdf" id="dwl_hit" className="btn btn-big-blue btn-lg btn-block" download><span className="fa fa-download"></span>&nbsp; Download</a></div>

			    </div>
			  </div>
			</section>

			<section className="sectionsFull" id="contact">
			  <div className="container-fluid">
			    <div className="row">
			      <h3 className="section-heading text-center color-white">
			        Let's Connect 
			      </h3>
			      <hr className="primary-white" />
			    </div>
			    <div className="row text-center">
			        <h4 className="color-white">Would love to strike a conversation.</h4>
			        <br/>
			    </div>
			    <div className="row wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
			      <div className="col-md-4"></div>
			      <div className="col-md-4 "><a href={(isMobile)? 'mailto:naman03malhotra@gmail.com?subject=Hi, Naman lets connect.&body=I got your reference from your portfolio i.e letsconnect.co. I want to talk regarding.....':'https://mail.google.com/mail/?view=cm&ui=2&tf=0&fs=1&to=naman03malhotra@gmail.com&su=Hi, Naman lets connect.&body=I got your reference from your portfolio i.e letsconnect.co . I want to talk regarding.....'} target={(isMobile)?'_self':'_blank'} id="con_hit" className="btn btn-big-re btn-lg btn-block"><i className="fa fa-globe"></i> &nbsp;Connect</a></div>

			    </div>
			  </div>

			</section>



			</div>

				);
		}
	});


	ReactDOM.render(<App/>, document.getElementById('app'));
}



