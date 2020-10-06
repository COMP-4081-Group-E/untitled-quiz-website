// class for the quizzes that will connect to a databasse
package me.quizzl.backend.models;

import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

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

    public UUID getQuizId() {
        return id;
    }
}
