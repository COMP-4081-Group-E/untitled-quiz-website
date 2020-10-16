// basic beginnings of an API
package me.quizzl.backend.controllers;

import me.quizzl.backend.models.Quiz;
import me.quizzl.backend.services.QuizService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;
import java.util.Optional

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

    @GetMapping("/{id}")
    public ResponseEntity<Quiz> getQuiz(@PathVariable String id){
        var quiz = quizService.getQuizByID(UUID.fromString(id));
        if (quiz.isPresent()) {
            return new ResponseEntity<Quiz>(quiz.get(), HttpStatus.OK);
        }
        return new ResponseEntity<Quiz>(HttpStatus.NOT_FOUND);
    }
}
