import { Component, Fragment } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
`;

const EmailInput = styled.input`
	flex: 1;
	border: 2px solid #01234B;
	background-color: #fff;
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
	font-size: 1rem;
	line-height: 1;
	padding: .5rem .75rem .6rem;

	&:disabled {
		background-color: #eee;
		border-color: #eee;
	}
`;

const SubmitButton = styled.input`
	background-color: #01234B;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #fff;
	font-weight: 400;
	line-height: 1;
	border: 2px solid #01234B;
	padding: .5rem .75rem .6rem;
	margin-left: -2px;

	&:hover {
		background-color: purple;
		cursor: pointer;
	}

	&:disabled {
		color: #65778B;
	}
`;

const SubmittedMessage = styled.div`
	flex: auto;
	border: 2px solid green;
	background-color: green;
	color: #fff;
	border-radius: 8px;
	font-size: 1rem;
	line-height: 1;
	padding: .5rem .75rem .6rem;
`;

class EmailSignup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			submitted: false,
			submitting: false,
			error: false,
			email: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({email: event.target.value});
	}

	handleSubmit(event) {
		fetch('/api/emailSignup', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ email: this.state.email })
		})
		.then(response => {
			if (response.error) {
				this.setState({
					submitting: false,
					submitted: false,
					error: true
				});
				return;
			}
			this.setState({
				submitting: false,
				submitted: true,
				error: false,
			}) 
		})
		.catch(error => {
			this.setState({
				submitting: false,
				submitted: false,
				error: true,
			});
			console.error(error);
		});
		 
		event.preventDefault();
	}

	render() {
		const {
			email,
			submitted,
			submitting,
			error
		} = this.state;

		return(
			<FormContainer onSubmit={this.handleSubmit}>
			  {!submitted && <React.Fragment>
					  <EmailInput disabled={submitting} type="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter your email" />
					  <SubmitButton disabled={submitting} type="submit" value="Sign up" />
				  </React.Fragment>
				}
				{submitted && <SubmittedMessage>Thanks for sharing!</SubmittedMessage>}
			</FormContainer>
		);
	}
}

export default EmailSignup;