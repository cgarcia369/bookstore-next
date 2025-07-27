import { Book } from "@/modules/book";

export default async function BookPage({ params }: { params: Promise<{ book_name: string; book_slug: string }> }) {
  return <Book {...await params} />;
}
