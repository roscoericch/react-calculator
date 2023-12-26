import React, { useState } from "react";
import { Button, Radio } from "antd";
import BackSpaceIcon from "./icons/BackSpaceIcon";
import "./calculator.css";

const Calculator = () => {
  const [calc, setCalc] = useState("");
  const [runtimeAns, setRuntimeAns] = useState("0");
  const [anglFunc, setAnglFunc] = useState("Deg");
  const handleButtonClick = (value: string) => {
    setCalc((prevInput) => prevInput + value);
  };
  const handleClear = () => {
    setCalc("");
  };
  const handleDelete = () => {
    setCalc((prevInput) => prevInput.slice(0, -1));
  };
  const handleCalculate = () => {
    try {
      const result = eval(
        calc
          .replaceAll(
            "sin(",
            anglFunc === "Deg" ? "Math.sin(Math.PI / 180*" : "Math.sin("
          )
          .replaceAll(
            "cos(",
            anglFunc === "Deg" ? "Math.cos(Math.PI / 180*" : "Math.cos("
          )
          .replaceAll(
            "tan(",
            anglFunc === "Deg" ? "Math.tan(Math.PI / 180*" : "Math.tan("
          )
          .replaceAll("ln", "Math.log")
          .replaceAll("log", "Math.log10")
          .replaceAll("√", "Math.sqrt")
          .replaceAll("π", "Math.PI")
          .replaceAll("ANS", `${runtimeAns}`)
          .replaceAll("^", "**")
          .replaceAll("%", "/100")
          .replaceAll("e^(", "Math.exp(")
          .replaceAll("E", "10**")
      ).toString();
      setCalc(result);
      setRuntimeAns(result);
    } catch (error) {
      setCalc("Error");
    }
  };
  return (
    <div className="container">
      <span className="screen">{calc}</span>
      <div className="btn-container">
        <Radio.Group
          options={[
            { label: "Rad", value: "Rad" },
            { label: "Deg", value: "Deg" },
          ]}
          onChange={(e) => setAnglFunc(e.target.value)}
          value={anglFunc}
          defaultValue={"Deg"}
          optionType="button"
          className="col-span-2 !flex"
        />
        <Button>x!</Button>
        <Button onClick={() => handleButtonClick("(")}>{`(`}</Button>
        <Button onClick={() => handleButtonClick(")")}>{`)`}</Button>
        <Button onClick={() => handleButtonClick("%")}>%</Button>
        <Button onClick={handleClear}>AC</Button>
        {/* <Button>Inv</Button> */}
        <Button onClick={() => handleButtonClick("sin(")}>sin</Button>
        <Button onClick={() => handleButtonClick("ln(")}>ln</Button>
        <Button onClick={() => handleButtonClick("7")}>7</Button>
        <Button onClick={() => handleButtonClick("8")}>8</Button>
        <Button onClick={() => handleButtonClick("9")}>9</Button>
        <Button onClick={() => handleButtonClick("/")}>÷</Button>
        <Button onClick={() => handleButtonClick("π")}>π</Button>
        <Button onClick={() => handleButtonClick("cos(")}>cos</Button>
        <Button onClick={() => handleButtonClick("log(")}>log</Button>
        <Button onClick={() => handleButtonClick("4")}>4</Button>
        <Button onClick={() => handleButtonClick("5")}>5</Button>
        <Button onClick={() => handleButtonClick("6")}>6</Button>
        <Button onClick={() => handleButtonClick("*")}>×</Button>
        <Button onClick={() => handleButtonClick("e^(")}>e</Button>
        <Button onClick={() => handleButtonClick("tan(")}>tan</Button>
        <Button onClick={() => handleButtonClick("√(")}>√</Button>
        <Button onClick={() => handleButtonClick("1")}>1</Button>
        <Button onClick={() => handleButtonClick("2")}>2</Button>
        <Button onClick={() => handleButtonClick("3")}>3</Button>
        <Button onClick={() => handleButtonClick("-")}>−</Button>
        <Button onClick={() => handleButtonClick("ANS")}>ANS</Button>
        <Button onClick={() => handleButtonClick("E(")}>EXP</Button>
        <Button onClick={() => handleButtonClick("^")}>
          x<sup>y</sup>
        </Button>
        <Button onClick={() => handleButtonClick("0")}>0</Button>
        <Button onClick={() => handleButtonClick(".")}>.</Button>
        <Button
          icon={<BackSpaceIcon className="backspaceIcon" />}
          onClick={handleDelete}
          className="!w-full"
        />
        <Button onClick={() => handleButtonClick("+")}>+</Button>
        <Button
          className="!bg-[#066FA9]"
          onClick={handleCalculate}
          type="primary"
        >
          =
        </Button>
      </div>
    </div>
  );
};

export default Calculator;
