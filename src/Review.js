import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) return 0;
    if (number < 0) return people.length - 1;
    return number;
  };

  const prevPerson = () => {
    let newIndex = index - 1;
    newIndex = checkNumber(newIndex);
    setIndex(newIndex);
  };

  const nextPerson = () => {
    let newIndex = index + 1;
    newIndex = checkNumber(newIndex);
    setIndex(newIndex);
  };

  const randomPerson = () => {
    let newRandom = Math.floor(Math.random() * people.length);
    if (newRandom === index) {
      randomPerson();
    } else {
      setIndex(newRandom);
    }
  };

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronLeft onClick={prevPerson} />
        </button>
        <button className="next-btn">
          <FaChevronRight onClick={nextPerson} />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Random
      </button>
    </article>
  );
};

export default Review;
