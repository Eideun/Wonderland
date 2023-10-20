import mongoose from "mongoose";
import dotenv from "dotenv";

// .env에서 환경변수 불러오기
dotenv.config();

export const connectDB = () => {
  // DB 연결하기
  mongoose.connect(process.env.MONGO_URI);
  const db = mongoose.connection;

  // DB 연결 확인
  db.on("connected", () => console.log("connecting DB Success"));

  // DB 연결 에러 발생
  db.on("error", (error) => {
    console.log("DB Connecting Error", error);
    // DB 연결을 종료함
    process.exit(1);
  });
};
