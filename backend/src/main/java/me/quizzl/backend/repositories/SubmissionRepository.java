package me.quizzl.backend.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import me.quizzl.backend.models.Submission;

@Repository
public interface SubmissionRepository extends JpaRepository<Submission, UUID> {
}
