package me.quizzl.backend.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.GeneratedValue;
import javax.persistence.InheritanceType;
import javax.persistence.ManyToOne;

// Base question class that other question types will inherit from (e.g. MultipleChoice, TrueFalse, ShortAnswer, etc.)
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class Question {
    @Id
    @GeneratedValue
    protected Long id;

    @ManyToOne(optional = false)
    protected Quiz quiz;

    @Column(name = "question_string")
    protected String questionStr;
    @Column(name = "correct_answer")
    protected String correctAnswer;

    public Question() {

    }
    public Question(String questionStr, String correctAnswer) {
        this.questionStr = questionStr;
        this.correctAnswer = correctAnswer;
    }

    // Getters
    public String getCorrectAnswer() {
        return(this.correctAnswer);
    }

    public String getQuestion() {
        return(this.questionStr);
    }

    // Setters
    public void setQuiz(Quiz quiz) {
        this.quiz = quiz;
    }
    public void setCorrectAnswer(String correctAnswer) {
        this.correctAnswer = correctAnswer;
    }
    public void setQuestion(String questionStr) {
        this.questionStr = questionStr;
    }
    public Boolean evaluateAnswer(Answer answer) {
       String submittedAnswer = answer.getSubmittedAnswer();
        
       if(submittedAnswer.equals(this.correctAnswer)){
            return true;
        }
        else {
            return false;
        }
    }

    @Override
    public String toString() {
        return("Question: " + this.questionStr + " , " + "Answer:" + this.correctAnswer);
    }

}
