import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Ilustração do fundo */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>

        {/* Conteúdo do footer */}
        <div className="flex flex-col items-center justify-between gap-6 py-8 text-center md:flex-row md:text-left md:py-12">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Logo />
            <p className="mt-2 text-sm text-indigo-200/65">
              © stelestial.app
            </p>
          </div>

          {/* Social links */}
          <ul className="flex gap-3">
            <li>
              <a
                className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                href="https://github.com/stelestial"
                target="_blank"
                aria-label="Github"
              >
                <svg
                  className="h-8 w-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </a>
            </li>
                        <li>
              <a
                className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                href="https://lucaspanzera.com"
                target="_blank"
                aria-label="eu"
              >
              <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <title>attract</title>
                    <path d="M18 24v-4h-8v-8h8v-4h-12v16h12zM26 12h-4v-4h4v4zM26 24h-4v-4h4v4z"></path>
                </svg>
                
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center rounded px-3 py-1 text-sm font-medium text-indigo-200/90 bg-indigo-700/10 hover:bg-indigo-700/20"
                href="/health"
                aria-label="Status dos sistemas"
              >
                Status
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
