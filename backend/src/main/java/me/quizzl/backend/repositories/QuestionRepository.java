package me.quizzl.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import me.quizzl.backend.models.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
}
