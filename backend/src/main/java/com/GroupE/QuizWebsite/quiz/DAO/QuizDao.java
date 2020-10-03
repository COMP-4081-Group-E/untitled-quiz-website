package com.GroupE.QuizWebsite.quiz.DAO;

import com.GroupE.QuizWebsite.quiz.model.Quiz;

import java.util.List;
import java.util.UUID;

public interface QuizDao {
    int insertQuiz(UUID id, Quiz quiz);

    default int insertQuiz(Quiz quiz){
        UUID id = UUID.randomUUID();
        return insertQuiz(id, quiz);
    }
    List<Quiz> selectQuizzes();
}
