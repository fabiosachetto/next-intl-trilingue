"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [locale, setLocale] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const cookieLocale = document.cookie.split(";").find((row) => row.startsWith("MYNEXTAPP_LOCALE="))?.split("=")[1];
    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      setLocale(browserLocale);
      document.cookie = `MYNEXTAPP_LOCALE=${browserLocale};`;
      router.refresh();
    }
  }, [router]);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    document.cookie = `MYNEXTAPP_LOCALE=${newLocale};`;
    router.refresh();
  }

  return (
    <nav className="py-3 flex justify-between items-center border-b">
      <h1 className="text-lg font-bold">
        LOGO
      </h1>
      <div className="flex items-center gap-3">
        <button onClick={() => changeLocale("pt")}
          className={`border p-2 rounded-md text-sm hover:bg-slate-500 hover:text-white 
          ${locale === "pt" ? "bg-black text-white" : "bg-white text-black"}`}>
          PT
        </button>
        <button
          onClick={() => changeLocale("en")}
          className={`border p-2 rounded-md text-sm hover:bg-slate-500 hover:text-white 
          ${locale === "en" ? "bg-black text-white" : "bg-white text-black"}`}>
          EN
        </button>
        <button
          onClick={() => changeLocale("es")}
          className={`border p-2 rounded-md text-sm hover:bg-slate-500 hover:text-white 
          ${locale === "es" ? "bg-black text-white" : "bg-white text-black"}`}>
          ES
        </button>
      </div>
    </nav>
  );
};

export default Navbar;