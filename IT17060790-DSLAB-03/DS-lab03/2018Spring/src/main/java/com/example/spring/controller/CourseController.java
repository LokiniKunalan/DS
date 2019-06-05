package com.example.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.spring.model.Course;
import com.example.spring.services.CourseService;

@RestController
@RequestMapping("/spring/course")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class CourseController {
	
	@Autowired
	private CourseService courseService;

	@GetMapping("/fee/{_id}")
	public double getFee(@PathVariable("_id") String _id) {
		System.out.println(_id);
		return courseService.getCourse(_id);
	}
	
	
}
