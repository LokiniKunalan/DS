package com.example.spring.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.spring.model.Course;

public interface CourseRepository extends MongoRepository<Course, String>{
	
	Course findBy_id(String _id);

}
