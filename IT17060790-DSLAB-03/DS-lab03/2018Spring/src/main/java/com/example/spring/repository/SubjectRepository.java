package com.example.spring.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.spring.model.Subject;

public interface SubjectRepository extends MongoRepository<Subject, String>{

	public Subject findBy_id(ObjectId _id);
}
