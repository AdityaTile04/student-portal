package com.project.backend.controller;

import com.project.backend.model.Student;
import com.project.backend.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/student/")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

    @Autowired
    StudentService service;

    @GetMapping("/")
    public List<Student> getAllStudents() {
        return service.findAllStudents();
    }

    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable int id) {
        return service.getStudentsById(id);
    }

    @PostMapping("/addStudent")
    public Student addStudent(@RequestBody Student student) {
        return service.addStudent(student);
    }

    @PutMapping("/updateStudent/{id}")
    public Student updateStudent(@RequestBody Student student, @PathVariable int id) {
        return service.updateStudentById(student, id);
    }

    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable int id){
        service.delete(id);
        return "Student deleted successfully";
    }
}
