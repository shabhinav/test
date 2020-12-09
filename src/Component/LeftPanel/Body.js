import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Body.scss";
import Header from "./Header";
import Footer from "./Footer";

function Body() {
  const [question, setQuestion] = useState([]);
  const [counter, setCounter] = useState(1);
  const [title, setTitle] = useState("");
  // const [section, setSection] = useState([]);
  const [nextSection, setNextSection] = useState(0);
  const [array, setArray] = useState([]);
  const [selectedOption, setSelcetedOption] = useState("");

  useEffect(() => {
    (async () => {
      try {
        let ques = await axios.get(
          ` http://5.181.217.46/DesignFacility/useGETMethodForTheResponse/[abhinav]`
        );
        setTitle(ques.data.exam.examTitle);
        setQuestion(JSON.parse(JSON.stringify(ques.data.exam.sections)));
        let array = [];
        array.push(ques.data.exam.sections[0].Section1[0]);
        setArray(array);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const nextQuesHandler = async () => {
    let array = [];
    if (question.length === nextSection) {
      console.log("error");
    } else {
      if (
        question[nextSection]["Section" + (nextSection + 1)].length - 1 ===
        counter
      ) {
        setCounter(0);
        await setNextSection(nextSection + 1);
        array.push(
          question[nextSection]["Section" + (nextSection + 1)][counter]
        );
        setArray(array);
      } else {
        setCounter(counter + 1);
        array.push(
          question[nextSection]["Section" + (nextSection + 1)][counter]
        );
        setArray(array);
      }
    }
  };

  const selectOptionHandler = (optionselected, option) => {
    console.log(optionselected);
    switch (option) {
      case "option1":
        setSelcetedOption(option);
        break;
      case "option2":
        setSelcetedOption(option);
        break;
      case "option3":
        setSelcetedOption(option);
        break;
      case "option4":
        setSelcetedOption(option);
        break;
      default:
        setSelcetedOption("");
    }
  };
  return (
    <div className="body">
      <Header question={question} title={title} />
      <div className="content">
        {array.map((ques, index) => (
          <div key={index}>
            <div className="container mt-2 mb-3">
              <h5 className="question_num">Question number</h5>
            </div>
            <div className="body_question">
              <p>{ques?.quesText}</p>
            </div>
            <div className="body_options row">
              <div className="col-md-0.5 option ">
                <p className="body_option rounded-circle">A</p>
                <p className="body_option rounded-circle">B</p>
                <p className="body_option rounded-circle">C</p>
                <p className="body_option rounded-circle">D</p>
              </div>
              <div className="col-md-11 ">
                <p
                  className="btn btn-outline-primary select_option"
                  id={selectedOption === "option1" ? "option1" : null}
                  onClick={() => selectOptionHandler(ques?.option1, "option1")}
                >
                  {ques?.option1}
                </p>
                <p
                  className="btn btn-outline-primary select_option"
                  id={selectedOption === "option2" ? "option2" : null}
                  onClick={() => selectOptionHandler(ques?.option2, "option2")}
                >
                  {ques?.option2}
                </p>
                <p
                  className="btn btn-outline-primary select_option"
                  id={selectedOption === "option3" ? "option3" : null}
                  onClick={() => selectOptionHandler(ques?.option3, "option3")}
                >
                  {ques?.option3}
                </p>
                <p
                  className="btn btn-outline-primary select_option"
                  id={selectedOption === "option4" ? "option4" : null}
                  onClick={() => selectOptionHandler(ques?.option4, "option4")}
                >
                  {ques?.option4}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer nextQuesHandler={nextQuesHandler} />
    </div>
  );
}

export default Body;
