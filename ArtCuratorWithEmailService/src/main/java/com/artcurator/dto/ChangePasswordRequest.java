package com.artcurator.dto;

public class ChangePasswordRequest {
	private String email;
	private String newPassword;
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getNewPassword() {
		return newPassword;
	}
	
	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
	
	public ChangePasswordRequest(String email, String newPassword) {
		super();
		this.email = email;
		this.newPassword = newPassword;
	}
	
	public ChangePasswordRequest() {
		super();
	}
	
	@Override
	public String toString() {
		return "ChangePasswordRequest [email=" + email + ", newPassword=" + newPassword + "]";
	}
}