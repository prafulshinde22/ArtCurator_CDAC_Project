package com.artcurator.service;

import java.util.List;

import com.artcurator.pojos.Product;
import com.artcurator.pojos.Status;

public interface IProductService {
	List<Product> getProducts(String category, String query);
	List<Product> findAllUnsoldProducts();
	String addProduct(Product product, Long id);
	String deleteProduct(Long id);
	List<Product> findAllByIdStatus(Long id, Status status);
	byte[] getImage(Long id);
	List<Product> getProductsByName(String string);
}
