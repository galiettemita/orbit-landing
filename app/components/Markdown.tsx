import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
/** Retain the existing Markdown renderer, with semantic Orbit styles. Raw HTML stays disabled. */
export default function Markdown({ children }: { children: string }) {
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>;
}
