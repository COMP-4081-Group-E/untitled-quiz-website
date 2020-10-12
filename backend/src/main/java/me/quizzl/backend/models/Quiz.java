// class for the quizzes that will connect to a databasse
package me.quizzl.backend.models;

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

    @ElementCollection
    private List<Question> questionList;
    
    // Constructor
    public Quiz() {
    }
    public Quiz(List<Question> questionList) {
        this.questionList = questionList;
    }
    // Getters
    public UUID getQuizId() {
        return this.id;
    }
    public List<Question> getQuestion() {
        return this.questionList;
    }
    // Setters
    public void setQuestions(List<Question> questionList) {
        this.questionList = questionList;
    }
    public void addQuestion(Question question) {
        this.questionList.add(question);
    }

    // Possible functionality added in the future for editing quizzes
    /*public void removeQuestion(Question question) {

    } */

    @Override
    public String toString() {
        for(int i = 0; i > this.questionList.size(); i++) {
            System.out.println(this.questionList.get(i).toString());
        }

        return("Quiz ID: " + this.id);
    }
}
