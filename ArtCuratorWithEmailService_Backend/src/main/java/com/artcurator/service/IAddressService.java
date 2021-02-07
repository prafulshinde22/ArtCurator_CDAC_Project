package com.artcurator.service;

import java.util.List;

import com.artcurator.pojos.Address;

public interface IAddressService {
	String deleteAddress(Long user_id, Long addr_id);
	List<Address> getAddresses(Long id);
	String updateAddress(Long user_id, Long addr_id, Address address);
	String addAddress(Long id, Address address);
	boolean updateAddr(Long user_id, Address address);
}
