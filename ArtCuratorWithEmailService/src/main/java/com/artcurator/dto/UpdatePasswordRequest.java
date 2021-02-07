package com.artcurator.dto;

public class UpdatePasswordRequest {
	private Long id;
	private String oldPassword;
	private String newPassword;
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getNewPassword() {
		return newPassword;
	}
	
	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
	
	public String getOldPassword() {
		return oldPassword;
	}
	
	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}
	
	public UpdatePasswordRequest(Long id, String oldPassword, String newPassword) {
		super();
		this.id = id;
		this.newPassword = newPassword;
		this.oldPassword = oldPassword;
	}
	
	public UpdatePasswordRequest() {
		super();
	}
	
	@Override
	public String toString() {
		return "UpdatePasswordRequest [id=" + id + ", oldPassword=" + oldPassword + ", newPassword=" + newPassword
				+ "]";
	}
}
