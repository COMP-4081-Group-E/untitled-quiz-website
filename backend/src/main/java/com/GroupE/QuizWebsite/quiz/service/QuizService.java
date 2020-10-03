
package com.GroupE.QuizWebsite.quiz.service;

import com.GroupE.QuizWebsite.quiz.DAO.QuizDao;
import com.GroupE.QuizWebsite.quiz.model.Quiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizService {
    private QuizDao quizDao;

    @Autowired
    public QuizService(@Qualifier("quizDao") QuizDao quizDaod){
        this.quizDao = quizDaod;
    }

    public int addQuiz(Quiz quizID){
        return quizDao.insertQuiz(quizID);
    }

    public List<Quiz> getQuizzes(){
        return quizDao.selectQuizzes();
    }

}
