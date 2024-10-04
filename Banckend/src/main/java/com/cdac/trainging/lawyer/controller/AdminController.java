package com.cdac.trainging.lawyer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.trainging.lawyer.exception.LawyerResourceNotFoundException;
import com.cdac.trainging.lawyer.exception.UserResourceNotFoundException;
import com.cdac.trainging.lawyer.model.Lawyer;
import com.cdac.trainging.lawyer.model.User;
import com.cdac.trainging.lawyer.service.LawyerService;
import com.cdac.trainging.lawyer.service.UserService;

@RestController
@RequestMapping(value = "/api")
public class AdminController {
	@Autowired
	UserService userService;
	@Autowired
	LawyerService lawyerService;
	@PostMapping("/uadmin")
	public ResponseEntity<User> adduser(@Validated @RequestBody User u) {
		try {
			User user=userService.registerUser(u);
			return ResponseEntity.status(HttpStatus.CREATED).body(user);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}
	
	
	
	
	
	@DeleteMapping("/uadmin/{id}")
	public ResponseEntity<User> deleteUser(@PathVariable(value = "id")long uid)throws UserResourceNotFoundException {
			User u=userService.getUserById(uid).orElseThrow(()-> new UserResourceNotFoundException("incorrect USerID"+uid));
	userService.deleteUserById(uid);
	return ResponseEntity.ok().body(u);
	}
	
	
	
	
	
	@GetMapping("/uadmin/{id}")
	public ResponseEntity<User> getUserById(@PathVariable(value = "id")long uid)throws UserResourceNotFoundException {
		User u=userService.getUserById(uid).orElseThrow(()-> new UserResourceNotFoundException("Incorrect user Id"));
		return ResponseEntity.ok(u);
	}
	
	
	
	
	
	@PutMapping("/uadmin/{email}")
	public ResponseEntity<User> forgetPassword(@PathVariable(value = "email")String email,@Validated @RequestBody User u) {
		try {
			User user =userService.findByEmail(email);
		if(user!=null) {
			user.setPassword(u.getPassword());
			User updateUser=userService.registerUser(user);
			return ResponseEntity.ok().body(updateUser);
		}
		else {
			return ResponseEntity.ok().body(null);
		}
		} catch (Exception e) {
			e.printStackTrace();
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}
	
	@GetMapping("/uadmin")
	public ResponseEntity<List<User>> listAllUser()throws UserResourceNotFoundException {
		try {
			List<User> l=userService.listAllUser();
			return ResponseEntity.ok(l);
		} catch (Exception e) {
		return ResponseEntity.ok().body(null);
		}
	}
	@GetMapping("/uadmin/{email}")
	public ResponseEntity<User> getUserByEmail(@PathVariable(value = "email")String email,@Validated @RequestBody User u) {
		try {
			
	
		User user=userService.findByEmail(email);
		if(user !=null) {
			return ResponseEntity.ok().body(user);
		}
		else {
			return ResponseEntity.ok().body(null);
		}	
		
		}
		
		catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(null);
		}
	}
	//========================================================================================================================
	@PutMapping("/ladmin/{email}")
	public ResponseEntity<Lawyer> forgetPassword(@PathVariable(value = "email")String email,@Validated @RequestBody Lawyer l) {
		try {
			Lawyer lawyer =lawyerService.findByEmail(email);
		if(lawyer!=null) {
			lawyer.setPass(l.getPass());
			Lawyer updatelawyer=lawyerService.regisLawyer(lawyer);
			return ResponseEntity.ok().body(updatelawyer);
		}
		else {
			return ResponseEntity.ok().body(null);
		}
		} catch (Exception e) {
			e.printStackTrace();
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}
	@PostMapping("/ladmin")
	public ResponseEntity<Lawyer> registerLawyer(@Validated @RequestBody Lawyer l) {
		try {
			Lawyer lawyer=lawyerService.regisLawyer(l);
			return ResponseEntity.status(HttpStatus.CREATED).body(lawyer);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}
	@GetMapping("/ladmin/{id}")
	public ResponseEntity<Lawyer> getLawyerById(@PathVariable(value = "id")long lid)throws LawyerResourceNotFoundException {
		Lawyer u=lawyerService.LawyerById(lid).orElseThrow(()-> new LawyerResourceNotFoundException("Incorrect user Id"+lid));
		return ResponseEntity.ok(u);
	}
	
	@GetMapping("/ladmin")
	public ResponseEntity<List<Lawyer>> listAllLawyer()throws LawyerResourceNotFoundException {
		try {
			List<Lawyer> l=lawyerService.listOfLawyer();
			return ResponseEntity.ok(l);
		} catch (Exception e) {
		return ResponseEntity.ok().body(null);
		}
	}
	
	
	@GetMapping("/ladmin/{email}")
	public ResponseEntity<Lawyer> getLawyerByEmail(@PathVariable(value = "email")String email,@Validated @RequestBody Lawyer l) {
		try {
			
	
		Lawyer lawyer=lawyerService.findByEmail(email);
		if(lawyer !=null) {
			return ResponseEntity.ok().body(lawyer);
		}
		else {
			return ResponseEntity.ok().body(null);
		}	
		
		}
		
		catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(null);
		}
	}	

}
