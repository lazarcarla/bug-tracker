package com.example.bugtracker.repository;

import com.example.bugtracker.dao.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {


    Optional<User> findByUsernameAndPasswordAndRole(String username, String password, String role);
}
