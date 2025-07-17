import { Books, Categories, Coupon, HeadLine, MustRead } from "@/modules/main";

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
