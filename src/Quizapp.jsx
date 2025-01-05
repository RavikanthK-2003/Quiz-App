import React, {useState} from 'react';
import {data} from './data';
import './quizStyle.css';

const Quizapp = () => {
  const [index, setIndex] = useState(0);
  const [option, setOption] = useState(null);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  const correctAnswers = ['Option1', 'Option2', 'Option1', 'Option4', 'Option2', 'Option2', 'Option1', 'Option1', 'Option3', 'Option1'];

  const handleClick = () => {
    if (index < data.length-1) {
      if (correctAnswers[index] === option) {
        setScore(score+1);
      }
      setIndex(index+1);
      setOption(null);
    } else {
      setFinished(true);
    }
  }

  const handleSelect = (opt) => {
    setOption(opt);
  }

  if (finished) {
    return (
      <div className='scorePage'>
      <h1>Quiz Finished</h1>
      <h3>Your score is {score} out of {data.length}</h3>
      </div>
    )
  }

  return (
    <div className='quiz'>
      <h3>{data[index].Question}</h3>
      <ul>
        <li 
          className={option === 'Option1' ? 'selected': ''} 
          onClick={() => {handleSelect('Option1')}}
        >{data[index].Option1}</li>

        <li
          className={option === 'Option2' ? 'selected': ''} 
          onClick={() => {handleSelect('Option2')}}
        >{data[index].Option2}</li>

        <li
          className={option === 'Option3' ? 'selected': ''} 
          onClick={() => {handleSelect('Option3')}}
        >{data[index].Option3}</li>
                  
        <li 
          className={option === 'Option4' ? 'selected': ''} 
          onClick={() => {handleSelect('Option4')}}
        >{data[index].Option4}</li>
      </ul>
      
      <button onClick={handleClick} disabled={!option}>Next</button>
      <p>Question {index+1} of {data.length}</p>
    </div>
  )
}

export default Quizapp