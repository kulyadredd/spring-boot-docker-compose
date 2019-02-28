package com.app.springbootdockercompose.service;

import com.app.springbootdockercompose.entity.User;

import java.util.Optional;

public interface UserService {

    public Optional<User> getById(Long id);

}
