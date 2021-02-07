package com.artcurator.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.artcurator.custom_exceptions.CustomArtCuratorException;
import com.artcurator.dao.OrderRepository;
import com.artcurator.dao.ProductRepository;
import com.artcurator.dao.UserRepository;
import com.artcurator.email.bean.Mail;
import com.artcurator.email.service.MailService;
import com.artcurator.pojos.Address;
import com.artcurator.pojos.Cart;
import com.artcurator.pojos.Order;
import com.artcurator.pojos.Product;
import com.artcurator.pojos.Status;
import com.artcurator.pojos.User;
@Service
@Transactional
public class OrderServiceImpl implements IOrderService {
	@Autowired
	private MailService mailRepo;
	@Autowired
	private OrderRepository orderRepo;

	@Autowired
	private ProductRepository productRepo;

	@Autowired
	private UserRepository userRepo;

	@Override
	public String saveOrderHistory(Long user_id) {
		Optional<User> userOptional = userRepo.findById(user_id);
		if (!userOptional.isPresent()) {
			throw new CustomArtCuratorException("User not found.", HttpStatus.NOT_FOUND);
		}
		User buyer = userOptional.get();
		List<Cart> cartItems = buyer.getCartItems();
		if (cartItems.isEmpty()) {
			throw new CustomArtCuratorException("Your cart is empty.", HttpStatus.NO_CONTENT);
		}
		double totalAmount = 0;
		for (Cart cart : cartItems) {
			totalAmount += cart.getAmount();
		}
		if (buyer.getWallet().getAmount() < totalAmount) {
			throw new CustomArtCuratorException("Insufficient funds. Please add money.", HttpStatus.BAD_REQUEST);
		}
		for (Cart cart : cartItems) {
			Long lastOrderId = orderRepo.getLastOrderId();
			if (lastOrderId == null) {
				lastOrderId = 0L;
			}
			Order order = new Order(++lastOrderId, cart.getAmount(), LocalDateTime.now());
			buyer.addOrder(order);
			Optional<Product> productOptional = productRepo.findById(orderRepo.getProductId(cart.getId()));
			if (!productOptional.isPresent()) {
				throw new CustomArtCuratorException("Product is not found.", HttpStatus.NOT_FOUND);
			}
			productOptional.get().setStatus(Status.SOLD);
			order.setProduct(productOptional.get());
			User seller = userRepo.findByName(cart.getArtist_name());
			seller.getWallet().setAmount(seller.getWallet().getAmount() + cart.getAmount());
			buyer.getWallet().setAmount(buyer.getWallet().getAmount() - cart.getAmount());
		}
		buyer.getCartItems().removeAll(buyer.getCartItems());
		Mail mail = new Mail();
        mail.setMailFrom("artcurator.arts.web@gmail.com");
        mail.setMailTo(buyer.getEmail());
        mail.setMailSubject("Order-Status-From-ArtCurator");
        Address buyerAddress=buyer.getAddresses().get(0);
        mail.setMailContent("Payment Received of Rupees "+totalAmount+".\nThank You "+buyer.getName()
        +" For Using ArtCurator...\nYour Order is Placed.\nAnd Will be Delivered By 10 Working Days.\nYou will receive SMS updates on your registered no "
        		+buyer.getPhone()+".\nDelivery Address \n:"+buyerAddress.getApartment()+","+buyerAddress.getStreet()+","+buyerAddress.getCity()+","+buyerAddress.getState()+","+buyerAddress.getCountry()+"-"+buyerAddress.getPin());
        mailRepo.sendEmail(mail);
		return "Order successfully placed.";
	}

	@Override
	public List<Order> getOrders(Long id) {
		Optional<User> userOptional = userRepo.findById(id);
		if (userOptional.isPresent()) {
			userOptional.get().getOrders().size();
			return userOptional.get().getOrders();
		}
		throw new CustomArtCuratorException("User not found.", HttpStatus.NOT_FOUND);
	}
}