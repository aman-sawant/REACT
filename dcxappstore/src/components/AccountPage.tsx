import "./AccountPage.css";

const AccountPage = () => {
  return (
    <div className="account-container">

      <h2>Personal Information</h2>

      <div className="form">

        <div className="field">
          <label>Name</label>
          <input type="text" value="Deeksha" />
        </div>

        <div className="field">
          <label>Email address</label>
          <input type="email" value="deeksha@gmail.com" />
          <small>We’ll never share your email with anyone else.</small>
        </div>

        <div className="field">
          <label>Mobile Number</label>
          <input type="text" value="7890000000" />
        </div>

        <div className="field">
          <label>Address</label>
          <input type="text" value="1234 Main St" />
        </div>

        <div className="field">
          <label>Address 2</label>
          <input type="text" placeholder="Apartment, studio or floor" />
        </div>

        {/* Row fields */}
        <div className="row">
          <div className="field">
            <label>City</label>
            <input type="text" />
          </div>

          <div className="field">
            <label>State</label>
            <select>
              <option>Select</option>
              <option>Maharashtra</option>
              <option>Delhi</option>
            </select>
          </div>

          <div className="field">
            <label>Zip</label>
            <input type="text" />
          </div>
        </div>

        <button className="save-btn">Save</button>
      </div>

      {/* FAQ */}
      <div className="faq">
        <h3>FAQs</h3>

        <p><strong>What happens when I update my email address?</strong></p>
        <p>Your login email changes. You'll receive all communication on updated email.</p>

        <p><strong>When will my account be updated?</strong></p>
        <p>It happens as soon as verification is complete.</p>

        <p><strong>Does updating email affect my account?</strong></p>
        <p>No, your account remains fully functional.</p>
      </div>

    </div>
  );
};

export default AccountPage;