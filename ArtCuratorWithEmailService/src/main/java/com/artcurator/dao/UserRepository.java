package com.artcurator.dao;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.artcurator.pojos.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	Optional<User> findByEmailAndDob(String email, LocalDate dob);
	Optional<User> findByEmailAndPassword(String email, String password);
	Optional<User> findById(Long user_id);
	Optional<User> findByEmail(String email);
	List<User> findAll();
	User save(UserRepository user);
	void deleteById(Long user_id);
	@Query("select c from Cart c where c.artist_name = :name")
	User findByArtist_name(@Param(value = "name") String name);
	User findByName(String artist_name);
}