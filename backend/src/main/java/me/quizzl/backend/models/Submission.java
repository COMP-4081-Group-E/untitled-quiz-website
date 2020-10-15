package me.quizzl.backend.models;

import java.util.UUID;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Submission {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id", updatable = false, nullable = false)
    protected Long id;
    
    @ManyToOne
    @JoinColumn(name="quiz_id", nullable = false)
    protected Quiz quiz;

    @OneToMany(mappedBy = "submission")
    private List<Answer> answerList;
    
    public Submission() {

    }
    public Submission(List<Answer> answerList) {
        this.answerList = answerList;
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
}
