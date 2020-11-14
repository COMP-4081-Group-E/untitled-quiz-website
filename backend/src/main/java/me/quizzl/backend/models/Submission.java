package me.quizzl.backend.models;

import java.util.UUID;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class Submission {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
        name = "UUID",
        strategy = "org.hibernate.id.UUIDGenerator"
    )
    @Column(name = "id", unique = true, updatable = false, nullable = false)
    /**
     * The unique identifier of a quiz.
     * This value is automatically generated when a quiz entity is saved to the database.
     */
    private UUID id;

    @ManyToOne(optional = false)
    protected Quiz quiz;

    @OneToMany(mappedBy = "submission", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Answer> answers = new ArrayList<>();

    protected double totalQuestions = 0;
    protected double numCorrect = 0;

    public Submission() {}

    public void grade() {
        List<Question> quizQuestions = this.quiz.getQuestions();
        
        for (int i = 0; i < quizQuestions.size(); i++) {
            /*
                Sets each answers isCorrect value based on the comparison done with the
                correct answer and submitted answer
            */
            var isCorrect = quizQuestions.get(i).evaluateAnswer(answers.get(i));
            answers.get(i).setIsCorrect(isCorrect);
        }
    }

    public Double getGrade() {
        return this.numCorrect / this.totalQuestions;
    }

    public void setQuiz(Quiz quiz) {
        this.quiz = quiz;
    }

    public UUID getId() {
        return this.id;
    }

    public void addAnswer(Answer answer) {
        this.answers.add(answer);
        answer.setSubmission(this);
        this.totalQuestions++;
    }
    
    public List<Answer> getAnswers() {
        return this.answers;
    }

    public void incrementNumCorrect() {
        this.numCorrect++;
    }

    public double getNumCorrect() {
        return this.numCorrect;
    }

    public double getTotalQuestions() {
        return this.totalQuestions;
    }
}