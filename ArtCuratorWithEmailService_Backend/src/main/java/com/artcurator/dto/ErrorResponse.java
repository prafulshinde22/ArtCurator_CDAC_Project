package com.artcurator.dto;

import java.time.LocalDateTime;

public class ErrorResponse {
	private String mesg,detailedErrMesg;
	private LocalDateTime timeStamp;
	
	public ErrorResponse(String mesg, String detailedErrMesg) {
		super();
		this.mesg = mesg;
		this.detailedErrMesg = detailedErrMesg;
		timeStamp=LocalDateTime.now();
	}
	
	public String getMesg() {
		return mesg;
	}

	public void setMesg(String mesg) {
		this.mesg = mesg;
	}

	public String getDetailedErrMesg() {
		return detailedErrMesg;
	}

	public void setDetailedErrMesg(String detailedErrMesg) {
		this.detailedErrMesg = detailedErrMesg;
	}

	public LocalDateTime getTimeStamp() {
		return timeStamp;
	}

	public void setTimeStamp(LocalDateTime timeStamp) {
		this.timeStamp = timeStamp;
	}


}
