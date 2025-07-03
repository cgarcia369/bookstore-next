import { Books, Categories, Coupon, HeadLine, MustRead } from "@/components/main";

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
