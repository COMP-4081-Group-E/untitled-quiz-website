// basic beginnings of an API
package me.quizzl.backend.controllers;

import me.quizzl.backend.models.MultipleChoice;
import me.quizzl.backend.models.Quiz;
import me.quizzl.backend.requests.QuestionRequest;
import me.quizzl.backend.services.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

class CreateQuizRequest {
    private String title;
    private List<QuestionRequest> questions;

    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public List<QuestionRequest> getQuestions() {
        return questions;
    }
    public void setQuestions(List<QuestionRequest> questions) {
        this.questions = questions;
    }
}

@RequestMapping("api/quiz")
@RestController
public class QuizController {
    private QuizService quizService;

    @Autowired
    public QuizController(QuizService quizService) {
        this.quizService = quizService;
    }

    @PostMapping
    public ResponseEntity<UUID> addQuiz(@RequestBody CreateQuizRequest request) {
        var quiz = new Quiz(request.getTitle());

        for (var q : request.getQuestions()) {
            var question = new MultipleChoice(q.getQuestionStr(), q.getCorrectAnswer(),
                new String[] { q.getIncorrectAnswer(), q.getIncorrectAnswer2(), q.getIncorrectAnswer3() });
            quiz.addQuestion(question);
        }
        
        var newQuiz = quizService.saveQuiz(quiz);
        return new ResponseEntity<UUID>(newQuiz.getQuizId(), HttpStatus.CREATED);
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
