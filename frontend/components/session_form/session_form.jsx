import React from 'react';
import { Link, withRouter } from 'react-router';
import { merge } from 'lodash';
import Modal from 'react-modal';
import ModalStyle from './modal_style';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fname: "",
			lname: "",
			email: "",
			password: "",
			modalOpen: false,
			modalType: 'Log in'
		};
 		this.handleSubmit = this.handleSubmit.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		if (this.state.modalType === 'Log in') {
			this.props.login({user});
		} else {
			this.props.signup({user});
		}
	}

	navLink() {
		if (this.state.modalType === "Log in") {
			return <button className="lower-login-btn" onClick={this.openModal.bind(this, 'Sign Up')}>Sign up</button>;
		} else {
			return <button className="lower-login-btn" onClick={this.openModal.bind(this, 'Log in')}>Log in</button>;
		}
	}

	openModal(modalType) {
		this.setState({
			modalOpen: true,
			modalType
		});
	}

	closeModal() {
		this.setState({modalOpen: false});
	}

	renderErrors() {
		return(
			<ul className="errors-list">
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		// const session = this;
		// const login = this.props.login;
		const inputType = this.state.modalType === "Log in" ? "hidden" : "text";
		return (
			<div className="form-div">
				<nav className="login-signup">
					<Link onClick={() => this.props.login({user: { email: 'guest@guest.com', password: 'password' }})}
						className="login-signup-btn">Demo</Link>
					&nbsp;&nbsp;
					<Link onClick={this.openModal.bind(this, 'Sign Up')} className="login-signup-btn">Sign Up</Link>
					&nbsp;&nbsp;
					<Link onClick={this.openModal.bind(this, 'Log in')} className="login-signup-btn">Log In</Link>
				</nav>
				<Modal
					contentLabel="Modal"
					isOpen={this.state.modalOpen}
					onRequestClose={this.closeModal}
					style={ModalStyle}>
					Welcome to AirPnMe!
					<br/>
						<button className="guest-login"
							onClick={()=>this.props.login({user: { email: 'guest@guest.com', password: 'password' }})}>
							Guest Login
						</button>
						<form onSubmit={this.handleSubmit} >
							{this.renderErrors()}
							<div className="login-form">
								<br/>

									<input type={inputType}
										placeholder="First name"
										value={this.state.fname}
										onChange={this.update("fname")}
										className="login-input" />

								<br/>

									<input type={inputType}
										placeholder="Last name"
										value={this.state.lname}
										onChange={this.update("lname")}
										className="login-input" />

								<br/>

									<input type="email"
										placeholder="Email address"
										value={this.state.email}
										onChange={this.update("email")}
										className="login-input" />

								<br/>

									<input type="password"
										placeholder="Create a Password"
										value={this.state.password}
										onChange={this.update("password")}
										className="login-input" />

								<br/>
								<input className="submit-login" type="submit" value={this.state.modalType} />
								<br/>

							</div>
						</form>
						<div className="alt-sign-in-option">
							{this.state.modalType==="Log in" ? "Don't have an account?"
								: "Already have an AirPnMe account?"}
							</div>
							<div className="nav-link-sign-in">{this.navLink()}</div>
					</Modal>
			</div>
		);
	}

}

export default withRouter(SessionForm);

/*
<label>{this.state.modalType === "login" ? "":"First Name:"}
</label>
<label>{this.state.modalType === "login" ? "":"Last Name:"}
</label>
<label>Email:
</label>
<label>Password:
</label>
*/
