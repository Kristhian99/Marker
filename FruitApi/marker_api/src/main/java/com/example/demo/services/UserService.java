package com.example.demo.services;


import com.example.demo.repository.UserRepository;
import com.example.demo.users.STATE;
import com.example.demo.users.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@AllArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    public List<User> getAllUsers() {
        return  userRepository.findAll();
    }

    public  User accreditUser(String email, String pass) {
        User user=userRepository.findUserByEmail(email).orElse(null);
        if(user==null) return new User("",STATE.USER,"");
        else return accreditCredentials(user,pass);
    }

    private User accreditCredentials(User user, String pass) {
        if(user.getPassword().equals(pass)){
            if(user.getState()== STATE.ADMIN)
                return user;
            else
                return new User(user.getEmail(),STATE.USER,"");
        }
        return new User(user.getEmail(),STATE.USER,"1");
    }


    public String updateUser(String email){
        User user=userRepository.findUserByEmail(email).orElse(null);
        if(user==null)
        return "The user doesn´t exist";
        else {
            user.setEmail("nuevo@emai.com");
            userRepository.save(user);
            return "The user was update";
        }

    }



}
