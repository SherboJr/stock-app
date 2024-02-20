// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://support.google.com/firebase/answer/7015592
// const firebaseConfig = {
//     "type": "service_account",
//     "project_id": "epic-stock-app",
//     "private_key_id": "0d5b4eb639515af7adce11972a4d7c1e762f6bd8",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCffTuhV8y9qpC5\n6tNGUgSQ2vC1OC+cQSX2HOVK/OATDUDTkjF4xydDLZmMHmU61UcskFmHAZZ1MZFE\nz1FG92lbhHOUctVDF0s4pU6JQT1XCJt33LO6Yg+/9emvyabec51G3WjWN7w6S9jl\nw+mP0QAKPqhwxbgqpg/LcTYZspHipTOp0T5mMn9P4FqY+ZQzbYNUvbnoQUFGsgWN\nHQNgiwrHx6jFuGs0Nj+Fqkgzh0MuEDGbJ+aXtKFCGnMpvdIWUDuU5BIxpxIaldun\nGu8uKQ6PfaPRqDXHdsymqXPlIvT8QJlFjvtcKJBjZKZC6pIOhjvu5/wT/8N7dw/d\nsox+qFy5AgMBAAECggEAAfc7xhicWlsMThTp7bpO8q/D6Dfmeo+7eTmQie4wrkAj\nzZXkLFOCa+fmkJeOX9t/sYyvVVU+gBaUFAcoPrYH1iv9Z0qHwEO1PDpxIk6J5hFt\nU3rCynVPMZAnFEPTEneKziFEfYb3gzBufKhhgrOSaQZizKEI412uuza5xSfI4TzU\nc86LJeD8ZwootDt7wv7DHfdl5LZ2da4J65AV2sSwEqjWrPdV5B9aJ85czAL/vqfy\ngs8lT/FWzFUEvrn80A+vxCoNePa2fIGEUnXvYCC0R6QIogdvr6iLNnONPPIS5C3X\n2qgmFYNHaWGUniSrVmWqiDgNnZwu30hefY7hXCVjUQKBgQDVJYRosIuBmCdu3DHZ\nLbxwbnaPCeKYmJQgWQShIGOmawoIoH6Ke15xkDkOA0oFNRw3oxjBzLYlGiva3iEh\nPgS8cPy9Ub5Zn8vnR+PE40bL4X/+P5d94uQ5qjI3T2gXxDnr8hO+y1TocFRIJPQP\n2he8kArAhaD1amid8trJbNeg7wKBgQC/jgOjw0GZHTiXiQsk307w42SXtMu4JUV4\nRUgufT3VBW2ix6yOa0TGi3Z61Y1COG93ylgvJhlbQ0houcgDV22hRCNdKliZ7f/B\nco8/VrcarNjyK/ThykA7wlHTgb1NVG2l7y7wpgUtEnEffa0cCoDYezOsv7AVOhY8\nI045bEsM1wKBgQCNv6WO+dnNFaMj1sxP4lqvasbt2WUYll/sI0cw4Jlk00qY8iM1\ndVYZsBBBgW54iBl75rtQJxP7GKyRoafms5fyujFatkIg2GSCKw0Ooxcx/4VfUGsv\nDPU6ZDWBEw3mwFjE0PjQqeiNrCZg1DJ7WE7w19pOro+cpmdso1VdH0VHgQKBgQCS\nkzStxucXJoj7S14/pLBfG2EJxMpt6fcyhLErAaKisjimamvbvrEty+GpNGeW2GBT\nJX489cZJUz7BBAfMpsW4tM7qp1CM2NTvTZ3XNZ9+xexrwr7rVzu3foXmdkxIM+aD\nJnagpiknyAjPs/cWkeLtw7hS44r1czE4azucLQVwmQKBgBeZ6SC3OXW9Mfwnwubq\noU/mw3Z/wUu/HhFvDo+FR1btExQfIw5B7AmCggI0BCzFOCRiQLIRTfXSnI2RuMV2\nUR+uAPeoqrLbIAN86/1fSqi6NlzLw2lErSY7ujXkoOFN2SqfrgJtHhEqcKBFBn1f\ngy2Aal15lrcjCMvfA4e0UrEW\n-----END PRIVATE KEY-----\n",
//     "client_email": "firebase-adminsdk-9ttet@epic-stock-app.iam.gserviceaccount.com",
//     "client_id": "111669010687099607081",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-9ttet%40epic-stock-app.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
//   };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);
const {
  initializeApp,
  applicationDefault,
  cert
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter
} = require("firebase-admin/firestore");
const serviceAccount = require("./path/to/serviceAccountKey.json");

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
