package me.quizzl.backend.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;


@Entity
public class Grade {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id", updatable = false, nullable = false)
    protected Long id;

    @OneToOne
    @JoinColumn(name="submission_id", nullable = false)
    protected Submission submission;

    @Column(name = "number_correct")
    protected int numCorrect = 0;
    @Column(name = "number_incorrect")
    protected int numIncorrect = 0;

    public Grade() {

    }
    public Grade(int numCorrect, int numIncorrect) {
        this.numCorrect = numCorrect;
        this.numIncorrect = numIncorrect;
    }
    public int getCorrect() {
        return this.numCorrect;
    }
    public int getIncorrect() {
        return this.numIncorrect;
    }
    public void setCorrect(int numCorrect) {
        this.numCorrect = numCorrect;
    }
    public void setIncorrect(int numIncorrect) {
        this.numIncorrect = numIncorrect; 
    }
    public void incrementCorrect() {
        this.numCorrect++;
    }
    public void incrementIncorrect() {
        this.numIncorrect++;
    }
}

