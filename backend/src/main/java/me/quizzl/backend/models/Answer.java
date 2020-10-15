package me.quizzl.backend.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Answer {
   
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id", updatable = false, nullable = false)
    protected Long id;

    @Column(name = "question_string")
    protected String questionStr;
    @Column(name = "submitted_answer")
    protected String submittedAnswer;

    @ManyToOne
    @JoinColumn(name="submission_id", nullable = false)
    protected Submission submission;
    
    public Answer() {

    }
    public Answer(String questionStr, String submittedAnswer) {
        this.questionStr = questionStr;
        this.submittedAnswer = submittedAnswer;
    }
    public void setQuestion(String questionStr) {
        this.questionStr = questionStr;
    }
    public void setSubmittedAnswer(String submittedAnswer) {
        this.submittedAnswer = submittedAnswer;
    }
    public String getSubmittedAnswer() {
        return this.submittedAnswer;
    }
    public String getQuestion() {
        return this.questionStr;
    }
}
