import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainLayout from '../Components/MainLayout';
import styles from './Home.module.css';

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = ({}) => {
  return (
    <MainLayout>
      <div className='text-center'>
        <h1>Welcome to Quizzl!</h1>
        {/* <Link to="/create/quiz">Click here to Create a Quiz</Link> */}
        <Button href = "/create/quiz">Click here to Create a Quiz</Button>
      </div>
    </MainLayout>
  );
};

export default Home;