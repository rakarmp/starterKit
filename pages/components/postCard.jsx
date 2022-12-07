import Link from "next/link";

function PostCard({ title, date, description, slug }) {
  return (
    <div className="my-4 py-4 border-b">
      <h2 className="font-bold text-2xl my-4">{title}</h2>
      <time className="text-gray-400">{date}</time>
      <p className="mt-4 italic">{description}</p>

      <Link href="/[slug]" as={`/${slug}`}>
        Read More
      </Link>
    </div>
  );
}

export default PostCard;
