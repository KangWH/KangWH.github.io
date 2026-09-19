import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700 dark:bg-zinc-800 dark:text-zinc-200">
      <div className="mx-auto mt-4 mb-8 flex max-w-240 flex-col gap-y-2 px-4">
        <div className="flex flex-row gap-x-4">
          <strong>{site.nameKo}</strong>
          {site.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <p>Copyright 2026 {site.nameKo}. All rights reserved.</p>
      </div>
    </footer>
  );
}
