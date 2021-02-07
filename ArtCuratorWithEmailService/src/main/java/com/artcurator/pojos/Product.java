package com.artcurator.pojos;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;

@Entity
@Table(name = "Product")
public class Product extends BaseEntity {
	@Column(name = "name", nullable = false,length = 75)
	@Size(min = 4, max = 75)
	@NotNull
	private String name;
	@Column(name = "category", nullable = false,length = 75)
	@Size(min = 4, max = 75)
	@NotNull
	private String category;
	@Column(name = "price", columnDefinition = "decimal(10, 2)")
	@Min(value = 0)
	private double price;
	@Column(name = "description", nullable = true, length = 500)
	private String description;
	@Lob
	@Column(name = "image")
	private byte[] image;
	@Column(name = "image_type", length = 75, nullable = false)
	private String image_type;
	@Column(name = "artist", length = 75, nullable = false)
	private String artist_name;
	@Enumerated(EnumType.STRING)
	@Column(name = "status", nullable = false,length = 10)
	private Status status;
	@JsonIgnore 
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true /* fetch = FetchType.LAZY */)
	@JoinColumn(name = "product_id")
	List<Cart> cartItems = new ArrayList<Cart>();

	public Product() {
	}
	public Product(@Size(min = 4, max = 75) String name, @Size(min = 4, max = 75) String category, @Min(0) double price,
			String description) {
		super();
		this.name = name;
		this.category = category;
		this.price = price;
		this.description = description;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public byte[] getImage() {
		return image;
	}
	public void setImage(byte[] image) {
		this.image = image;
	}
	public String getImage_type() {
		return image_type;
	}
	public void setImage_type(String image_type) {
		this.image_type = image_type;
	}
	public String getArtist_name() {
		return artist_name;
	}
	public void setArtist_name(String artist_name) {
		this.artist_name = artist_name;
	}
	public Status getStatus() {
		return status;
	}
	public void setStatus(Status status) {
		this.status = status;
	}
	public List<Cart> getCartItems() {
		return cartItems;
	}
	public void setCartItems(List<Cart> cartItems) {
		this.cartItems = cartItems;
	}
	// Helper methods
	public void addProduct(Cart cart) {
		this.cartItems.add(cart);
	}
	public void removeProduct(Cart cart) {
		this.cartItems.remove(cart);
	}

	@Override
	public String toString() {
		return "Product [id=" + getId() + ", name=" + name + ", category=" + category + ", price=" + price
				+ ", description=" + description + ", image=" + Arrays.toString(image) + ", image_type=" + image_type
				+ ", artist_name=" + artist_name + ", status=" + status + "]";
	}

}