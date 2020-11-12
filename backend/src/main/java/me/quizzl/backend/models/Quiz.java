// class for the quizzes that will connect to a databasse
package me.quizzl.backend.models;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.persistence.*;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class Quiz {
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
    private String quizTitle;

    @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "quiz")
    private List<Submission> submissions = new ArrayList<>();
    
    // Constructor
    public Quiz() {
    }
    public Quiz(String quizTitle) {
        this.quizTitle = quizTitle;
    }

    // Getters
    public UUID getQuizId() {
        return this.id;
    }
    public String getQuizTitle() {
        return this.quizTitle;
    }
    public List<Question> getQuestions() {
        return this.questions;
    }
    // Setters
    public void addQuestion(Question question) {
        this.questions.add(question);
        question.setQuiz(this);
    }
    public void setTitle(String quizTitle) {
        this.quizTitle = quizTitle;
    }

    // Possible functionality added in the future for editing quizzes
    /*public void removeQuestion(Question question) {

    } */

    @Override
    public String toString() {
        for(int i = 0; i > this.questions.size(); i++) {
            System.out.println(this.questions.get(i).toString());
        }

        return("Quiz ID: " + this.id);
    }
}
