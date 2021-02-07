package com.artcurator.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "Address")
public class Address extends BaseEntity {
	@Column(name = "apartment", nullable = false, length = 75)
	@Size(min = 4, max = 75)
	@NotNull
	private String apartment;
	@Column(name = "street", nullable = false, length = 75)
	@Size(min = 4, max = 75)
	@NotNull
	private String street;
	@Column(name = "city", nullable = false, length = 75)
	@Size(min = 4, max = 75)
	@NotNull
	private String city;
	@Column(name = "state", nullable = false, length = 75)
	@Size(min = 4, max = 75)
	@NotNull
	private String state;
	@Column(name = "country", nullable = false, length = 75)
	@Size(min = 4, max = 75)
	@NotNull
	private String country;
	@Column(name = "pin", nullable = false, length = 6)
	@Size(min = 3, max = 6)
	private String pin;
	
	public Address(@Size(min = 4, max = 75) @NotNull String apartment, @Size(min = 4, max = 75) @NotNull String street,
			@Size(min = 4, max = 75) @NotNull String city, @Size(min = 4, max = 75) @NotNull String state,
			@Size(min = 4, max = 75) @NotNull String country, @Size(min = 3, max = 6) String pin) {
		super();
		this.apartment = apartment;
		this.street = street;
		this.city = city;
		this.state = state;
		this.country = country;
		this.pin = pin;
	}

	public Address() {
		super();
	}
	public String getApartment() {
		return apartment;
	}
	public void setApartment(String apartment) {
		this.apartment = apartment;
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getPin() {
		return pin;
	}
	public void setPin(String pin) {
		this.pin = pin;
	}
	@Override
	public String toString() {
		return "Address [id=" + getId() + ", apartment=" + apartment + ", street=" + street + ", city=" + city
				+ ", state=" + state + ", country=" + country + ", pin=" + pin + "]";
	}
}