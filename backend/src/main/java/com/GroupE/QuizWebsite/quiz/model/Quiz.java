// class for the quizzes that will connect to a databasse
package com.GroupE.QuizWebsite.quiz.model;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;
public class Quiz {

    private UUID quizId;

    public Quiz(@JsonProperty("id") UUID qID){
        this.quizId = qID;
    }

    public UUID getQuizId() {
        return quizId;
    }

    public void setQuizId(UUID quizId) {
        this.quizId = quizId;
    }
}
