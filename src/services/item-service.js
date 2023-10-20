// import { itemModel, categoryModel } from "../db";

// class ItemService {
//   constructor(itemModel, categoryModel) {
//     this.itemModel = itemModel;
//     this.categoryModel = categoryModel;
//   }

//   async addItem(itemInfo) {
//     const { title, author, price } = itemInfo;

//     // 필수 필드 유효성 검사
//     if (!title || !author || !price) {
//       throw new Error("필수 입력사항을 입력해 주세요.");
//     }

//     // 중복된 제목 확인
//     const existingItem = await this.itemModel.findByTitle(title);
//     if (existingItem) {
//       throw new Error("이미 존재하는 도서 제목입니다.");
//     }

//     // 유효한 가격 범위 확인
//     if (price < 0) {
//       throw new Error("유효한 가격을 입력해 주세요.");
//     }

//     // db에 저장
//     const createdNewItem = await this.itemModel.create(itemInfo);

//     return createdNewItem;
//   }

//   async getItems() {
//     const items = await this.itemModel.findAll();

//     return items;
//   }

//   async getItemsByCategoryTitle(categoryTitle) {
//     const category = await this.categoryModel.findByTitle(categoryTitle);
//     const items = await this.itemModel.findAllByCategoryId(category.isbn);

//     return items;
//   }

//   async setItem(itemId, toUpdate) {
//     const updatedItem = await this.itemModel.update({
//       itemId,
//       update: toUpdate,
//     });

//     return updatedItem;
//   }

//   async getItemData(itemId) {
//     const item = await this.itemModel.findById(itemId);

//     // db에서 찾지 못한 경우, 에러 메시지 반환
//     if (!item) {
//       throw new Error("해당 isbn의 도서는 존재하지 않습니다. 다시 한 번 확인해 주세요.");
//     }

//     return item;
//   }

//   async deleteItemData(itemId) {
//     const { deletedCount } = await this.itemModel.deleteById(itemId);

//     // 삭제에 실패한 경우, 에러 메시지 반환
//     if (deletedCount === 0) {
//       throw new Error(`도서 삭제에 실패하였습니다.`);
//     }

//     return { result: "success" };
//   }
// }

// const itemService = new ItemService(itemModel, categoryModel);

// export { itemService };
