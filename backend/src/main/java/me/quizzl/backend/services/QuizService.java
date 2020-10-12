
package me.quizzl.backend.services;

import me.quizzl.backend.models.Quiz;
import me.quizzl.backend.models.Question;
import me.quizzl.backend.repositories.QuizRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class QuizService {
    @Autowired
    private QuizRepository quizRepository;

    public Quiz addQuiz() {
        var quiz = new Quiz();
        return quizRepository.save(quiz);
    }

    public List<Quiz> getQuizzes() {
        return quizRepository.findAll();
    }
}
