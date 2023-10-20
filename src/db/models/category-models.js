// import { model } from "mongoose";
// import { categorySchema } from "../db/schemas/category-schema";

// const Category = model("categories", categorySchema);

// export class CategoryModel {
// async create(categoryInfo) {
// const createdNewCategory = await Category.create(categoryInfo);
// return createdNewCategory;
// }

// async findByTitle(title) {
// const category = await Category.findOne({ title });
// return category;
// }

// async findAll() {
// const categories = await Category.find({});
// return categories;
// }

// async update({ categoryId, update }) {
// const filter = { _id: categoryId };
// const option = { returnOriginal: false };

// const updatedCategory = await Category.findOneAndUpdate(filter, update, option);
// return updatedCategory;
// }

// async deleteById(categoryId) {
// const result = await Category.deleteOne({ _id: categoryId });
// return result;
// }
// }

// export { CategoryModel };
