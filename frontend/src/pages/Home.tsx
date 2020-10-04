import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = ({}) => {
  return (
    <main className={styles.app}>
      <h1>Welcome to Quizzl!</h1>
      <Link to="/create/quiz">Click here to Create a Quiz</Link>
    </main>
  );
};

export default Home;