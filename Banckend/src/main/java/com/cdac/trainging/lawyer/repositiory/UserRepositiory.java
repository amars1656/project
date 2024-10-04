package com.cdac.trainging.lawyer.repositiory;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import com.cdac.trainging.lawyer.model.User;

public interface UserRepositiory extends JpaRepository<User,Long> {
	
	User findByemail(@Param("email") String email);
	
	
}
