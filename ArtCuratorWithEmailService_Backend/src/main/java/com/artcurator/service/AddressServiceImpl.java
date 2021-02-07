package com.artcurator.service;

import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import com.artcurator.custom_exceptions.CustomArtCuratorException;
import com.artcurator.dao.AddressRespository;
import com.artcurator.dao.UserRepository;
import com.artcurator.pojos.Address;
import com.artcurator.pojos.User;

@Service
@Transactional
public class AddressServiceImpl implements IAddressService {
	@Autowired
	private UserRepository userRepo;

	@Autowired
	AddressRespository addressRepository;

	@Override
	public String updateAddress(Long user_id, Long addr_id, Address address) {
		Optional<User> userOptional = userRepo.findById(user_id);
		if (userOptional.isPresent()) {
			for (Address addr : userOptional.get().getAddresses()) {
				if (addr.getId() == addr_id) {
					addr.setApartment(address.getApartment());
					addr.setStreet(address.getStreet());
					addr.setCity(address.getCity());
					addr.setState(address.getState());
					addr.setCountry(address.getCountry());
					addr.setPin(address.getPin());
					address.setId(addr_id);
					return "Address updated.";
				}
			}
		}
		
		throw new CustomArtCuratorException("User not found.", HttpStatus.NOT_FOUND);
	}

	@Override
	public List<Address> getAddresses(Long id) {
		Optional<User> userOptional = userRepo.findById(id);
		if (userOptional.isPresent()) {
			userOptional.get().getAddresses().size();
			return userOptional.get().getAddresses();
		}
		throw new CustomArtCuratorException("User not found.", HttpStatus.NOT_FOUND);
	}

	@Override
	public String addAddress(Long id, Address address) {
		Optional<User> userOptional = userRepo.findById(id);
		if (userOptional.isPresent()) {
			userOptional.get().addAddress(address);
			return "Address is added.";
		}
		throw new CustomArtCuratorException("User not found.", HttpStatus.NOT_FOUND);
	}

	@Override
	public String deleteAddress(Long user_id, Long addr_id) {
		Optional<User> userOptional = userRepo.findById(user_id);
		if (userOptional.isPresent()) {
			User user = userOptional.get();
			List<Address> addresses = user.getAddresses();
			for (Address addr : addresses) {
				if (addr.getId() == addr_id) {
					user.removeAddress(addr);
					return "Your address is deleted.";
				}
			}
		}
		throw new CustomArtCuratorException("User not found.", HttpStatus.NOT_FOUND);
	}

	@Override
	public boolean updateAddr(Long user_id, Address address) {
		Optional<User> userOptional = userRepo.findById(user_id);
		if (userOptional.isPresent()) {
			Address addr = userOptional.get().getAddresses().get(0);
			
			addr.setApartment(address.getApartment());
			addr.setStreet(address.getStreet());
			addr.setCity(address.getCity());
			addr.setState(address.getState());
			addr.setCountry(address.getCountry());
			addr.setPin(address.getPin());

			return true;
		}
		
		return false;
	}
}