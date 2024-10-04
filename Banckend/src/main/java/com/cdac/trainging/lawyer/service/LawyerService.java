package com.cdac.trainging.lawyer.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cdac.trainging.lawyer.model.Lawyer;
import com.cdac.trainging.lawyer.repositiory.LawyerRepositiory;

@Service
public class LawyerService {
	@Autowired
LawyerRepositiory lrepo;
	public Lawyer regisLawyer(Lawyer lawyer) {
		return lrepo.save(lawyer);
	}
	public List<Lawyer> listOfLawyer() {
		return lrepo.findAll();
	}
	public List<Lawyer> getlawyerByspec(String type) {
        return lrepo.findByspec(type); // Calls the custom JPQL query method
    }
	public Optional<Lawyer> LawyerById(long lid) {
		return lrepo.findById(lid);
	}
	public Lawyer storeImage(MultipartFile file) throws IOException {
	    // Assuming you have a Lawyer entity with an image field
	    Lawyer lawyer = new Lawyer();
	    
	    // Convert the MultipartFile to a byte array
	    byte[] imageBytes = file.getBytes();
	    
	    // Assuming Lawyer has a method to set the image bytes
	    lawyer.setImage(imageBytes);
	    
	    // Save the Lawyer entity with the image to the repository
	    return lrepo.save(lawyer);
	}
	  public Lawyer getImage(Long id) {
	        return lrepo.findById(id).orElse(null);
	    }
	  
	  
	  public Lawyer findByEmail(String email) {
		return lrepo.findByemail(email);
	}
}
