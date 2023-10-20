import { Schema, model } from "mongoose";

const ItemSchema = new Schema({
  isbn: {
    // 도서 바코드 (ISBN)
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    // 도서 제목
    type: String,
    required: true,
  },
  author: {
    // 도서 저자
    type: String,
    required: true,
  },
  description: {
    // 도서 설명
    type: String,
    required: true,
  },
  price: {
    // 도서 가격
    type: Number,
    required: true,
  },
  category: {
    // 도서 카테고리
    type: String,
    required: true,
  },
  quantity: {
    // 도서 수량
    type: Number,
    required: true,
    default: 0,
  },
  imageUrl: {
    // 이미지 URL
    type: String,
    required: true,
  },
  createdAt: {
    // 등록일
    type: Date,
    default: Date.now,
  },
});

export { ItemSchema };
