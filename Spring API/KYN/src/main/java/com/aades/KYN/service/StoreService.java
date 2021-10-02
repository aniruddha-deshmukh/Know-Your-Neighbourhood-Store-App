package com.aades.KYN.service;

import java.util.List;
import java.util.Optional;

import com.aades.KYN.entities.Store;

public interface StoreService {
	public Store addStore(Store store);
	public List<Store> getStore();
	public Optional<Store> findStoreById(int Storeid);
	public void  deleteStoreById(int id);
	public List<Store> searchForStore(String searchKeyword);
}
