import { works } from "@/data/site";

export function WorkList() {
  return (
    <section>
      <h2>작업물</h2>
      <ul className="my-2 list-disc pl-8">
        {works.map((work) => (
          <li key={work.href}>
            <a href={work.href}>
              {work.code ? <code>{work.title}</code> : work.title}
            </a>
            {`: ${work.description}`}
          </li>
        ))}
      </ul>
    </section>
  );
}
