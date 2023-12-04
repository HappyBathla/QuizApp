import React, { useState } from "react";
import "./rightnext.css";
import { GiSpeaker } from "react-icons/gi";
import { FaFlag } from "react-icons/fa";

const RightNext = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showScore, setShowScore] = useState(false);
    const [userArrangement, setUserArrangement] = useState([]);
    // Add quiz questions and answer options here

    const questions = [
        {
            question: "What is the Capital of France?",
            type: 'radio',
            options: ['paris', 'Berlin', 'London', 'Rome'],
            answer: 'paris',
        },
        {
            question: 'Which plants are considered gas giants?',
            type: 'checkbox',
            options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
            answers: ['Jupiter', 'Saturn'],
        },
        {
            question: 'Who is the CEO of Tesla?',
            type: 'input',
            answer: 'Elon Musk',
        },
        {
            question: "How many continents are there in the world?",
            type: "radio",
            options: ["5", "6", "7", "8"],
            answer: "7",
        },
        {
            question: "What is the largest mammal on Earth?",
            type: "radio",
            options: ["Elephant", "Blue Whale", "Giraffe", "Lion"],
            answer: "Blue Whale",
        },
        {
            question: "Which planet is known as the Red Planet?",
            type: "input",
            answer: "Mars",
        },
        {
            question: 'Arrange the planets in order of their distance from the sun.',
            type: 'arrangement',
            options: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
            correctOrder: [1, 2, 3, 4, 5, 6, 7, 8],
        },
        {
            question: "The largest ocean in the world is the __________ Ocean.",
            type: "radio",
            options: ["Himalayan", "Pacific", "Northern", "Eastern"],
            answer: "Pacific",
        },

        {
            question: "Which programming language is known for its flexibility and readability?",
            type: "radio",
            options: ["JavaScript", "Python", "Java", "C++"],
            answer: "Python",
        },
        {
            question: "Mount Everest is the highest peak in the __________ mountain range.",
            type: "radio",
            options: ["Himalayan", "Pacific", "Northern", "Eastern"],
            answer: "Himalayan",
        },

    ];

    const handleAnswerSelection = (questionIndex, selectedAnswer) => {
        const updatedAnswers = [...answers];
        updatedAnswers[questionIndex] = selectedAnswer;
        setAnswers(updatedAnswers);

        // Check if it's an arrangement-type question and update userArrangement
        if (questions[questionIndex].type === 'arrangement') {
            setUserArrangement(selectedAnswer);
        }
    };
    const handleNextQuestion = () => {
        if (
            answers[currentQuestion] === questions[currentQuestion].answer ||
            JSON.stringify(answers[currentQuestion]) ===
            JSON.stringify(questions[currentQuestion].answer)
        ) {
            setScore(score + 1);
        }
        // Check for arrangement-type questions
        if (
            questions[currentQuestion].type === 'arrangement' &&
            JSON.stringify(userArrangement) === JSON.stringify(questions[currentQuestion].correctOrder)
        ) {
            setScore(score + 1);
        }
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        }
        else {
            setShowScore(true);
        }
    };
    const handleButtonClick = (questionIndex, selectedOption) => {
        setCurrentQuestion(questionIndex);
        setSelectedAnswer(selectedOption);
    };
    const isCorrectAnswer = (question) => {
        return selectedAnswer == question.correctAnswer;
    };
    return (
        <div className="rightnext">
            <span>Report a Mistake</span>
            <h1>Task Quiz</h1>
            <GiSpeaker className="speak" />
            <div className="butt">

                {[...Array(10).keys()].map((index) => (
                    <button key={index} onClick={() => handleButtonClick(index)}
                        style={{
                            backgroundColor: selectedAnswer === index ? (isCorrectAnswer(questions[currentQuestion]) ? 'green' : 'red') : '',
                        }}>
                        {index + 1}
                    </button>
                ))}
            </div>
            <div className="flag" >
                <FaFlag />
                Flag for later
            </div>

            {/* render quiz UI */}
            {showScore ? (
                <div>
                    <h2>Quiz Complete!</h2>
                    <h3>Your Score: {score}</h3>
                </div>
            ) : (
                <div className="question">
                    <h2>Question {currentQuestion + 1}</h2>
                    <h3>{questions[currentQuestion].question}</h3>
                    {questions[currentQuestion].type === 'radio' && (
                        <ul>
                            {questions[currentQuestion].options.map((option, index) => (
                                <li key={index}>
                                    <input
                                        type="radio"
                                        name={`question${currentQuestion}`}
                                        value={option}
                                        onChange={() =>
                                            handleAnswerSelection(currentQuestion, option)
                                        }
                                    />
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )}
                    {questions[currentQuestion].type === 'arrangement' && (
                        <ul>
                            {questions[currentQuestion].options.map((option, index) => (
                                <li key={index}>
                                    <span>{option}</span>
                                    <select
                                        value={userArrangement[index]}
                                        onChange={(e) => handleAnswerSelection(currentQuestion, e.target.value)}
                                    >
                                        {questions[currentQuestion].options.map((_, i) => (
                                            <option key={i} value={i + 1}>
                                                {i + 1}
                                            </option>
                                        ))}
                                    </select>
                                </li>
                            ))}
                        </ul>
                    )}

                    {questions[currentQuestion].type === 'checkbox' && (
                        <ul>
                            {questions[currentQuestion].options.map((option, index) => (
                                <li key={index}>
                                    <input
                                        type="checkbox"
                                        name={`question${currentQuestion}`}
                                        value={option}
                                        onChange={() =>
                                            handleAnswerSelection(currentQuestion, option)
                                        }
                                    />
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )}
                    {questions[currentQuestion].type === 'input' && (
                        <input
                            type="text"
                            onChange={(e) => {
                                handleAnswerSelection(currentQuestion, e.target.value)
                            }}
                        />
                    )}
                    <button onClick={handleNextQuestion}>Next Question</button>
                </div>
            )}
        </div>
    );
}
export default RightNext;