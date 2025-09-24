package com.project.backend.services;

import com.project.backend.model.Student;
import com.project.backend.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    StudentRepo repo;

    public List<Student> findAllStudents() {
        return repo.findAll();
    }

    public Student addStudent(Student student) {
        return repo.save( student );
    }

    public Student getStudentsById(int id) {
        return repo.findById( id ).orElse( new Student() );
    }

    public Student updateStudentById(Student student, int id) {
        return repo.findById( id )
                .map( std -> {
                    std.setName(student.getName());
                    std.setMarks( student.getMarks());
                    return repo.save( std );
                } ).orElseThrow(() -> new RuntimeException("User not found with this id: " + id));
    }

    public void delete(int id) {
        repo.deleteById( id );
    }
}
