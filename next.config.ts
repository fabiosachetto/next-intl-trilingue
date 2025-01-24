import createNextIntlPlugin from "next-intl/plugin";

const whitNextIntl = createNextIntlPlugin();

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default whitNextIntl(nextConfig);
