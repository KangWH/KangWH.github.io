import { site } from "@/data/site";

export function Header() {
  return (
    <header className="m-0 flex flex-row items-baseline justify-between bg-[#f4f4f4] px-4 pt-4 pb-2 leading-none">
      <div>
        <h1 className="m-0 text-[1.75rem]">
          {site.nameKo}
          <span className="ml-4 text-base font-normal whitespace-nowrap opacity-65">
            {site.nameEn}
          </span>
        </h1>
      </div>
      <div>
        <menu className="m-0 flex list-none flex-row gap-4 p-0 pr-2 font-light whitespace-nowrap text-[#1e1e1e]">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-inherit no-underline hover:text-[#606060]"
            >
              {item.label}
            </a>
          ))}
        </menu>
      </div>
    </header>
  );
}
