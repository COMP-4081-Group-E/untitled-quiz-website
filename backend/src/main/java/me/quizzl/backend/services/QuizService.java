
package me.quizzl.backend.services;

import me.quizzl.backend.models.*;
import me.quizzl.backend.repositories.QuizRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.UUID;
import java.util.Optional;

@Service
public class QuizService {
    @Autowired
    private QuizRepository quizRepository;

    public Quiz addQuiz() {
        var quiz = new Quiz();
        return quizRepository.save(quiz);
    }

    public Optional<Quiz> getQuizByID(UUID id){
        return quizRepository.findById(id);
    }

    public List<Quiz> getQuizzes() {
        return quizRepository.findAll();
    }
}

