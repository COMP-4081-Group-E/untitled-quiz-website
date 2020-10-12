package me.quizzl.backend.models;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity(name = "MultipleChoice")
public class MultipleChoice extends Question{
    
    @Column(name = "incorrect_answers")
    private String[] incorrectAnswers;
    
    public MultipleChoice() {

    }
    public MultipleChoice(String questionStr, String correctAnswer, String[] incorrectAnswers) {
        super(questionStr,correctAnswer);
        this.incorrectAnswers = incorrectAnswers;
    }
    public String[] getIncorrect() {
        return this.incorrectAnswers;
    }

    // Will likely update in the future if necessary
    @Override
    public String toString() {
        return("Question: " + this.questionStr + " , Answer: " + this.correctAnswer);
    }

}