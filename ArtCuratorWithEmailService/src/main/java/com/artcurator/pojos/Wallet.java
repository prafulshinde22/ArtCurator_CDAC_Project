package com.artcurator.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "Wallet")
public class Wallet extends BaseEntity {
	@Column(name = "amount", columnDefinition = "decimal(10, 2)")
	private double amount;

	public Wallet() {
		super();
		this.amount = 0.00;
	}
 
	public Wallet(double amount) {
		super();
		this.amount = amount;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}

	@Override
	public String toString() {
		return "Wallet [getId()=" + getId() + ", amount=" + amount + "]";
	}
}