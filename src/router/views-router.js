import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const viewsRouter = express.Router();

// 페이지별로 html, css, js 파일들 라우팅
viewsRouter.use("/", serveStatic("index"));
viewsRouter.use("/register", serveStatic("register"));
viewsRouter.use("/login", serveStatic("login"));
viewsRouter.use("/account", serveStatic("account"));
viewsRouter.use("/account/orders", serveStatic("account-orders"));
viewsRouter.use("/account/security", serveStatic("account-security"));

viewsRouter.use("/mypage", serveStatic("mypage"));

viewsRouter.use("/product", serveStatic("product"));
viewsRouter.use("/product/add", serveStatic("product-add"));
viewsRouter.use("/shopping", serveStatic("shopping"));
viewsRouter.use("/cart", serveStatic("cart"));
viewsRouter.use("/payment", serveStatic("payment"));
viewsRouter.use("/payment/complete", serveStatic("payment-complete"));

viewsRouter.use("/customer", serveStatic("customer-inquiry"));
viewsRouter.use("/nav", serveStatic("nav"));

viewsRouter.use("/admin", serveStatic("admin"));
viewsRouter.use("/admin/orders", serveStatic("admin-orders"));
viewsRouter.use("/admin/users", serveStatic("admin-users"));
viewsRouter.use("/admin/category/add", serveStatic("admin-category-add"));
viewsRouter.use("/admin/product/add", serveStatic("admin-product-add"));

viewsRouter.use("/page-not-found", serveStatic("404"));
viewsRouter.use("/utils.js", express.static(path.join(__dirname, "../../views/utils.js")));

// // views 폴더의 최상단 파일 (사진, favicon 등) 라우팅
viewsRouter.use("/", serveStatic(""));

// views폴더 내의 ${resource} 폴더 내의 모든 파일을 웹에 띄우며,
// 이 때 ${resource}.html 을 기본 파일로 설정함.
function serveStatic(resource) {
  const resourcePath = path.join(__dirname, `../views/${resource}`);
  const option = { index: `${resource}.html` };
  console.log(__dirname);
  console.log(resourcePath, option);

  return express.static(resourcePath, option);
}

export { viewsRouter };
