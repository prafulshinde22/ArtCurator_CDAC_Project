package com.artcurator.filters;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import com.artcurator.custom_exceptions.CustomArtCuratorException;
import com.artcurator.util.JwtUtil;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {
	@Autowired
	private UserDetailsService service;
	@Autowired
	private JwtUtil utils;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) {
		try {
			String authHeader = request.getHeader("Authorization");
			String userName = null;
			String jwt = null;
			if (authHeader != null && SecurityContextHolder.getContext().getAuthentication() == null) {
				jwt = authHeader.substring(7);
				userName = utils.extractUsername(jwt);
				UserDetails details = service.loadUserByUsername(userName);
				if (utils.validateToken(jwt, details)) {
					UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
							details.getUsername(), details.getPassword(), details.getAuthorities());
					authToken.setDetails(new WebAuthenticationDetails(request));
					SecurityContextHolder.getContext().setAuthentication(authToken);
				}
			}
			filterChain.doFilter(request, response);
		} catch (Exception e) {
			throw new CustomArtCuratorException("JWT validation failed.", HttpStatus.NOT_FOUND);
		}
	}
}
