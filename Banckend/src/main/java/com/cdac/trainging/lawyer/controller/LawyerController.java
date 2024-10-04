package com.cdac.trainging.lawyer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
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
import com.cdac.trainging.lawyer.model.Lawyer;
import com.cdac.trainging.lawyer.model.User;
import com.cdac.trainging.lawyer.service.LawyerService;

@RestController
@RequestMapping(value = "/api")
public class LawyerController {
@Autowired
LawyerService lService;
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
@PostMapping("/lawyer")
public ResponseEntity<Lawyer> registerLawyer(@Validated @RequestBody Lawyer l) {
	try {
		Lawyer lawyer=lService.regisLawyer(l);
		return ResponseEntity.status(HttpStatus.CREATED).body(lawyer);
	} catch (Exception e) {
		e.printStackTrace();
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
	}
}
@GetMapping("/lawyer/{id}")
public ResponseEntity<Lawyer> getLawyerById(@PathVariable(value = "id")long lid)throws LawyerResourceNotFoundException {
	Lawyer u=lService.LawyerById(lid).orElseThrow(()-> new LawyerResourceNotFoundException("Incorrect user Id"+lid));
	return ResponseEntity.ok(u);
}
@PutMapping("/lawyer/{email}")
public ResponseEntity<Lawyer> forgetPassword(@PathVariable(value = "email")String email) {
	try {
		Lawyer lawyer =lService.findByEmail(email);
	if(lawyer!=null) {
		lawyer.setPass(l.getPass());
		Lawyer updatelawyer=lService.regisLawyer(lawyer);
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
@GetMapping("loginlawyer/{email}/{pass}")
public ResponseEntity<String> loginUser(@PathVariable("email")String email,@PathVariable("pass") String pass) {
	Lawyer existuser=lService.findByEmail(email);
	if(existuser.getEmail()!=null && existuser.getPass().equals(pass)) {
		return ResponseEntity.ok("login sucessfull");
	}else {
		return ResponseEntity.badRequest().body("login error");
	}
	
}

}
//{
//	 " name":"alii saad khan",
//	 "email":"safbhfbhdsjvbdshj",
//	   "phoneNo":"34783832",
//	   "city":"shahabad",
//	    "language":"hindi",
//	    "bar_Association":"ddhhdbchsjd",
//	    "experience":"1 year",
//	    "spec":"criminal",
//	    "userName":"shaadkha",
//	    "pass":"120010",
//	    "state":"up",
//	    "officeAddress":"kanpur",
//	    "practiceArea":"lane2",
//	    "court":"dist",
//	    "description":"fbhsdfshdjfbhsajbcfhjsaacs"
//	}
