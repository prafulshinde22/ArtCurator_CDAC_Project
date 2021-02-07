package com.artcurator.pojos;

import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

@Entity
@Table(name = "Orders")
public class Order extends BaseEntity {
	@Column(name = "order_id")
	private Long order_id;
	@OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
	private Product product;
	@Column(name = "amount", columnDefinition = "decimal(10, 2)")
	private double amount;
	@DateTimeFormat(iso = ISO.DATE_TIME)
	@Column(name = "order_time")
	private LocalDateTime timestamp;

	public Order() {
		super();
	}
	public Order(Long order_id, double amount, LocalDateTime timestamp) {
		super();
		this.order_id = order_id;
		this.amount = amount;
		this.timestamp = timestamp;
	}

	public Long getOrder_id() {
		return order_id;
	}
	public void setOrder_id(Long order_id) {
		this.order_id = order_id;
	}
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public LocalDateTime getTimestamp() {
		return timestamp;
	}
	public void setTimestamp(LocalDateTime timestamp) {
		this.timestamp = timestamp;
	}

	@Override
	public String toString() {
		return "Order [order_id=" + order_id + ", product_id=" + product.getId() + ", amount=" + amount + ", order_time="
				+ timestamp + "]";
	}
}