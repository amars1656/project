package com.cdac.trainging.lawyer.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "User")
public class User {
@SequenceGenerator(name = "user_seq",initialValue = 1)
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY,generator ="user_seq" )
private Long id;
@Column(name = "fname",nullable = false)
private String fname;
@Column(name = "lname")
private String lname;
@Column(name = "uemail",unique = true)
private String email;
@Column(name="User_Name",nullable = false)
private String username;
@Column(name="Password",nullable = false,unique = true)
private String password;
@Column(name = "UphoneNo",unique = true,nullable = false)
private String phoneNo;
@Column(name = "Address")
private String Address;
@Column(name = "Discription")
private String disrp;

public User() {
	super();
	// TODO Auto-generated constructor stub
}

public User(Long id, String fname, String lname, String email, String username, String password, String phoneNo,
		String address, String disrp) {
	super();
	this.id = id;
	this.fname = fname;
	this.lname = lname;
	this.email = email;
	this.username = username;
	this.password = password;
	this.phoneNo = phoneNo;
	Address = address;
	this.disrp = disrp;
}

public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public String getFname() {
	return fname;
}

public void setFname(String fname) {
	this.fname = fname;
}

public String getLname() {
	return lname;
}

public void setLname(String lname) {
	this.lname = lname;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public String getUsername() {
	return username;
}

public void setUsername(String username) {
	this.username = username;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

public String getPhoneNo() {
	return phoneNo;
}

public void setPhoneNo(String phoneNo) {
	this.phoneNo = phoneNo;
}

public String getAddress() {
	return Address;
}

public void setAddress(String address) {
	Address = address;
}

public String getDisrp() {
	return disrp;
}

public void setDisrp(String disrp) {
	this.disrp = disrp;
}



}
