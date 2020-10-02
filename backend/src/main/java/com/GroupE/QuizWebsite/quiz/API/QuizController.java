// basic beginnings of an API
package com.GroupE.QuizWebsite.quiz.API;

import com.GroupE.QuizWebsite.quiz.model.Quiz;
import com.GroupE.QuizWebsite.quiz.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/backend")
@RestController
public class QuizController {

    private QuizService quizService;

    @Autowired
    public QuizController(QuizService quizService) {
        this.quizService = quizService;
    }

    @PostMapping
    public void addQuiz(@RequestBody Quiz quiz){
        quizService.addQuiz(quiz);
    }

    @GetMapping
    public List<Quiz> getQuizzes(){
        return quizService.getQuizzes();
    }
}
