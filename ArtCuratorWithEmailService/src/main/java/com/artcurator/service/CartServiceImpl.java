package com.artcurator.service;

import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import com.artcurator.custom_exceptions.CustomArtCuratorException;
import com.artcurator.dao.ProductRepository;
import com.artcurator.dao.UserRepository;
import com.artcurator.pojos.Cart;
import com.artcurator.pojos.Product;
import com.artcurator.pojos.User;

@Service
@Transactional
public class CartServiceImpl implements ICartService {

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private ProductRepository productRepo;

	@Override
	public boolean addArtToCart(Long product_id, Long user_id) {
		Optional<User> userOptional = userRepo.findById(user_id);
		Optional<Product> productOptional = productRepo.findById(product_id);
		Product product = null;
		if (productOptional.isPresent()) {
			product = productOptional.get();
		} else {
			throw new CustomArtCuratorException("Product is not found.", HttpStatus.NOT_FOUND);
		}
		if (userOptional.isPresent()) {
			Cart cart = new Cart(product.getPrice(), product.getImage(), product.getArtist_name(), product.getName());
			userOptional.get().addCart(cart);
			productOptional.get().addProduct(cart);
			return true;
		} else {
//			throw new CustomArtCuratorException("User doesn't exist.", HttpStatus.NOT_FOUND);
			return false;
		}
	}

	@Override
	public List<Cart> getAllCartItems(Long user_id) {
		Optional<User> userOptional = userRepo.findById(user_id);
		if (userOptional.isPresent()) {
			return userOptional.get().getCartItems();
		} else {
			throw new CustomArtCuratorException("User does not exist.", HttpStatus.NOT_FOUND);
		}
	}

	@Override
	public String deleteFromCart(Long cart_id, Long user_id) {
		Optional<User> userOptional = userRepo.findById(user_id);
		if (userOptional.isPresent()) {
			for (Cart cart : userOptional.get().getCartItems()) {
				if (cart.getId() == cart_id) {
					userOptional.get().removeCart(cart);
					return "Item is deleted from the cart.";
				}
			}
			throw new CustomArtCuratorException("Item not found in the cart.", HttpStatus.NOT_FOUND);
		} else {
			throw new CustomArtCuratorException("User does not exist.", HttpStatus.NOT_FOUND);
		}
	}

	@Override
	public String clearWholeCart(Long user_id) {
		Optional<User> userOptional = userRepo.findById(user_id);
		if (userOptional.isPresent()) {
			User user = userOptional.get();
			if (user.getCartItems().isEmpty()) {
				throw new CustomArtCuratorException("Cart is empty.", HttpStatus.NO_CONTENT);
			} else {
				user.getCartItems().removeAll(user.getCartItems());
				return "Cart is cleared.";
			}
		} else {
			throw new CustomArtCuratorException("User does not exist.", HttpStatus.NOT_FOUND);
		}
	}
}