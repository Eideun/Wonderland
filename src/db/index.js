import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 5000; //process.env.PORT || 3000;

// 서버 구성 및 미들웨어 등록
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB 연결 설정
const DB_URL =
  process.env.MONGODB_URL ||
  "MongoDB 서버 주소가 설정되지 않았습니다.\n./db/index.js 파일을 확인해 주세요. \n.env 파일도 필요합니다.\n";

mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("정상적으로 MongoDB에 연결되었습니다.");
    // 서버 시작
    app.listen(port, () => {
      console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
    });
  })
  .catch((error) => {
    console.error("MongoDB 연결에 실패하였습니다:", error);
  });

// 라우트 설정
app.get("/", (req, res) => {
  res.send("안녕하세요! 서버가 실행 중입니다.");
});

// 모델들을 가져오기 위한 import 문
export * from "./models/item-model";
export * from "./models/category-model";
export * from "./models/user-model";
