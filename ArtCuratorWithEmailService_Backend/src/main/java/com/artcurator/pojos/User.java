package com.artcurator.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "User")
public class User extends BaseEntity {
	@Column(name = "name", nullable = false, length = 75)
	@Size(min = 4, max = 75)
	@NotNull
	private String name;
	@Column(name = "email", unique = true, nullable = false, length = 75)
	@Size(min = 4, max = 75)
	@NotNull
	private String email;
	@Column(name = "password", nullable = false, length = 75)
	@Size(min = 4, max = 75)
	@NotNull
	@JsonIgnore
	private String password;
	@Column(name = "phone", unique = false, length = 11, nullable = false)
	@NotNull
	private String phone;
	@DateTimeFormat(pattern = "yyyy-MM-dd", iso = ISO.DATE)
	@Column(name = "dob", nullable = false)
	private LocalDate dob;
	@Enumerated(EnumType.STRING)
	@Column(name = "role", nullable = false, length = 10)
	private Role role;
	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
	@JoinColumn(name = "user_id", referencedColumnName = "id")
	private List<Address> addresses = new ArrayList<Address>();
	@JsonIgnore
	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
	@JoinColumn(name = "wallet_id", referencedColumnName = "id")
	private Wallet wallet = new Wallet();
	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
	@JoinColumn(name = "user_id")
	private List<Cart> cartItems = new ArrayList<>();
	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
	@JoinColumn(name = "seller_id", referencedColumnName = "id")
	private List<Product> products = new ArrayList<>();
	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private List<Order> orders = new ArrayList<>();

	public User() {
		super();
	}
	public User(@Size(min = 4, max = 75) @NotNull String name, @Size(min = 4, max = 75) @NotNull String email,
			@Size(min = 4, max = 75) @NotNull String password, @NotNull String phone, LocalDate dob, Role role) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.phone = phone;
		this.dob = dob;
		this.role = role;
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public LocalDate getDob() {
		return dob;
	}
	public void setDob(LocalDate dob) {
		this.dob = dob;
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	public List<Address> getAddresses() {
		return addresses;
	}
	public void setAddresses(List<Address> addresses) {
		this.addresses = addresses;
	}
	public List<Cart> getCartItems() {
		return cartItems;
	}
	
	// Helper methods
	// Address helper
	public void addAddress(Address address) {
		this.addresses.add(address);
	}
	public void removeAddress(Address address) {
		this.addresses.remove(address);
	}
	// Product Helper
	public void addProduct(Product product) {
		this.products.add(product);
	}
	public void removeProduct(Product product) {
		this.products.remove(product);
	}
	// Order helper
	public void addOrder(Order order) {
		this.orders.add(order);
	}
	public void removeOrder(Order order) {
		this.orders.remove(order);
	}
	// Cart helper
	public void addCart(Cart cart) {
		this.cartItems.add(cart);
	}
	public void removeCart(Cart cart) {
		this.cartItems.remove(cart);
	}
	public Wallet getWallet() {
		return wallet;
	}
	public void setWallet(Wallet wallet) {
		this.wallet = wallet;
	}
	// Wallet helper
	public void addWallet(Wallet wallet) {
		this.wallet = wallet;
	}
	public void removeWallet(Wallet wallet) {
		this.wallet = null;
	}
	public List<Product> getProducts() {
		return products;
	}
	public void setProducts(List<Product> products) {
		this.products = products;
	}
	public List<Order> getOrders() {
		return orders;
	}
	public void setOrders(List<Order> orders) {
		this.orders = orders;
	}
	public void setCartItems(List<Cart> cartItems) {
		this.cartItems = cartItems;
	}

	@Override
	public String toString() {
		return "User [id=" + getId() + ", name=" + name + ", email=" + email + ", password=" + password + ", phone="
				+ phone + ", dob=" + dob + ", role=" + role + "]";
	}
}