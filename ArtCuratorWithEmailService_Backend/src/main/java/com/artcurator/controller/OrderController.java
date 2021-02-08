package com.artcurator.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.artcurator.custom_exceptions.CustomArtCuratorException;
import com.artcurator.pojos.Order;
import com.artcurator.service.IOrderService;

@RestController
@CrossOrigin
@RequestMapping("/order")
public class OrderController {
	@Autowired
	private IOrderService orderService;

	@PostMapping("/add/{user_id}")
	public ResponseEntity<?> addToOrder(@PathVariable Long user_id) {
		try {
			return new ResponseEntity<>(orderService.saveOrderHistory(user_id), HttpStatus.OK);
		} catch (RuntimeException e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>(orderService.saveOrderHistory(user_id), HttpStatus.OK);
	}
	
	@GetMapping("/orders/{id}") // API to fetch all orders of a user by his ID.
	public ResponseEntity<?> getOrders(@PathVariable Long id) {
		List<Order> orders = orderService.getOrders(id);
		if (orders.isEmpty()) {
			throw new CustomArtCuratorException("No orders are currently added.", HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(orders, HttpStatus.OK);
	}
}