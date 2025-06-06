# Group members:
# Nicholas Lui (30207036)
# Gauthier Appaix (30112909)

from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import random

app = Flask(__name__)
CORS(app)

try:
    with open(r'Assignment 5\Backend\courses.json', 'r') as f:
        data = json.load(f)
        courses_data = data.get("courses", [])
except Exception as e:
    courses_data = []
    print("Error loading courses.json:", e)

try:
    with open(r'Assignment 5\Backend\testimonials.json', 'r') as f:
        data = json.load(f)
        testimonials_data = data.get("testimonials", [])
except Exception as e:
    testimonials_data = []
    print("Error loading testimonials.json:", e)


#Student Registration API
students = []
Id = 1

@app.route('/register', methods=['POST'])
def register():
    global Id
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')

    for student in students:
        if student['username'] == username:
            return jsonify({'message': 'Username is already taken'})

    new_student = {
        'Id': Id,
        'username': username,
        'password': password,
        'email': email,
        'enrolled_courses': []
    }
    students.append(new_student)
    Id += 1

    return jsonify({'message': 'Registration successful'})


#Login API
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    for student in students:
        if student['username'] == username and student['password'] == password:
            return jsonify({'message': 'Login successful'})

    return jsonify({'message': 'InvalId username or password'})


#Testimonial API
@app.route('/testimonials', methods=['GET'])
def get_testimonials():
    if len(testimonials_data) < 2:
        print("no data")
        return jsonify(testimonials_data)
    else:
        selected = random.sample(testimonials_data, 2)
        return jsonify(selected)

#Enroll Courses API
@app.route('/enroll/<int:student_Id>', methods=['POST'])
def enroll_course(student_Id):
    data = request.get_json()
    course_to_enroll = data.get('course') 

    if not course_to_enroll:
        return jsonify({'message': 'No course information provIded'})
    
#Delete Courses API
@app.route('/drop/<int:student_Id>', methods=['DELETE'])
def drop_course(student_Id):
    data = request.get_json()
    course = data.get('course')

    if not course:
        return jsonify({'message': 'No course information provided'}), 400

    student = next((s for s in students if s['Id'] == student_Id), None)
    if not student:
        return jsonify({'message': 'Student not found'}), 404

    if course not in student['enrolled_courses']:
        return jsonify({'message': f'Course {course} is not enrolled'}), 400

    student['enrolled_courses'].remove(course)
    return jsonify({'message': f'Dropped course {course} successfully'})

#Get Courses API
@app.route('/courses', methods=['GET'])
def get_courses():
    return jsonify(courses_data)

#Get Student Courses API
@app.route('/student_courses/<int:student_Id>', methods=['GET'])
def get_student_courses(student_Id):
    student = next((s for s in students if s['Id'] == student_Id), None)
    if not student:
        return jsonify([])
    return jsonify(student['enrolled_courses'])

if __name__ == '__main__':
    app.run(debug=True)