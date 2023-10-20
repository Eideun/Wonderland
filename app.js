import { server } from "./server.js";
import { connectDB } from "./db.js";
import dotenv from "dotenv";

// .env에서 환경변수 불러오기
dotenv.config();

// 포트 번호 설정`
const port = process.env.PORT;

// DB 실행
connectDB();

// 서버 실행
server.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});
