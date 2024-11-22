import * as enrollmentsDao from "./dao.js";
export default function EnrollmentsRoutes(app) {

  app.post("/:userId/:courseId/enroll", (req, res) => {
    const {userId, courseId} = req.params;
    const newEnrollment = enrollmentsDao.addEnrollment(userId, courseId);
    res.send(newEnrollment);
  });

  app.delete("/:userId/:courseId/unenroll", (req, res) => {
    const {userId, courseId} = req.params;
    enrollmentsDao.deleteEnrollment(userId, courseId);
    res.sendStatus(204);
  })
}