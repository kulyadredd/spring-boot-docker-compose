package com.app.springbootdockercompose.repository;

import com.app.springbootdockercompose.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
