import { AbstractIntlMessages, useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import Image from "next/image";

interface CustomIntlMessages extends AbstractIntlMessages {
  TabTitles?: {
    home?: string;
  };
  [key: string]: any;
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages: CustomIntlMessages = await getMessages({ locale });
  const title = messages.TabTitles?.home;
  return {
    title,
  };
};

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main className="flex flex-col gap-8 items-center">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />

      <p className="text-center font-bold uppercase">{t("description")}</p>

      <ol className="list-inside list-decimal text-sm text-center sm:text-left">
        <li className="mb-2">
          {t("listOne")}
        </li>
        <li>
          {t("listTwo")}
        </li>
      </ol>

    </main>
  );
}
