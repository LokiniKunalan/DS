package com.example.spring.model;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="courses")
public class Course {
	
	@Id
	private String _id;
	private String name;
	private String code;
	private String pass;
	private String lecture;
	private List<ObjectId> subjects;
	
	
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getPass() {
		return pass;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}
	public String getLecture() {
		return lecture;
	}
	public void setLecture(String lecture) {
		this.lecture = lecture;
	}
	public List<ObjectId> getSubjects() {
		return subjects;
	}
	public void setSubjects(List<ObjectId> subjects) {
		this.subjects = subjects;
	}
	
	
	
	
	
	
	
	
	

}
