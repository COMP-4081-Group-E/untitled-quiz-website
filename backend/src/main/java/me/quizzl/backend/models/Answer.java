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

    @Column(name = "submitted_answer")
    protected String submittedAnswer;

    @Column(name = "is_correct")
    protected Boolean isCorrect;

    @ManyToOne
    @JoinColumn(name="question", nullable = false)
    protected Question question;

    @ManyToOne
    @JoinColumn(name="submission_id", nullable = false)
    protected Submission submission;
    
    public Answer() {

    }
    public Answer(String submittedAnswer) {
        this.submittedAnswer = submittedAnswer;
    }
    public void setIsCorrect(Boolean isCorrect) {
        this.isCorrect = isCorrect;
        if(this.isCorrect) {
            this.submission.incrementNumCorrect();
        }
    }
    public void setSubmittedAnswer(String submittedAnswer) {
        this.submittedAnswer = submittedAnswer;
    }
    public String getSubmittedAnswer() {
        return this.submittedAnswer;
    }
    public Boolean getIsCorrect() {
        return this.isCorrect;
    }
}
