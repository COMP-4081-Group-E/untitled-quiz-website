package me.quizzl.backend.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import me.quizzl.backend.models.MultipleChoice;
import me.quizzl.backend.models.Quiz;
import me.quizzl.backend.models.Submission;

@SpringBootTest
public class SubmissionServiceTests {
  @Autowired
  private QuizService quizService;
  @Autowired
  private SubmissionService submissionService;

  @Test
  @Transactional
  public void givenSubmissionService_whenGradeAddAndGetSubmission_thenOK() {
    // we need to have a quiz in the db to submit answers to
    var quiz = new Quiz("New Quiz");
    quiz.addQuestion(new MultipleChoice("Test Question", "yes", new String[] { "no", "no", "no" }));
    quiz = quizService.saveQuiz(quiz);

    // how do I even assign a quiz to this thing???
    var submission = new Submission();
    submission.grade();

    submissionService.addSubmission(submission);
    var storedSubmission = submissionService.getSubmissions().get(0);

    assertNotNull(storedSubmission);
    assertEquals(submission.getAnswers().size(), storedSubmission.getAnswers().size());
  }
}
