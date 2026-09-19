import { site } from "@/data/site";

export default function Header() {
  return (
    <header className="bg-gray-50 dark:bg-zinc-900">
      <div className="mx-auto flex max-w-240 flex-row items-baseline justify-between">
        <div className="flex flex-row items-baseline gap-x-4 px-4 py-4">
          <h1>{site.nameKo}</h1>
          <span className="text-gray-500 dark:text-zinc-400">{site.nameEn}</span>
          {site.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
