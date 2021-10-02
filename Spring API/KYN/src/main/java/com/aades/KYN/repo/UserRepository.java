package com.aades.KYN.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aades.KYN.entities.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Long>{

	Users findByuserName(String userName);

}
