package com.artcurator.pojos;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class SecurityQuestion {
	@NotNull
	@Column(name = "security_question", length = 255)
	@Size(min = 10, max = 255)
	private String question;
	@NotNull
	@Column(name = "answer", length = 255)
	@Size(min = 10, max = 255)
	private String answer;
	@Id
	@OneToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	public SecurityQuestion() {
		super();
	}
	public SecurityQuestion(@NotNull @Size(min = 10, max = 255) String question,
			@NotNull @Size(min = 10, max = 255) String answer) {
		super();
		this.question = question;
		this.answer = answer;
	}

	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public String getAnswer() {
		return answer;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "SecurityQuestion [question=" + question + ", answer=" + answer + "]";
	}
}