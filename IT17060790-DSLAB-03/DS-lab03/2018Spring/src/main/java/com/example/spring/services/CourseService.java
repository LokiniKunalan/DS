package com.example.spring.services;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.spring.model.Course;
import com.example.spring.model.Subject;
import com.example.spring.repository.CourseRepository;
import com.example.spring.repository.SubjectRepository;

@Service
public class CourseService {

	
	@Autowired
	private CourseRepository courseRepository;
	@Autowired
	private SubjectRepository subjectRepository;
	
	public double getCourse(String _id) {
		
		Course course=courseRepository.findBy_id(_id);
		
		return calculateFee(course);
		
		
		//return course;
	}
	
	
	
	public double calculateFee(Course course) {
		
		
		List<ObjectId> subjectList = course.getSubjects();
		
		
		double totalFee=0;
		
		for (ObjectId subjectId : subjectList) {
			
			Subject subject=subjectRepository.findBy_id(subjectId);
			
			totalFee += subject.getAmount();
			
			
		}
		
		return totalFee;
		
	}
	

}
