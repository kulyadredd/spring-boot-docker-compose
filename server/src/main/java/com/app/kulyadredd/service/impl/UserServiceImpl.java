package com.app.kulyadredd.service.impl;

import com.app.kulyadredd.dto.UserSummary;
import com.app.kulyadredd.entity.User;
import com.app.kulyadredd.repository.UserRepository;
import com.app.kulyadredd.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<UserSummary> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map(user -> new UserSummary(user.getId(), user.getUsername(), user.getName(), user.getEmail())).collect(Collectors.toList());
    }

}
