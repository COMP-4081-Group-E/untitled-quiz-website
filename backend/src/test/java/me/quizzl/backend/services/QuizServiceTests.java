package me.quizzl.backend.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import me.quizzl.backend.models.MultipleChoice;
import me.quizzl.backend.models.Quiz;

@SpringBootTest
public class QuizServiceTests {
  @Autowired
  private QuizService quizService;

  @Test
  @Transactional
  public void givenQuizService_whenSaveAndGetQuiz_thenOK() {
    var quiz = new Quiz("New Quiz");
    quiz.addQuestion(new MultipleChoice("Test Question", "yes", new String[] { "no", "no", "no" }));

    quizService.saveQuiz(quiz);
    var storedQuiz = quizService.getQuizzes().get(0);

    assertNotNull(storedQuiz);
    assertEquals(quiz.getQuizTitle(), storedQuiz.getQuizTitle());
    assertEquals(quiz.getQuestions().size(), storedQuiz.getQuestions().size());
  }
}
