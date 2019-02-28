package com.app.springbootdockercompose.service.impl;

import com.app.springbootdockercompose.entity.User;
import com.app.springbootdockercompose.repository.UserRepository;
import com.app.springbootdockercompose.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public Optional<User> getById(Long id) {
        return userRepository.findById(id);
    }

}
