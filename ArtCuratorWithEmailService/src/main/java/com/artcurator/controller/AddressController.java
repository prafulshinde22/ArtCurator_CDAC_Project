package com.artcurator.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.artcurator.custom_exceptions.CustomArtCuratorException;
import com.artcurator.pojos.Address;
import com.artcurator.service.IAddressService;
 
@RestController
@CrossOrigin
@RequestMapping("/address")
public class AddressController {
	@Autowired
	private IAddressService addressService;
	
	@PutMapping("/updateaddress/{user_id}")
	public ResponseEntity<?> updateAddress(@PathVariable Long user_id, @RequestBody Address address) {
		System.out.println(address);
		if(addressService.updateAddr(user_id, address)) {
			return new ResponseEntity<>(HttpStatus.OK);
		}
		
		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}

	@GetMapping("/addresses/{id}") // API to fetch all addresses of a user by his ID.
	public ResponseEntity<?> getAddresses(@PathVariable Long id) {
		List<Address> addresses = addressService.getAddresses(id);
		if (addresses.isEmpty()) {
			throw new CustomArtCuratorException("No addresses are currently added.", HttpStatus.NO_CONTENT);
		}
		
		return new ResponseEntity<>(addresses, HttpStatus.OK);
	}

	@PostMapping("/addaddress/{user_id}")
	public ResponseEntity<?> addAddress(@PathVariable Long user_id, @RequestBody Address address) {
		return new ResponseEntity<>(addressService.addAddress(user_id, address), HttpStatus.OK);
	}

	@DeleteMapping("/deleteaddress/{user_id}/{addr_id}")
	public ResponseEntity<?> deleteAddress(@PathVariable Long user_id, @PathVariable Long addr_id) {
		return new ResponseEntity<>(addressService.deleteAddress(user_id, addr_id), HttpStatus.OK);
	}
}