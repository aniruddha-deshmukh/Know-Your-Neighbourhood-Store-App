package com.aades.KYN.service;

import java.util.List;

import com.aades.KYN.entities.Users;

public interface UserService {
	public Users addUser(Users users);
	public Users login(Users users);
	public List<Users> getUsers();
}
