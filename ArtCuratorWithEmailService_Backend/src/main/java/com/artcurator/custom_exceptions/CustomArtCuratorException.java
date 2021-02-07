package com.artcurator.custom_exceptions;

import org.springframework.http.HttpStatus;

@SuppressWarnings("serial")
public class CustomArtCuratorException extends RuntimeException {
	private HttpStatus httpStatus;

	public CustomArtCuratorException(String errMsg, HttpStatus httpStatus) {
		super(errMsg);
		this.httpStatus = httpStatus;
	}

	public HttpStatus getHttpStatus() {
		return httpStatus;
	}
	public void setHttpStatus(HttpStatus httpStatus) {
		this.httpStatus = httpStatus;
	}
}