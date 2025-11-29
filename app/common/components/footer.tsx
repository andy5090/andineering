import { Linkedin } from "lucide-react";
import { Link } from "react-router";
import threadsIcon from "~/../public/assets/threads-logo-white.svg";

const Footer = () => {
  const footerLinks = {
    제품: [
      { label: "기능", href: "/agentic-ai" },
      { label: "솔루션", href: "/agentic-ai" },
      { label: "가격", href: "/#pricing" },
      { label: "API 문서", href: "/#api-docs" },
    ],
    회사: [
      { label: "소개", href: "/#about" },
      { label: "블로그", href: "/#blog" },
      { label: "채용", href: "/#careers" },
      { label: "문의하기", href: "/#contact" },
    ],
    리소스: [
      { label: "문서", href: "/#docs" },
      { label: "가이드", href: "/#guides" },
      { label: "지원", href: "/#support" },
      { label: "상태", href: "/#status" },
    ],
  };

  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 space-y-4 text-left">
            <Link to="/">
              <h3 className="text-xl font-display font-bold bg-gradient-primary bg-clip-text ">
                Andineering
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground">
              Agentic AI 솔루션으로
              <br />
              DX를 넘어 AX를 탁월하게!
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://threads.net/@andineering"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-card/80 border border-border hover:border-primary/50 transition-colors"
                aria-label="Threads">
                <img src={threadsIcon} className="w-4 h-4" alt="Threads" />
              </a>
              <a
                href="https://www.linkedin.com/in/andydklee/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-card/80 border border-border hover:border-primary/50 transition-colors"
                aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-sm font-semibold">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Andineering. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link
              to="/privacy"
              className="hover:text-foreground transition-colors">
              개인정보처리방침
            </Link>
            <Link
              to="/terms"
              className="hover:text-foreground transition-colors">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
