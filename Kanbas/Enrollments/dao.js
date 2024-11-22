import Database from "../Database/index.js";
export function findEnrollmentsForUser(userId) {
  const { enrollments } = Database;
  const UserEnrollments = enrollments.filter((enrollment) => enrollment.user === userId);
  return UserEnrollments;
}

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  const newEnrollment = { _id: Date.now(), user: userId, course: courseId }
  enrollments.push(newEnrollment);
  return newEnrollment;
}

export function addEnrollment(userId, courseId) {
  const newEnrollment = { _id: Date.now(), user: userId, course: courseId  };
  Database.enrollments.push(newEnrollment);
}

export function deleteEnrollment(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter((enrollment) =>
    !(enrollment.user === userId && enrollment.course === courseId));
}
