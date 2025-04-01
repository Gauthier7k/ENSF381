from flask import Flask, request, jsonify
import json
import random

app = Flask(__name__)

try:
    with open('courses.json', 'r') as f:
        courses_data = json.load(f)
except Exception as e:
    courses_data = []
    print("Error loading courses.json:", e)

try:
    with open('testimonials.json', 'r') as f:
        testimonials_data = json.load(f)
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
    course_to_drop = data.get('course')

    if not course_to_drop:
        return jsonify({'message': 'No course information provIded'})


#Get All Courses
@app.route('/courses', methods=['GET'])
def get_courses():
    pass

#Get Student Courses
@app.route('/student_courses/<int:student_Id>', methods=['GET'])
def get_student_courses(student_Id):
    pass

if __name__ == '__main__':
    app.run(debug=True)