import React from "react";
import "./contact.styles.scss";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log("");

    this.setState({ name: "", email: "", message: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
    console.log("");
  };

  render() {
    return (
      <div className="contact-page">
        <h2 className="title">Message Us</h2>

        <span>Complete this form and we will get back to you in 24 hours.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="name"
            label="Name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="textarea"
            name="message"
            label="Message"
            value={this.state.message}
            onChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">{"Send"}</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactPage;
