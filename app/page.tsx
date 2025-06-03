import HeadLine from "@/modules/main/components/headline/HeadLine";
import Categories from "@/modules/main/components/categories/Categories";
import Books from "@/modules/main/components/books/Books";
import MustRead from "@/modules/main/components/must-read/MustRead";
import Coupon from "@/modules/main/components/coupon/Coupon";

export default function Home() {
  return (
    <>
      <HeadLine />
      <Categories />
      <Books />
      <MustRead />
      <Coupon />
    </>
  );
}
