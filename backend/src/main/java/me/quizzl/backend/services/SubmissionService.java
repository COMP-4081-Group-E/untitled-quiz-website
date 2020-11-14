
package me.quizzl.backend.services;

import me.quizzl.backend.models.*;
import me.quizzl.backend.repositories.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.Optional;

@Service
public class SubmissionService {
    @Autowired
    private SubmissionRepository submissionRepository;

    public Submission addSubmission(Submission submission) {
        return submissionRepository.save(submission);
    }
    public void deleteSubmission(Submission submission) {
        submissionRepository.delete(submission);
    }
    public Optional<Submission> getSubmissionByID(UUID id){
        return submissionRepository.findById(id);
    }

    public List<Submission> getSubmissions() {
        return submissionRepository.findAll();
    }
}

