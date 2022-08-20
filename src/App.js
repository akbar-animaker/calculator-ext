/* global chrome */
import React, { useState } from "react";
import Wrapper from "./components/Wrapper";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import Screen from "./components/Screen";

function App() {
  const [calc, setcalc] = useState({ sign: "", num: 0, result: 0 });
  const btnValues = [
    ["+-", "%", "AC"],
    [7, 8, 9, "/"],
    [4, 5, 6, "x"],
    [1, 2, 3, "-"],
    [0, ".", "+", "="],
  ];

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    chrome.runtime.sendMessage(
      { function: "numClickHandler", value, calc },
      function (response) {
        setcalc({ ...response });
      }
    );
  };

  const decimalClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    chrome.runtime.sendMessage(
      { function: "decimalClickHandler", value, calc },
      function (response) {
        setcalc({ ...response });
      }
    );
  };

  const operatorClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    chrome.runtime.sendMessage(
      { function: "operatorClickHandler", value, calc },
      function (response) {
        setcalc({ ...response });
      }
    );
  };

  const equalsClickHandler = () => {
    if (calc.num && calc.sign) {
      chrome.runtime.sendMessage(
        { function: "equalsClickHandler", calc },
        function (response) {
          setcalc({ ...response });
        }
      );
    }
  };

  const percentClickHandler = () => {
    chrome.runtime.sendMessage(
      { function: "percentClickHandler", calc },
      function (response) {
        setcalc({ ...response });
      }
    );
  };

  const invertClickHandler = () => {
    chrome.runtime.sendMessage(
      { function: "invertClickHandler", calc },
      function (response) {
        setcalc({ ...response });
      }
    );
  };

  const resultClickHandler = () => {
    chrome.runtime.sendMessage(
      { function: "resultClickHandler", calc },
      function (response) {
        setcalc({ ...response });
      }
    );
  };

  return (
    <Wrapper>
      <Screen value={calc.num ? calc.num : calc.result} />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equals" : btn === "AC" ? "delete" : ""}
              value={btn}
              onClick={
                btn === "AC"
                  ? resultClickHandler
                  : btn === "+-"
                    ? invertClickHandler
                    : btn === "%"
                      ? percentClickHandler
                      : btn === "="
                        ? equalsClickHandler
                        : btn === "/" || btn === "x" || btn === "-" || btn === "+"
                          ? operatorClickHandler
                          : btn === "."
                            ? decimalClickHandler
                            : numClickHandler
              }
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
}

export default App;
