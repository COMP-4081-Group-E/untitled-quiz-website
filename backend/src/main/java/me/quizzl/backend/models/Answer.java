package me.quizzl.backend.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Answer {
    @Id
    @GeneratedValue
    protected Long id;

    @ManyToOne(optional = false)
    protected Submission submission;

    @Column(name = "submitted_answer")
    protected String submittedAnswer;
    @Column(name = "is_correct")
    protected Boolean isCorrect;

    public Answer() {

    }
    public Answer(String submittedAnswer) {
        this.submittedAnswer = submittedAnswer;
    }

    // Getters
    public String getSubmittedAnswer() {
        return this.submittedAnswer;
    }
    public Boolean getIsCorrect() {
        return this.isCorrect;
    }
    public Submission getSubmission() {
        return this.submission;
    }

    // Setters
    public void setSubmission(Submission submission) {
        this.submission = submission;
    }
    public void setIsCorrect(Boolean isCorrect) {
        this.isCorrect = isCorrect;
        if (this.isCorrect) {
            this.submission.incrementNumCorrect();
        }
    }
    public void setSubmittedAnswer(String submittedAnswer) {
        this.submittedAnswer = submittedAnswer;
    }
}
