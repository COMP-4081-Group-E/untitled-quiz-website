
package me.quizzl.backend.services;

import me.quizzl.backend.models.*;
import me.quizzl.backend.repositories.QuizRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class QuizService {
    @Autowired
    private QuizRepository quizRepository;

    public Quiz addQuiz() {
        var quiz = new Quiz();
        return quizRepository.save(quiz);
    }

    public Quiz getQuizByID(UUID id) {
        return quizRepository.getOne(id);
    }

    public List<Quiz> getQuizzes() {
        return quizRepository.findAll();
    }
    
    public double gradeSubmission(Submission submission) {
         
         UUID quizId = submission.getQuizId();
         Quiz quiz = getQuizByID(quizId);
         List<Question> quizQuestions = quiz.getQuestions();
         List<Answer> submissionAnswers = submission.getAnswers();
         
         for(int i = 0; i < quizQuestions.size(); i++) {
            // Sets each answers isCorrect value based on the comparison done with the correct answer and submitted answer  
            submissionAnswers.get(i).setIsCorrect(quizQuestions.get(i).evaluateAnswer(submissionAnswers.get(i)));
        }
        
        return submission.getTotalQuestions() / submission.getNumCorrect();

    
    
    }
}

