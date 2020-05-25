import Config from "../config";
export default {

    async baseApi(sub_url, method, json_data, cb) {
        let user = localStorage.currentUser?JSON.parse(localStorage.currentUser):null
        console.log('user on baseApi====',user)
        console.log('json data on baseApi==',json_data)
        try {
          let request = {
            method,
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
              "Authorization": user
                ? "Bearer " + user['token']
                : null,
            }
          };
          if (method === "POST" || method === "PUT") {
            request["body"] = JSON.stringify(json_data);
          }
          console.log('request on baseAPI==== ',request)

          let response = await fetch(Config.SERVICE_API_URL + sub_url, request);
          let responseJson = await response.json();
          if (response.status === 200 || response.status === 201) {
            cb(null, responseJson);
          } else {
            cb(responseJson);
          }
        } catch (error) {
          cb(error);
        }
    },

    // Auth
    login(email, password, cb) {
        this.baseApi('api/login', 'POST', { email, password }, (err, res) => {
          if (err == null) {
            console.log('login------------------', res)
            localStorage.currentUser = JSON.stringify(res)
            localStorage.email=email
            localStorage.password=password;
          }
          cb(err, res)
        })
    },
    signup(data, cb) {
      console.log('signup data on signup',data)
      this.baseApi('api/signup', 'POST', data, (err, res) => {
        cb(err, res)
      })
    },

    // Users
    updateUser(data, cb) {
      this.baseApi('api/updateUser', 'POST', data, (err, res) => {
        cb(err, res)
      })
    },

    // Teachers
    getTeachers(data, cb) {
      console.log('get teachers')
      this.baseApi('api/getTeachers', 'POST', data, (err, res) => {
        cb(err, res)
      })
    },
    deleteTeacherByUserid(data, cb) {
      this.baseApi('api/deleteTeacherByUserid', 'POST', data, (err, res) => {
        cb(err, res)
      })
    },
    updateTeacher(data, cb) {
      this.baseApi('api/updateTeacher', 'POST', data, (err, res) => {
        cb(err, res)
      })
    },

    // Students
    getStudents(data, cb) {
      console.log('get Students')
      this.baseApi('api/getStudents', 'POST', data, (err, res) => {
        cb(err, res)
      })
    },
    deleteStudentByUserid(data, cb) {
      this.baseApi('api/deleteStudentByUserid', 'POST', data, (err, res) => {
        cb(err, res)
      })
    },

    // Classes
    getClasses(data, cb) {
      this.baseApi('api/getClasses', 'POST', data, (err, res) => {
        cb(err, res)
      })
    },
    deleteClass(data, cb) {
      this.baseApi('api/deleteClass', 'POST', data, (err, res) => {
        cb(err, res)
      })
    },
    createClass(data, cb) {
      this.baseApi('api/createClass', 'POST', data, (err, res) => {
        cb(err, res)
      })
    },
    updateClass(data, cb) {
      this.baseApi('api/updateClass', 'POST', data, (err, res) => {
        cb(err, res)
      })
    },

    // school
    searchHeadmaster(data, cb) {
      this.baseApi('api/searchHeadmaster', 'POST', data, (err, res) => {
        cb(err, res)
      })
    },
    updateHeadmaster(data, cb) {
      this.baseApi('api/updateHeadmaster', 'POST', data, (err, res) => {
        cb(err, res)
      })
    },

    // custom 
    photoUpload(data, cb) {
      this.baseApi('api/photoUpload', 'POST', data, (err, res) => {
        cb(err, res)
      })
    },

    // notifications
    getNotifications(data, cb) {
      this.baseApi('api/getNotifications', 'POST', data, (err, res) => {
        cb(err, res)
      })
    },
    createNotification(data, cb) {
      this.baseApi('api/createNotification', 'POST', data, (err, res) => {
        cb(err, res)
      })
    },
    updateNotification(data, cb) {
      this.baseApi('api/updateNotification', 'POST', data, (err, res) => {
        cb(err, res)
      })
    },
    deleteNotification(data, cb) {
      this.baseApi('api/deleteNotification', 'POST', data, (err, res) => {
        cb(err, res)
      })
    },
}
