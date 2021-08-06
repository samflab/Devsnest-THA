import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("india");
  const [acceptedTerms, setAcceptedTerms] = useState("false");
  const [showData, setShowData] = useState("");

  const handleSubmit = (event) => {
    setShowData("data is here: ");
    event.preventDefault();
    console.log(
      "email: ",
      `${email}`,
      "password: ",
      `${password}`,
      "country: ",
      `${country}`,
      "terms: ",
      `${acceptedTerms}`
    );
  };
  return (
    <form>
      <h3>Create Account !</h3>
      <label>Email :</label>
      <input
        type="text"
        value={email}
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>Password :</label>
      <input
        type="password"
        value={password}
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br />
      <label>Country :</label>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option key="india">India</option>
        <option key="srilanka">Sri Lanka</option>
        <option key="pakistan">Pakistan</option>
      </select>
      <br />
      <label>
        <input
          type="checkbox"
          value={acceptedTerms}
          name="acceptTerms"
          onChange={(e) => setAcceptedTerms(e.target.value)}
        />
        Accept Terms and Conditions *
      </label>
      <br />
      <button onClick={(e) => handleSubmit(e)}>Submit</button>

      {showData ? <h3>{"email: "`${email}`}</h3> : "No data to show"}
    </form>
  );
};

export default Form;
