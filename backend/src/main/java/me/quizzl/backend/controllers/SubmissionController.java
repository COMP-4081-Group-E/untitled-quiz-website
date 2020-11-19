package me.quizzl.backend.controllers;

import me.quizzl.backend.models.Answer;
import me.quizzl.backend.models.Submission;
import me.quizzl.backend.services.QuizService;
import me.quizzl.backend.services.SubmissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

class CreateSubmissionRequest {
    private UUID quizId;
    private Map<Long, String> answers;

    public UUID getQuizId() {
        return quizId;
    }
    public void setQuizId(UUID quizId) {
        this.quizId = quizId;
    }

    public Map<Long, String> getAnswers() {
        return answers;
    }
    public void setAnswers(Map<Long, String> answers) {
        this.answers = answers;
    }
}

@CrossOrigin
@RequestMapping("api/submission")
@RestController
public class SubmissionController {
    private QuizService quizService;
    private SubmissionService submissionService;

    @Autowired
    public SubmissionController(QuizService quizService, SubmissionService submissionService) {
        this.quizService = quizService;
        this.submissionService = submissionService;
    }

    @PostMapping
    public ResponseEntity<Double> addSubmission(@RequestBody CreateSubmissionRequest request) {
        var possibleQuiz = quizService.getQuizByID(request.getQuizId());
        if (possibleQuiz.isEmpty()) {
            return new ResponseEntity<Double>(HttpStatus.BAD_REQUEST);
        }
        var quiz = possibleQuiz.get();

        List<Answer> answers = request.getAnswers().values().stream()
            .map(a -> new Answer(a))
            .collect(Collectors.toList());;
        
        var submission = new Submission();
        submission.setQuiz(quiz);
        for (var answer : answers) {
            submission.addAnswer(answer);
        }

        submission.grade();
        submission = submissionService.addSubmission(submission);
        return new ResponseEntity<Double>(submission.getGrade(), HttpStatus.CREATED);
    }

    @GetMapping
    public List<Submission> getSubmissions(){
        return submissionService.getSubmissions();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Submission> getSubmission(@PathVariable String id){
        var submission = submissionService.getSubmissionByID(UUID.fromString(id));
        if (submission.isPresent()) {
            return new ResponseEntity<Submission>(submission.get(), HttpStatus.OK);
        }
        return new ResponseEntity<Submission>(HttpStatus.NOT_FOUND);
    }
}
