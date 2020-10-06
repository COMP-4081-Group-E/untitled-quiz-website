// basic beginnings of an API
package me.quizzl.backend.controllers;

import me.quizzl.backend.models.Quiz;
import me.quizzl.backend.services.QuizService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/quiz")
@RestController
public class QuizController {
    private QuizService quizService;

    @Autowired
    public QuizController(QuizService quizService) {
        this.quizService = quizService;
    }

    @PostMapping
    public void addQuiz(@RequestBody Quiz quiz){
        quizService.addQuiz();
    }

    @GetMapping
    public List<Quiz> getQuizzes(){
        return quizService.getQuizzes();
    }
}
