package com.example.bugtracker.repository;

import com.example.bugtracker.dao.model.Bug;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BugRepository extends CrudRepository<Bug, Long> {
    List<Bug> findAllByUrgency(String urgency);
}
