package com.artcurator.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.artcurator.dao.UserRepository;
import com.artcurator.pojos.User;

@Service
@Transactional
public class DaoBasedUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository dao;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Optional<User> userOptional = dao.findByEmail(email);
		User user;
		if (userOptional.isPresent()) {
			user = userOptional.get();
			if (user == null)
				throw new UsernameNotFoundException("User by email " + email + " not found!");
			return new CustomUserDetails(user);
		}

		return null;

	}
}
