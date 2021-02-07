package com.artcurator.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.artcurator.custom_exceptions.CustomArtCuratorException;
import com.artcurator.pojos.User;
import com.artcurator.service.IUserService;
import com.artcurator.service.IWalletService;

@RestController
@RequestMapping("/wallet")
@CrossOrigin
public class WalletController {
	@Autowired
	private IWalletService walletService;
	@Autowired
	private IUserService userService;

	@GetMapping("/{user_id}") // API for Seller to view his wallet using {USER_ID}
	public ResponseEntity<?> getWalletAmount(@PathVariable Long user_id) {
		Optional<User> userOptional = userService.findUserById(user_id);
		if (userOptional.isPresent()) {
			return new ResponseEntity<>(userOptional.get().getWallet().getAmount(), HttpStatus.OK);
		}
		throw new CustomArtCuratorException("User not found.", HttpStatus.NOT_FOUND);
	}

	@PutMapping("/addmoney") // API for buyer to add amount in wallet before placing order using
								// {USER_ID,AMOUNT}
	public ResponseEntity<?> updateBuyerWallet(@RequestParam Long user_id, @RequestParam double amount) {
		return new ResponseEntity<>(walletService.addMoneyToWallet(user_id, amount), HttpStatus.OK);
	}
}