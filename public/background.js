/* global chrome */

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

  if (request.function === "numClickHandler") {
    const { value, calc } = request;
    calc.num =
      calc.num === 0 && value === "0"
        ? "0"
        : calc.num % 1 === 0
          ? Number(calc.num + value)
          : calc.num + value;
    calc.result = !calc.sign ? 0 : calc.result;
    // Sending response to frontend
    sendResponse(calc);

  } else if (request.function === "decimalClickHandler") {

    const { value, calc } = request;
    calc.num = !calc.num.toString().includes(".") ? calc.num + value : calc.num;
    sendResponse(calc);

  } else if (request.function === "operatorClickHandler") {

    const { value, calc } = request;
    calc.result = !calc.result && calc.num ? calc.num : calc.result;
    calc.sign = value;
    calc.num = 0;
    sendResponse(calc);

  } else if (request.function === "equalsClickHandler") {

    const { calc } = request;

    const calculateFunction = (a, b, operator) => {
      return operator === "+"
        ? a + b
        : operator === "-"
          ? a - b
          : operator === "/"
            ? a / b
            : a * b;
    };

    calc.result =
      calc.num === "0" && calc.sign === "/"
        ? "can't divide with 0"
        : calculateFunction(Number(calc.result), Number(calc.num), calc.sign);
    calc.num = 0;
    calc.sign = "";

    sendResponse(calc);

  } else if (request.function === "percentClickHandler") {

    const { calc } = request;
    let num = calc.num ? parseFloat(calc.num) : 0;
    let result = calc.result ? parseFloat(calc.result) : 0;

    calc.num = num /= Math.pow(100, 1);
    calc.result = result /= Math.pow(100, 1);

    sendResponse(calc);

  } else if (request.function === "invertClickHandler") {

    const { calc } = request;
    calc.num = calc.num ? calc.num * -1 : 0;
    calc.result = calc.result ? calc.result * -1 : 0;
    calc.sign = "";
    sendResponse(calc);

  } else {

    // ResultClickHandler
    const { calc } = request;
    calc.num = 0;
    calc.sign = "";
    calc.result = 0;
    sendResponse(calc);
  }
});
