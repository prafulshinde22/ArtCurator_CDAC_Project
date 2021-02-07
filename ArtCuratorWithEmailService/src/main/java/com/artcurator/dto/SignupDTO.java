package com.artcurator.dto;

import java.time.LocalDate;

import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

import com.artcurator.pojos.Role;

public class SignupDTO {
	@NotNull(message = "User name can't be blank")
	private String name;
	@NotNull(message = "User email can't be blank")
	private String email;
	@NotNull(message = "User password can't be blank")
	private String password;
	@NotNull(message = "User phone can't be blank")
	private String phone;
	@NotNull(message = "User dob can't be blank")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dob;
	@NotNull(message = "User role can't be blank")
	private Role role;
	@NotNull(message = "Address apartment can't be blank")
	private String apartment;
	@NotNull(message = "Address street can't be blank")
	private String street;
	@NotNull(message = "Address city can't be blank")
	private String city;
	@NotNull(message = "Address state can't be blank")
	private String state;
	@NotNull(message = "Address country can't be blank")
	private String country;
	@NotNull(message = "Address pin can't be blank")
	private String pin;

	public SignupDTO() {
		super();
	}

	public SignupDTO(@NotNull(message = "User name can't be blank") String name,
			@NotNull(message = "User email can't be blank") String email,
			@NotNull(message = "User password can't be blank") String password,
			@NotNull(message = "User phone can't be blank") String phone,
			@DateTimeFormat(pattern = "yyyy-MM-dd") @NotNull(message = "User dob can't be blank") LocalDate dob,
			@NotNull(message = "User role can't be blank") Role role,
			@NotNull(message = "Address apartment can't be blank") String apartment,
			@NotNull(message = "Address street can't be blank") String street,
			@NotNull(message = "Address city can't be blank") String city,
			@NotNull(message = "Address state can't be blank") String state,
			@NotNull(message = "Address country can't be blank") String country,
			@NotNull(message = "Address pin can't be blank") String pin) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.phone = phone;
		this.dob = dob;
		this.role = role;
		this.apartment = apartment;
		this.street = street;
		this.city = city;
		this.state = state;
		this.country = country;
		this.pin = pin;
	}

	public String getName() {
		return name;
	}

	public String getEmail() {
		return email;
	}

	public String getPassword() {
		return password;
	}

	public String getPhone() {
		return phone;
	}

	public LocalDate getDob() {
		return dob;
	}

	public Role getRole() {
		return role;
	}

	public String getApartment() {
		return apartment;
	}

	public String getStreet() {
		return street;
	}

	public String getCity() {
		return city;
	}

	public String getState() {
		return state;
	}

	public String getCountry() {
		return country;
	}

	public String getPin() {
		return pin;
	}

	@Override
	public String toString() {
		return "SignupDTO [name=" + name + ", email=" + email + ", password=" + password + ", phone=" + phone + ", dob="
				+ dob + ", role=" + role + ", apartment=" + apartment + ", street=" + street + ", city=" + city
				+ ", state=" + state + ", country=" + country + ", pin=" + pin + "]";
	}

}
