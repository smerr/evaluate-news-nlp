import { getPolarity } from "./polarityChecker";
import { checkforNewsURL } from "./textChecker";
console.log(checkforNewsURL);
function handleSubmit(event) {
  event.preventDefault();

  // check what was put into the form field
  let url_input = document.getElementById("url").value;

  if (Client.checkforNewsURL(url_input)) {
    console.log("::: Form Submitted :::");

    fetch("http://localhost:8080/text", {
      method: "POST",
      credentials: "same-origin",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: url_input }),
    })
      .then((res) => res.json())
      .then(function (res) {
        updateUI(res);
      });
  } else {
    // error message when URL not valid
    alert("Not a Valid URL, try again");
  }
}

function updateUI(res) {
  document.getElementById("pol").innerHTML =
    "Polarity: " + Client.getPolarity(res.score_tag);
  document.getElementById("agre").innerHTML = "Agreement: " + res.agreement;
  document.getElementById("sub").innerHTML =
    "Subjectivity: " + res.subjectivity;
  document.getElementById("conf").innerHTML = "Confidence: " + res.confidence;
  document.getElementById("iron").innerHTML = "Irony: " + res.irony;
}
export { handleSubmit, getPolarity, checkforNewsURL };
