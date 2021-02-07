package com.artcurator.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.artcurator.pojos.Product;
import com.artcurator.pojos.Status;

public interface ProductRepository extends JpaRepository<Product, Long> {
	@Query("SELECT p FROM Product p WHERE p.category = :category AND p.name LIKE :query")
	List<Product> getProducts(String category, String query);
	
	@Query("SELECT p FROM Product p WHERE p.name LIKE :query")
	List<Product> getProducts(String query);
	
	@Query(value = "SELECT p from Product p WHERE p.status=:status")
	List<Product> findAll(@Param("status") Status status);
	
	@SuppressWarnings("unchecked")
	Product save(Product p);
	
	void deleteById(Long id);
	
	@Query(value = "SELECT p FROM Product p WHERE p.id=:id AND p.status=:status")
	List<Product> findByIdAndStatus(Long id, Status status);
	
	@Query(value = "SELECT p.image FROM Product p WHERE p.id=:id")
	byte[] getImage(@Param("id") Long id);
	
	@Query("select p from Product p where p.artist_name = :name")
	Optional<Product> findByArtist_name(@Param(value = "name") String name);
}