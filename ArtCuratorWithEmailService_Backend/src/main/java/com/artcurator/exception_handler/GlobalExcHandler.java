package com.artcurator.exception_handler;

import java.util.ArrayList;
import java.util.List;

import javax.validation.ConstraintViolationException;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.artcurator.custom_exceptions.CustomArtCuratorException;
import com.artcurator.dto.ErrorResponse;

@ControllerAdvice
public class GlobalExcHandler extends ResponseEntityExceptionHandler {
	@ExceptionHandler(CustomArtCuratorException.class)
	public ResponseEntity<?> handleResourceNotFoundException(CustomArtCuratorException exc, WebRequest request) {
		//ErrorResponse errResp = new ErrorResponse(exc.getMessage(), request.getDescription(false));
		return new ResponseEntity<>(exc.getHttpStatus());
	}

	@ExceptionHandler(ConstraintViolationException.class)
	public ResponseEntity<?> handleConstraintViolationExc(ConstraintViolationException e, WebRequest request) {
		ErrorResponse errResp = new ErrorResponse(e.getMessage(), request.getDescription(false));
		return new ResponseEntity<>(errResp, HttpStatus.BAD_REQUEST);
	}

	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		List<String> validationErrs = new ArrayList<>();
		for (FieldError err : ex.getBindingResult().getFieldErrors())
			validationErrs.add(err.getDefaultMessage());
		ErrorResponse errResp = new ErrorResponse("Validation Failed", validationErrs.toString());
		return new ResponseEntity<Object>(errResp, status);// HTTP 400

	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<?> handleAnyException(Exception exc, WebRequest request) {
		ErrorResponse errResp = new ErrorResponse(exc.getMessage(), request.getDescription(false));
		return new ResponseEntity<>(errResp, HttpStatus.INTERNAL_SERVER_ERROR);
	}
}