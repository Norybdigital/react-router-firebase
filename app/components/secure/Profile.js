var React = require('react');
var ReactFireMixin = require('reactfire');
//var firebaseUtils = require('../../utils/firebaseUtils');
//var firebase = require('firebase');


//A simple profile page that lets the user create a user name
var Profile = React.createClass({
	contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  mixins: [ReactFireMixin],

  getInitialState: function() {
  	return {
  		error: false,
  		username: ''
  	}
  },
  componentWillMount: function() {
		//TODO: Make this DRY
		var config = {
	    apiKey: "AIzaSyAHEireJubcEePQ3ZvNOIToVkR6lrphPPY",
	    authDomain: "kali-dev.firebaseapp.com",
	    databaseURL: "https://kali-dev.firebaseio.com",
	    storageBucket: "kali-dev.appspot.com",
  	};
  	//firebase.initializeApp(config);
  	
  	//var ref = new Firebase('https://kali-dev.firebaseio.com/users');
  	var ref = firebase.database().ref('users');
  	//console.log(ref.auth.uid);
  	//console.log(this.props.email);
  	this.bindAsArray(ref, "users");
  	},

  componentWillUnmount: function() {
  	this.unbind('users');
  },

  handleSubmit: function(e) {
  	e.preventDefault();
  	this.firebaseRefs.users.push({
  		username: this.state.username
  	});
  	this.setState({username: username});
  },
  render: function() {
  	console.log(this.props);
  	var errors = this.state.error ? <p> {this.state.error} </p> : '';
  	return (
	  	<div className="col-sm-6 col-sm-offset-3">
	  		<h1> User Profile</h1>
	  		<form onSubmit= {this.handleSubmit}>
	  			<div className="form-group">
	  				<label> Username </label>
	  				<input className="form-control" ref="username" placeholder ="Username" />
	  			</div>
	  			{errors}
	  			<button type="submit" className="btn btn-primary">Update</button>
	  		</form>
	  	</div>
  	);
  }

});

module.exports = Profile;