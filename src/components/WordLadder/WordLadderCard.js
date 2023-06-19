import { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Spinner from "../UI/Spinner";
import Modal from "../UI/Modal";
import WordLadder from "./WordLadder";
import { generateWordLadder } from "../../utils/generateWordLadder";
import "../../styles/WordLadderCard.scss";

const WordLadderCard = () => {
  const [firstWord, setFirstWord] = useState("");
  const [secondWord, setSecondWord] = useState("");
  const [solution, setSolution] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const resetForm = () => {
    setSolution([]);
    setIsError(false);
    setIsButtonDisabled(false);
  };

  const handleFirstWordChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z]/g, "");
    setFirstWord(value);
    resetForm();
  };

  const handleSecondWordChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z]/g, "");
    setSecondWord(value);
    resetForm();
  };

  const handleSolve = () => {
    const upperCaseFirstWord = firstWord.toUpperCase();
    const upperCaseSecondWord = secondWord.toUpperCase();

    if (
      upperCaseFirstWord.length === upperCaseSecondWord.length &&
      upperCaseFirstWord !== upperCaseSecondWord &&
      !isButtonDisabled
    ) {
      setIsLoading(true);
      setIsError(false);

      setTimeout(() => {
        const ladder = generateWordLadder(
          upperCaseFirstWord,
          upperCaseSecondWord
        );
        if (ladder.length > 0) {
          setSolution(ladder);
        } else {
          setIsError(true);
        }
        setIsLoading(false);
      }, 1000);

      setIsButtonDisabled(true);
    }
  };

  const handleModalClose = () => {
    setIsError(false);
  };

  const isFormValid =
    firstWord.length !== secondWord.length ||
    firstWord === secondWord ||
    isButtonDisabled;

  return (
    <div className="word-ladder-card">
      <div className="word-ladder-card__body">
        <Input
          id="firstWord"
          label="Enter first word:"
          value={firstWord}
          onChange={handleFirstWordChange}
          placeholder="Enter first word"
          aria-label="First Word"
        />
        {isLoading && (
          <div className="word-ladder-card__spinner">
            <Spinner aria-label="Loading" />
          </div>
        )}
        {solution.length > 0 && (
          <div className="word-ladder-card__word-ladder-list">
            <WordLadder ladder={solution} />
          </div>
        )}
        <Input
          id="secondWord"
          label="Enter second word:"
          value={secondWord}
          onChange={handleSecondWordChange}
          placeholder="Enter second word"
          aria-label="Second Word"
        />
        <Button
          label="Solve"
          onClick={handleSolve}
          disabled={isLoading || isFormValid}
        />
        {isError && <Modal onClose={handleModalClose} />}
      </div>
    </div>
  );
};

export default WordLadderCard;
