package com.sutek.studentsystem.service;

import java.util.List;
import com.sutek.studentsystem.model.Student;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
