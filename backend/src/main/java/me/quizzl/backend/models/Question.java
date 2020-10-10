package me.quizzl.backend.models;

import javax.persistence.Column;
import javax.persistence.Entity;

// Base question class that other question types will inherit from (e.g. MultipleChoice, TrueFalse, ShortAnswer, etc.)
@Entity
public class Question {
    
    @Column(name = "question_string")
    private String questionStr;
    @Column(name = "correct_answer")
    private String correctAnswer;

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
    public void setCorrectAnswer(String correctAnswer) {
        this.correctAnswer = correctAnswer;
    }
    public void setQuestion(String questionStr) {
        this.questionStr = questionStr;
    }

    @Override
    public String toString() {
        return("Question: " + this.questionStr + " , " + "Answer:" + this.correctAnswer);
    }

}
