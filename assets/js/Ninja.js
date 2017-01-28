var React = require('react');

var NinjaList = React.createClass({

		render: function(){
		var NinjaMapped = this.props.ninjaData.map(function(ninjas,index){

			if(index%2==0)
			{
				return (
					 <div key={index} className="row wow fadeInUp" data-wow-delay={(((index+1)*2)*0.1)+'s'} data-wow-duration="1s">
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
					<div key={index} className="row wow fadeInUp" data-wow-delay={(((index+1)*2)*0.1)+'s'} data-wow-duration="1s">      
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


	var Ninja = React.createClass({

		

		render: function(){
			alert('readasd');
			console.log(this.props.ninjaData);
			return (
				<div className="container-fluid">
				    <div className="row">
				      <h3 className="section-heading text-center">
				        I'm not a Ninja but...
				      </h3>
				      <hr className="primary"/>
				    </div>
				    
				   
				   <NinjaList ninjaData={this.props.ninjaData}/>
				   
				    
				  </div>

				);
		}
	});


module.exports = Ninja;