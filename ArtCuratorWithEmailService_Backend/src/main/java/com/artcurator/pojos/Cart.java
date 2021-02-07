package com.artcurator.pojos;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name = "Cart")
public class Cart extends BaseEntity {
	@Column(name = "amount",length = 75, columnDefinition = "decimal(10, 2)")
	private double amount;
	@Lob
	@Column(name = "image")
	private byte[] image;
	@Column(name = "artist_name",length = 75)
	private String artist_name;
	@Column(name = "art_name",length = 75)
	private String art_name;
	
	public Cart() {
	}
	public Cart(double amount, byte[] image, String artist_name, String art_name) {
		super();
		this.amount = amount;
		this.image = image;
		this.artist_name = artist_name;
		this.art_name = art_name;
	}

	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public byte[] getImage() {
		return image;
	}
	public void setImage(byte[] image) {
		this.image = image;
	}
	public String getArtist_name() {
		return artist_name;
	}
	public void setArtist_name(String artist_name) {
		this.artist_name = artist_name;
	}
	public String getArt_name() {
		return art_name;
	}
	public void setArt_name(String art_name) {
		this.art_name = art_name;
	}

	@Override
	public String toString() {
		return "Cart [id=" + getId() + ", amount=" + amount + ", image=" + Arrays.toString(image) + ", artist_name="
				+ artist_name + ", art_name=" + art_name + "]";
	}
}