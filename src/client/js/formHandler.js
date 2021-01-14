import { getPolarity } from "./polarityChecker";
import { checkForNewsURL } from "./textChecker";

function handleSubmit(event) {
  event.preventDefault();

  // check what was put into the form field
  let url_input = document.getElementById("url").value;

  if (Client.checkForNewsURL(url_input)) {
    console.log("::: Form Submitted :::");

    //our server with the endpoint we want to hit
    const serverURL = "http://localhost:8080/evaluateURL";
    //the information we are sending to the endpoint
    const params = `?url=${url_input}`;
    const fullServerURL = `${serverURL}${params}`;

    fetch(fullServerURL)
      .then((res) => res.json())
      .then((res) => {
        updateUI(res);
      });
  } else {
    // error message when URL not valid
    alert("Not a Valid URL, try again");
  }
}

function updateUI(res) {
  document.getElementById("polarity").innerHTML =
    "Polarity: " + Client.getPolarity(res.score_tag);
  document.getElementById("agreement").innerHTML =
    "Agreement: " + res.agreement;
  document.getElementById("subjectivity").innerHTML =
    "Subjectivity: " + res.subjectivity;
  document.getElementById("confidence").innerHTML =
    "Confidence: " + res.confidence;
  document.getElementById("irony").innerHTML = "Irony: " + res.irony;
}
export { handleSubmit, getPolarity, checkForNewsURL };
