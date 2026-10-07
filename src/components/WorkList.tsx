import { works } from "@/data/site";

export function WorkList() {
  return (
    <section>
      <h2>작업물</h2>
      <ul className="-my-2 list-disc pl-8 space-y-4">
        {works.map((work) => (
          <li key={work.href}>
            <p>
              <a href={work.href}>
                {work.code ? <code>{work.title}</code> : work.title}
              </a>
              {`: ${work.description}`}
            </p>
            {work.stack != undefined && work.stack.length > 0 && (
              <div className="mt-1 flex flex-row gap-x-2">
                {work.stack.map((stack, index) => (
                  <div key={index} className="bg-gray-100 dark:bg-zinc-800 rounded-full leading-none px-2 py-1">{stack}</div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
