import axios from "axios";

const API_BASE = "http://localhost:8080/api/student";

export const getAllStudents = () => axios.get(`${API_BASE}/`);
export const getStudentById = (id) => axios.get(`${API_BASE}/${id}`);
export const addStudent = (student) => axios.post(`${API_BASE}/addStudent`, student);
export const updateStudent = (id, student) =>
    axios.put(`${API_BASE}/updateStudent/${id}`, student);
export const deleteStudent = (id) => axios.delete(`${API_BASE}/${id}`);
