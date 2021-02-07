package com.artcurator.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.artcurator.pojos.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
	@Query(value = "select max(o.order_id) from Order o")
	Long getLastOrderId();
	@Query(value = "select product_id from cart where id = :id", nativeQuery = true)
	Long getProductId(@Param(value = "id") Long id);
}