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

    ## REMEMBER: The importance of this is that, after generating the pdfs and the result is the appropriate, do 'pnpm run build'
    generate-pdf.exec = "pnpm exec tsx ${config.devenv.root}/src/lib/scripts/generate-cv-pdf.ts";
  };
}
