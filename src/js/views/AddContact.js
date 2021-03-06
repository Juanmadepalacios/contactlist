import React from "react";
import { Link } from "react-router-dom";
import { Context } from "./../store/appContext";

export default class AddContact extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container">
							<div>
								<h1 className="text-center mt-5">Add a new contact</h1>
								<form>
									<div className="form-group">
										<label>Full Name</label>
										<input
											type="text"
											className="form-control"
											placeholder="Full Name"
											name="full_name"
											onChange={e => actions.handleChange(e)}
										/>
									</div>
									<div className="form-group">
										<label>Email</label>
										<input
											type="email"
											className="form-control"
											placeholder="Enter email"
											name="email"
											onChange={e => actions.handleChange(e)}
										/>
									</div>
									<div className="form-group">
										<label>Phone</label>
										<input
											type="phone"
											className="form-control"
											placeholder="Enter phone"
											name="phone"
											onChange={e => actions.handleChange(e)}
										/>
									</div>
									<div className="form-group">
										<label>Address</label>
										<input
											type="text"
											className="form-control"
											placeholder="Enter address"
											name="address"
											onChange={e => actions.handleChange(e)}
										/>
									</div>
									<button
										type="button"
										className="btn btn-primary form-control"
										onClick={() => actions.handleSubmit()}>
										save
									</button>
									<Link className="mt-3 w-100 text-center" to="/">
										or get back to contacts
									</Link>
								</form>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
