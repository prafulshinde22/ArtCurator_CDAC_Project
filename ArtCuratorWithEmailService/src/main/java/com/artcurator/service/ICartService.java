package com.artcurator.service;

import java.util.List;

import com.artcurator.pojos.Cart;

public interface ICartService {
	String deleteFromCart(Long item_id, Long user_id);
	boolean addArtToCart(Long product_id, Long user_id);
	String clearWholeCart(Long id);
	List<Cart> getAllCartItems(Long user_id);
}
