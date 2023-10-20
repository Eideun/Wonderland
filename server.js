import express from "express";
import cors from "cors";
import { userRouter } from "./src/router/user-router.js";
import nunjucks from "nunjucks";
import { viewsRouter } from "./src/router/views-router.js";

const server = express();

// view engine 설정 (nunjucks)
server.set("view engine", "html");
nunjucks.configure("./views", {
  express: server,
});

// server.get("/express", (req, res) => {
//   res.render("./account-orders/account-orders.html");
// });
// server.get("/register", (req, res) => {
//   res.render("./register/register.html");
// });
// console.log(`server.use(viewsRouter) : ${server.use(viewsRouter)}`);
// 정적 파일 제공을 위한 미들웨어 설정
// server.use(express.static("public"));

// CORS 에러 방지
server.use(cors());
// Content-Type: application/x-www-form-urlencoded 형태의 데이터를 인식하고 핸들링할 수 있게 함.
server.use(express.urlencoded({ extended: false }));
// Content-Type: application/json 형태의 데이터를 인식하고 핸들링할 수 있게 함.
server.use(express.json());

// Router 요청시 /api를 사용 요청
server.use(viewsRouter);
server.use("/api", userRouter);

export { server };
