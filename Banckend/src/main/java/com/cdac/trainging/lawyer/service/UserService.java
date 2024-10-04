package com.cdac.trainging.lawyer.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cdac.trainging.lawyer.model.User;
import com.cdac.trainging.lawyer.repositiory.UserRepositiory;

@Service
public class UserService {
	@Autowired
UserRepositiory urepo;
	public User registerUser(User u) {
		return  urepo.save(u);
	}
	public void deleteUserById(long id) {
		urepo.deleteById(id);
	}
	public Optional<User> getUserById(long id) {
		return urepo.findById(id);
	}
	public List<User> listAllUser() {
		return urepo.findAll();
	}
	
	 public User findByEmail(String email) {
	        return urepo.findByemail(email);
	    }
	    
	  

	 
	    
	    
}
