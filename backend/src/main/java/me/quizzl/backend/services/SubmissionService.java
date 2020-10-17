
package me.quizzl.backend.services;

import me.quizzl.backend.models.*;
import me.quizzl.backend.repositories.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.UUID;
import java.util.Optional;

@Service
public class SubmissionService {
    @Autowired
    private SubmissionRepository submissionRepository;

    public Submission addSubmission() {
        var submission = new Submission();
        return submissionRepository.save(submission);
    }

    public Optional<Submission> getSubmissionByID(UUID id){
        return submissionRepository.findById(id);
    }

    public List<Submission> getSubmissions() {
        return submissionRepository.findAll();
    }
    
    public double gradeSubmission(Submission submission) {
         
         UUID quizId = submission.getQuizId();
         QuizService quizService = new QuizService();
         Optional<Quiz> optionalQuiz =  quizService.getQuizByID(quizId);
         Quiz quiz = optionalQuiz.get();
         List<Question> quizQuestions = quiz.getQuestions();
         List<Answer> submissionAnswers = submission.getAnswers();
         
         for(int i = 0; i < quizQuestions.size(); i++) {
            // Sets each answers isCorrect value based on the comparison done with the correct answer and submitted answer  
            submissionAnswers.get(i).setIsCorrect(quizQuestions.get(i).evaluateAnswer(submissionAnswers.get(i)));
        }

        return submission.getTotalQuestions() / submission.getNumCorrect();

    
    
    }
}

