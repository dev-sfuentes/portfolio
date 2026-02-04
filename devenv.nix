{
  config,
  pkgs,
  ...
}: {
  packages = with pkgs; [
    vite
    coreutils
    chromium # Needed for puppeteer
   tsx
  ];

  languages.javascript = {
    enable = true;
    pnpm.enable = true;
  };

  env = {
    VITE_URL = "http://localhost:5173";
  };

  scripts = {
    dev.exec = "pnpm run dev";
    build.exec = "pnpm run build";
    generate-pdf.exec = "pnpm exec tsx ${config.devenv.root}/src/lib/scripts/generate-cv-pdf.ts";
  };
}
