package com.cdac.trainging.lawyer.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.cdac.trainging.lawyer.exception.LawyerResourceNotFoundException;
import com.cdac.trainging.lawyer.exception.UserResourceNotFoundException;
import com.cdac.trainging.lawyer.model.Lawyer;

import com.cdac.trainging.lawyer.model.User;
import com.cdac.trainging.lawyer.service.LawyerService;
import com.cdac.trainging.lawyer.service.UserService;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping(value = "/api")
public class UserController {
	@Autowired
UserService userService;
	@Autowired
LawyerService lService;
	@Configuration
	public class WebConfig implements WebMvcConfigurer {
	    @Override
	    public void addCorsMappings(CorsRegistry registry) {
	        registry.addMapping("/**")
	            .allowedOrigins("http://localhost:3000") // Allow requests from this origin
	            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
	            .allowedHeaders("*");
	    }
	}
	@PostMapping("/user")
	@CrossOrigin(origins = " http://localhost:3000")
	public ResponseEntity<User> registerUser(@Validated @RequestBody User u) {
		try {
			User user=userService.registerUser(u);
			return ResponseEntity.status(HttpStatus.CREATED).body(user);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}
	@DeleteMapping("/user/{id}")
	public ResponseEntity<User> deleteUser(@PathVariable(value = "id")long uid)throws UserResourceNotFoundException {
			User u=userService.getUserById(uid).orElseThrow(()-> new UserResourceNotFoundException("incorrect USerID"+uid));
	userService.deleteUserById(uid);
	return ResponseEntity.ok().body(u);
	}
	@GetMapping("/user/{id}")
	public ResponseEntity<User> getUserById(@PathVariable(value = "id")long uid)throws UserResourceNotFoundException {
		User u=userService.getUserById(uid).orElseThrow(()-> new UserResourceNotFoundException("Incorrect user Id"));
		return ResponseEntity.ok(u);
	}
	@GetMapping("/user")
	@CrossOrigin(origins = " http://localhost:3000")
	public ResponseEntity<List<Lawyer>> listAllLawyer()throws LawyerResourceNotFoundException {
		try {
			List<Lawyer> l=lService.listOfLawyer();
			return ResponseEntity.ok(l);
		} catch (Exception e) {
		return ResponseEntity.ok().body(null);
		}
	}
	@GetMapping("/user/{type}")
	public ResponseEntity<List<Lawyer>> getLawyerByspec(@PathVariable(value = "type")String type) {
		try {
		List<Lawyer>l=lService.getlawyerByspec(type);
			return ResponseEntity.ok().body(l);
		} catch (Exception e) {
		e.printStackTrace();
		return ResponseEntity.ok().body(null);
		}
	}
	@PutMapping("/user/{email}")
	public ResponseEntity<String> forgetPassword(@PathVariable(value = "email")String email,@Validated @RequestBody User u) {
		try {
			User user =userService.findByEmail(email);
		if(user!=null) {
			user.setPassword(u.getPassword());
			User updateUser=userService.registerUser(user);
			return ResponseEntity.ok().body("updateUser");
		}
		else {
			return ResponseEntity.ok().body(null);
		}
		} catch (Exception e) {
			e.printStackTrace();
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}	
}
	@GetMapping("loginuser/{email}/{pass}")
	public ResponseEntity<String> loginUser(@PathVariable("email")String email,@PathVariable("pass") String pass) {
		User existuser=userService.findByEmail(email);
		if(existuser.getEmail()!=null && existuser.getPassword().equals(pass)) {
			return ResponseEntity.ok("login sucessfull");
		}else {
			return ResponseEntity.badRequest().body("login error");
		}
		
	}
	
	
}
//{
//    "fname":"saad",
//    "lname":"khan",
//    "email":"saadkhan2624@gmail.com",
//    "username":"saadkha",
//    "password":"123432",
//    "phoneNo":"phoneNo"
//}