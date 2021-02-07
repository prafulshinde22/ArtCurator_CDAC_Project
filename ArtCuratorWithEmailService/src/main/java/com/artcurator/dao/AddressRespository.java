package com.artcurator.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.artcurator.pojos.Address;

public interface AddressRespository extends JpaRepository<Address, Long> {

}