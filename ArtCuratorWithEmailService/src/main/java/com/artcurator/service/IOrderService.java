package com.artcurator.service;

import java.util.List;

import com.artcurator.pojos.Order;

public interface IOrderService {
	String saveOrderHistory(Long user_id);
	List<Order> getOrders(Long id);
}
