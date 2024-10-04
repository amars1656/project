package com.cdac.trainging.lawyer.repositiory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.cdac.trainging.lawyer.model.Lawyer;

public interface LawyerRepositiory extends JpaRepository<Lawyer,Long> {
	
		
		
		
		List<Lawyer> findByspec(@Param("spec") String spec);
		Lawyer findByemail(@Param("email") String email);
	
}
