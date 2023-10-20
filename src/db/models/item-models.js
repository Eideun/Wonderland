// import { model } from "mongoose";
// import { ItemSchema } from "../schemas/item-schema";

// const Item = model("items", ItemSchema);

// export class ItemModel {
//   async findByTitle(title) {
//     const item = await Item.findOne({ title });
//     return item;
//   }

//   async findById(itemId) {
//     const item = await Item.findOne({ _id: itemId });
//     return item;
//   }

//   async findOneByCategoryId(categoryId) {
//     const item = await Item.findOne({ categoryId });
//     return item;
//   }

//   async findAllByCategoryId(categoryId) {
//     const items = await Item.find({ categoryId });
//     return items;
//   }

//   async create(itemInfo) {
//     const createdNewItem = await Item.create(itemInfo);
//     return createdNewItem;
//   }

//   async findAll() {
//     const items = await Item.find({});
//     return items;
//   }

//   async decreaseStock(itemId, quantity) {
//     const item = await this.findById(itemId);
//     if (!item) {
//       throw new Error("해당 도서를 찾을 수 없습니다.");
//     }

//     if (item.quantity < quantity) {
//       throw new Error("재고가 부족합니다.");
//     }

//     item.quantity -= quantity;
//     await item.save();

//     return item;
//   }

//   async increaseStock(itemId, quantity) {
//     const item = await this.findById(itemId);
//     if (!item) {
//       throw new Error("해당 도서를 찾을 수 없습니다.");
//     }

//     item.quantity += quantity;
//     await item.save();

//     return item;
//   }

//   async checkStock(itemId) {
//     const item = await this.findById(itemId);
//     if (!item) {
//       throw new Error("해당 도서를 찾을 수 없습니다.");
//     }

//     return item.quantity;
//   }

//   async update({ itemId, update }) {
//     const filter = { _id: itemId };
//     const option = { returnOriginal: false };

//     const updatedItem = await Item.findOneAndUpdate(filter, update, option);
//     return updatedItem;
//   }

//   async deleteById(itemId) {
//     const result = await Item.deleteOne({ _id: itemId });
//     return result;
//   }
// }

// const itemModel = new ItemModel();

// export { itemModel };
