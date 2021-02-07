package com.artcurator.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.artcurator.custom_exceptions.CustomArtCuratorException;
import com.artcurator.dao.AddressRespository;
import com.artcurator.dao.UserRepository;
import com.artcurator.pojos.Address;
import com.artcurator.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private BCryptPasswordEncoder encoder;

	@Autowired
	AddressRespository addressRepository;

	@Override
	public boolean getUserByEmailAndDob(String email, LocalDate dob) {
		if (userRepo.findByEmailAndDob(email, dob).isPresent()) {
			return true;
		}
		
		return false;
	}

	@Override
	public void changePassword(String email, String newPassword) {
		Optional<User> userOptional = userRepo.findByEmail(email);
		if (userOptional.isPresent()) {
			userOptional.get().setPassword(encoder.encode(newPassword));
			return;
		}

		throw new CustomArtCuratorException("User not found.", HttpStatus.NOT_FOUND);
	}

	@Override
	public boolean updatePassword(Long id, String oldPassword, String newPassword) {
		Optional<User> userOptional = userRepo.findById(id);
		
		if (userOptional.isPresent()) {
			if (BCrypt.checkpw(oldPassword, userOptional.get().getPassword())) {
				userOptional.get().setPassword(encoder.encode(newPassword));
				return true;
			}
			
			return false;
		}
		
		throw new CustomArtCuratorException("User not found.", HttpStatus.NOT_FOUND);
	}

	@Override
	public boolean changeEmail(Long id, String newEmail) {
		Optional<User> userOptional = userRepo.findById(id);
		if (userOptional.isPresent()) {
			userOptional.get().setEmail(newEmail);
			return true;
		}
		
		//throw new CustomArtCuratorException("User not found.", HttpStatus.NOT_FOUND);
		
		return false;
	}

	@Override
	public boolean changePhone(Long id, String phone) {
		Optional<User> userOptional = userRepo.findById(id);
		if (userOptional.isPresent()) {
			userOptional.get().setPhone(phone);
			return true;
		}
		
		//throw new CustomArtCuratorException("User not found.", HttpStatus.NOT_FOUND);
		return false;
	}

	@Override
	public User getUser(int id) {
		Optional<User> userOptional = userRepo.findById(id);
		if (userOptional.isPresent()) {
			User user = userOptional.get();
			user.getAddresses().size();
			return user;
		}
		throw new CustomArtCuratorException("User not found.", HttpStatus.NOT_FOUND);
	}

	@Override
	public Optional<User> findByEmailAndPassword(String email, String password) {
		return userRepo.findByEmailAndPassword(email, password);
	}

	@Override
	public void encryptPassword(int id) {
		Optional<User> userOptional = userRepo.findById(id);
		if (userOptional.isPresent()) {
			userOptional.get().setPassword(encoder.encode(userOptional.get().getPassword()));
		}
		throw new CustomArtCuratorException("User not found.", HttpStatus.NOT_FOUND);
	}

	@Override
	public String getRole(Long id) {
		Optional<User> userOptional = userRepo.findById(id);
		if (userOptional.isPresent()) {
			return userOptional.get().getRole().toString();
		}
		throw new CustomArtCuratorException("User not found.", HttpStatus.NOT_FOUND);
	}

	@Override
	public String addUser(User user, Address address) {
		user.addAddress(address);
		user.setPassword(encoder.encode(user.getPassword()));
		userRepo.save(user);
		return "Sign up successful.";
	}

	@Override
	public Optional<User> findUserByEmail(String email) {
		return userRepo.findByEmail(email);
	}

	@Override
	public List<User> findAllUser() {
		return userRepo.findAll();
	}

	@Override
	public Optional<User> findUserById(Long id) {
		return userRepo.findById(id);
	}

	@Override
	public String deleteAccount(Long user_id) {
		Optional<User> userOptional = userRepo.findById(user_id.intValue());
		if (userOptional.isPresent()) {
			userRepo.deleteById(user_id);
			return "Account is deleted.";
		} else {
			throw new CustomArtCuratorException("User not found.", HttpStatus.NOT_FOUND);
		}
	}
}