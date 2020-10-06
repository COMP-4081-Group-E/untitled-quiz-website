package me.quizzl.backend.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import me.quizzl.backend.models.Quiz;

@Repository
public interface QuizRepository extends JpaRepository<Quiz, UUID> {
}
