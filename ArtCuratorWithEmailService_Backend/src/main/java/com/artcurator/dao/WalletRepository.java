package com.artcurator.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.artcurator.pojos.Wallet;

public interface WalletRepository extends JpaRepository<Wallet, Long> {
	@Query(value = "select w from Wallet w where user_id =:user_id")
	Optional<Wallet> findByUser_id(@Param(value = "user_id") Long user_id);
	@SuppressWarnings("unchecked")
	Wallet save(Wallet wallet);
}
