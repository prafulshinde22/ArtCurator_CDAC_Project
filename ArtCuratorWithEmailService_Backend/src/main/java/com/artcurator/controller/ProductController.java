package com.artcurator.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.artcurator.custom_exceptions.CustomArtCuratorException;
import com.artcurator.pojos.Product;
import com.artcurator.pojos.Status;
import com.artcurator.service.IProductService;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@CrossOrigin
@RequestMapping("/product")
public class ProductController {
	@Autowired
	private IProductService productService;

	@GetMapping
	public ResponseEntity<?> getProducts(@RequestParam String category,
			@RequestParam String query) {
		List<Product> products = productService.getProducts(category, "%" + query + "%");
		if (products.isEmpty()) {
			throw new CustomArtCuratorException("No products found in this search criteria.", HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(products, HttpStatus.OK);
	}
	
	@GetMapping("/{query}")
	public ResponseEntity<?> getProducts(@PathVariable String query) {
		List<Product> products = productService.getProductsByName("%" + query + "%");
		if (products.isEmpty()) {
			throw new CustomArtCuratorException("No products found in this search criteria.", HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(products, HttpStatus.OK);
	}

	@GetMapping("/getall") // to display products on starting page and buyer home page
	public ResponseEntity<?> getAllUnsoldProducts() {
		List<Product> products = productService.findAllUnsoldProducts();
		if (products.isEmpty()) {
			throw new CustomArtCuratorException("No products found in this search criteria.", HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(products, HttpStatus.OK);
	}

	@PostMapping("/add/{user_id}") // to add product using {USER_ID}
	public ResponseEntity<?> addProduct(@PathVariable Long user_id, @RequestParam String data,
			@RequestParam MultipartFile image) throws IOException {
		Product product = new ObjectMapper().readValue(data, Product.class);
		if (product == null) {
			throw new CustomArtCuratorException("Product form submission failed.", HttpStatus.BAD_REQUEST);
		}
		product.setImage(image.getBytes());
		product.setImage_type(image.getContentType());
		return new ResponseEntity<>(productService.addProduct(product, user_id), HttpStatus.OK);
	}

	@DeleteMapping("/delete/{product_id}") // to delete product using {PRODUCT_ID}
	public ResponseEntity<?> deleteProduct(@PathVariable Long product_id) {
		try {
			return new ResponseEntity<>(productService.deleteProduct(product_id), HttpStatus.OK);
		} catch (RuntimeException e) {
			throw new CustomArtCuratorException("Deletion failed.", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/unsold/{user_id}") // to display products on seller home page using {SELLER_ID}
	public ResponseEntity<?> getAllUnSold(@PathVariable Long user_id) {
		List<Product> products = productService.findAllByIdStatus(user_id, Status.UNSOLD);
		if (products.isEmpty()) {
			throw new CustomArtCuratorException("No Products found.", HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(products, HttpStatus.OK);
	}

	@GetMapping("/sold/{user_id}") // to display products on seller home page using {SELLER_ID}
	public ResponseEntity<?> getAllSold(@PathVariable Long user_id) {
		List<Product> products = productService.findAllByIdStatus(user_id, Status.SOLD);
		if (products.isEmpty()) {
			throw new CustomArtCuratorException("No Products found.", HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(products, HttpStatus.OK);
	}

	// to download single product image for testing
	@GetMapping("/image/{user_id}")
	public ResponseEntity<?> getProductImage(@PathVariable Long user_id) {
		byte[] image = productService.getImage(user_id);
		if (image == null) {
			throw new CustomArtCuratorException("No image found.", HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(image, HttpStatus.OK);
	}
}