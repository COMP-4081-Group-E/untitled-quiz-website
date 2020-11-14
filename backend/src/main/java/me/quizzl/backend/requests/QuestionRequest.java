package me.quizzl.backend.requests;

public class QuestionRequest {
  private String questionStr;
  private String correctAnswer;
  private String incorrectAnswer;
  private String incorrectAnswer2;
  private String incorrectAnswer3;

  public String getQuestionStr() {
    return questionStr;
  }

  public void setQuestionStr(String questionStr) {
    this.questionStr = questionStr;
  }

  public String getCorrectAnswer() {
    return correctAnswer;
  }

  public void setCorrectAnswer(String correctAnswer) {
    this.correctAnswer = correctAnswer;
  }

  public String getIncorrectAnswer() {
    return incorrectAnswer;
  }

  public void setIncorrectAnswer(String incorrectAnswer) {
    this.incorrectAnswer = incorrectAnswer;
  }

  public String getIncorrectAnswer2() {
    return incorrectAnswer2;
  }

  public void setIncorrectAnswer2(String incorrectAnswer2) {
    this.incorrectAnswer2 = incorrectAnswer2;
  }

  public String getIncorrectAnswer3() {
    return incorrectAnswer3;
  }

  public void setIncorrectAnswer3(String incorrectAnswer3) {
    this.incorrectAnswer3 = incorrectAnswer3;
  }
}
