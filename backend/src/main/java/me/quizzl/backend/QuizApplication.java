package me.quizzl.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class QuizApplication {

	// code to run the web app

	/*  Temporary test until we get more permanent host:
		1. make sure you have access to all of the backend
		2. run code here (QuizApplication)
		3. type localhost:8080/api/quiz into your browser's search bar
		4. should give a mostly blank page with only a []
	 */
	public static void main(String[] args) {
		SpringApplication.run(QuizApplication.class, args);
	}
}
