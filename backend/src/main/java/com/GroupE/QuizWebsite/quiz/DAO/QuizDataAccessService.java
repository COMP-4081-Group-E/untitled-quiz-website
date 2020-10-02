// class for accessing and adding to a database
package com.GroupE.QuizWebsite.quiz.DAO;

import com.GroupE.QuizWebsite.quiz.model.Quiz;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository("quizDao")
public class QuizDataAccessService implements QuizDao {

    private static List<Quiz> dataBase = new ArrayList<>();

    @Override
    public int insertQuiz(UUID id, Quiz quiz) {
        dataBase.add(new Quiz(id));
        return 1;
    }

    @Override
    public List<Quiz> selectQuizzes() {
        return dataBase;
    }
}
