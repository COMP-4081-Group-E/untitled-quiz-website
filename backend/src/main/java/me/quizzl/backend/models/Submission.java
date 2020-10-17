package me.quizzl.backend.models;

import java.util.UUID;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class Submission {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
        name = "UUID",
        strategy = "org.hibernate.id.UUIDGenerator"
    )
    
    @ManyToOne
    @JoinColumn(name="quiz_id", nullable = false)
    protected Quiz quiz;

    @OneToMany(mappedBy = "submission")
    private List<Answer> answerList;

    protected double totalQuestions;
    protected double numCorrect;

    public Submission() {

    }
    public Submission(List<Answer> answerList) {
        this.answerList = answerList;
        setTotalQuestions(answerList.size());
    }   
    
    public UUID getQuizId() {
        return this.quiz.getQuizId();
    }
    public void setAnswers(List<Answer> answerList) {
        this.answerList = answerList;
    }
    public List<Answer> getAnswers() {
        return this.answerList;
    }
    public void incrementNumCorrect() {
        this.numCorrect++;
    }
    public double getNumCorrect() {
        return this.numCorrect;
    }
    public void setTotalQuestions(double totalQuestions)  {
        this.totalQuestions = totalQuestions;
    }
    public double getTotalQuestions() {
        return this.totalQuestions;
    }
}