package me.quizzl.backend.controllers;

import me.quizzl.backend.models.Submission;
import me.quizzl.backend.services.SubmissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RequestMapping("api/submission")
@RestController
public class SubmissionController {
    private SubmissionService submissionService;

    @Autowired
    public SubmissionController(SubmissionService submissionService) {
        this.submissionService = submissionService;
    }

    @PostMapping
    public void addSubmission(@RequestBody Submission submission){
        submissionService.addSubmission();
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
