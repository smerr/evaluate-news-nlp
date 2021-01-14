const getPolarity = (score) => {
  let display;

  // from https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/response
  switch (score) {
    case "P+":
      display = "Strong positive";
      break;
    case "P":
      display = "Positive";
      break;
    case "NEU":
      display = "Neutral";
      break;
    case "N":
      display = "Negative";
      break;
    case "N+":
      display = "Strong Negative";
      break;
    case "NONE":
      display = "Without Sentiment";
  }

  return display;
};

export { getPolarity };
