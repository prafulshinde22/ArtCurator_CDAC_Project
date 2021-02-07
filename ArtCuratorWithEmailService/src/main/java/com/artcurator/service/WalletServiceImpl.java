package com.artcurator.service;

import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import com.artcurator.custom_exceptions.*;
import com.artcurator.dao.UserRepository;
import com.artcurator.pojos.User;

@Service
@Transactional
public class WalletServiceImpl implements IWalletService {
	@Autowired
	private UserRepository userRepo;

	@Override
	public String addMoneyToWallet(Long user_id, double amount) {
		Optional<User> userOptional = userRepo.findById(user_id);
		if (userOptional.isPresent()) {
			User user = userOptional.get();
			user.getWallet().setAmount(user.getWallet().getAmount() + amount);
			return "Money added to the wallet.";
		}
		throw new CustomArtCuratorException("User not found.", HttpStatus.NOT_FOUND);
	}
}