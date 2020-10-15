
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
    
    public Grade gradeSubmission(Submission submission) {
         
         Grade grade = new Grade();
         UUID quizId = submission.getQuizId();
         Quiz quiz = getQuizByID(quizId);
         List<Question> quizQuestions = quiz.getQuestions();
         List<Answer> submissionAnswers = submission.getAnswers();
         
         for(int i = 0; i < quizQuestions.size(); i++) {
             Boolean isCorrect = quizQuestions.get(i).evaluateAnswer(submissionAnswers.get(i));
        
            if(isCorrect) {
                grade.incrementCorrect();
            }
            else {
                 grade.incrementIncorrect();
            }
        }

    return grade;
    
    }
}

