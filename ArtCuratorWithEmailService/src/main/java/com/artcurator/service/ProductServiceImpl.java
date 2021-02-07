package com.artcurator.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.artcurator.custom_exceptions.CustomArtCuratorException;
import com.artcurator.dao.ProductRepository;
import com.artcurator.dao.UserRepository;
import com.artcurator.pojos.Product;
import com.artcurator.pojos.Status;
import com.artcurator.pojos.User;

@Service
@Transactional
public class ProductServiceImpl implements IProductService {

	@Autowired
	private ProductRepository productRepo;

	@Autowired
	private UserRepository userRepo;

	@Override
	public List<Product> getProducts(String category, String query) {
		return productRepo.getProducts(category, query);
	}

	@Override
	public List<Product> findAllUnsoldProducts() {
		return productRepo.findAll(Status.UNSOLD);
	}

	@Override
	public String addProduct(Product product, Long id) {
		Optional<User> user = userRepo.findById(id);
		if (user.isPresent()) {
			product.setArtist_name(user.get().getName());
			product.setStatus(Status.UNSOLD);
			user.get().addProduct(product);
			return "Product is added.";
		}
		throw new CustomArtCuratorException("User not found.", HttpStatus.NOT_FOUND);
	}

	@Override
	public String deleteProduct(Long product_id) {
		productRepo.deleteById(product_id);
		return "Product Deleted";
	}

	@Override
	public List<Product> findAllByIdStatus(Long user_id, Status status) {
		Optional<User> userOptional = userRepo.findById(user_id);
		List<Product> products = null;
		if (userOptional.isPresent()) {
			products = userOptional.get().getProducts();
			if (products.isEmpty()) {
				throw new CustomArtCuratorException("No products found.", HttpStatus.NO_CONTENT);
			}
			products = products.stream().filter(product -> product.getStatus().ordinal() == status.ordinal())
					.collect(Collectors.toList());
		}
		return products;
	}

	@Override
	public byte[] getImage(Long product_id) {
		return productRepo.getImage(product_id);
	}

	@Override
	public List<Product> getProductsByName(String query) {
		return productRepo.getProducts(query);
	}
}