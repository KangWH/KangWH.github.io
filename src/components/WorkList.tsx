import { works } from "@/data/site";

export function WorkList() {
  return (
    <section>
      <h2>작업물</h2>
      <ul>
        {works.map((work) => (
          <li key={work.href}>
            <a href={work.href} className="text-[#0080ff] no-underline">
              {work.code ? <code>{work.title}</code> : work.title}
            </a>
            {`: ${work.description}`}
          </li>
        ))}
      </ul>
    </section>
  );
}
