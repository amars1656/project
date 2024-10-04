package com.cdac.trainging.lawyer.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.SequenceGenerator;
//import jakarta.persistence.Table;

@Entity
public class Lawyer {
	@SequenceGenerator(name="lawyer_seq",initialValue = 1)
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY,generator = "lawyer_seq")
	    private Long lid;
	@Column(name = "name")
	private String name;
	
	
	@Column(name = "email",unique = true)
	private String email;
	
	
	@Column(name = "phoneNo",unique = true,nullable = false)
	private String phoneNo;
	
	
	@Column(name = "city",nullable = false)
	private String city;
	
	@Column(name = "Language",nullable = false)
	private String language;
	
//	@Column(name = "image")
//	private BufferedImage image;
//	
	
	@Lob
	@Column(columnDefinition="BLOB")
    private byte[] image;
	
	
	@Column(name="bar_Association",nullable = false,unique = true)
	private String bar_Association;
	
	
	@Column(name="Experience")
	private String experience;
	
	
	@Column(name="Specliziation",nullable = false)
	private String spec;
	
	@Column(name="User_Name",nullable = false)
	private	String userName;
	
	@Column(name="Password",nullable = false,unique = true)
	private	String pass;
	
	@Column(name="State",nullable = false)
	private String state;
	
	@Column(name="Office_Address",nullable = false)
	private String officeAddress;
	
	@Column(name="Practice_Area",nullable = false)
	private String practiceArea;
	
	
	@Column(name="Court",nullable = false)
	private String court;
	
	
	@Column(name="Description",nullable = false)
	private String description;
	
	
	
	public Lawyer() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Lawyer(Long lid, String name, String email, String phoneNo, String city, String language, byte[] image,
			String bar_Association, String experience, String spec, String userName, String pass, String state,
			String officeAddress, String practiceArea, String court, String description) {
		super();
		this.lid = lid;
		this.name = name;
		this.email = email;
		this.phoneNo = phoneNo;
		this.city = city;
		this.language = language;
		this.image = image;
		this.bar_Association = bar_Association;
		this.experience = experience;
		this.spec = spec;
		this.userName = userName;
		this.pass = pass;
		this.state = state;
		this.officeAddress = officeAddress;
		this.practiceArea = practiceArea;
		this.court = court;
		this.description = description;
	}



	public Long getLid() {
		return lid;
	}



	public void setLid(Long lid) {
		this.lid = lid;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getPhoneNo() {
		return phoneNo;
	}



	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}



	public String getCity() {
		return city;
	}



	public void setCity(String city) {
		this.city = city;
	}



	public String getLanguage() {
		return language;
	}



	public void setLanguage(String language) {
		this.language = language;
	}



	public byte[] getImage() {
		return image;
	}



	public void setImage(byte[] image) {
		this.image = image;
	}



	public String getBar_Association() {
		return bar_Association;
	}



	public void setBar_Association(String bar_Association) {
		this.bar_Association = bar_Association;
	}



	public String getExperience() {
		return experience;
	}



	public void setExperience(String experience) {
		this.experience = experience;
	}



	public String getSpec() {
		return spec;
	}



	public void setSpec(String spec) {
		this.spec = spec;
	}



	public String getUserName() {
		return userName;
	}



	public void setUserName(String userName) {
		this.userName = userName;
	}



	public String getPass() {
		return pass;
	}



	public void setPass(String pass) {
		this.pass = pass;
	}



	public String getState() {
		return state;
	}



	public void setState(String state) {
		this.state = state;
	}



	public String getOfficeAddress() {
		return officeAddress;
	}



	public void setOfficeAddress(String officeAddress) {
		this.officeAddress = officeAddress;
	}



	public String getPracticeArea() {
		return practiceArea;
	}



	public void setPracticeArea(String practiceArea) {
		this.practiceArea = practiceArea;
	}



	public String getCourt() {
		return court;
	}



	public void setCourt(String court) {
		this.court = court;
	}



	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}

	
	
	
}
