import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Renders cleaned legal markdown with the site's slate type system. Tailwind
// classes are applied per element so the legal pages match the rest of the site
// without pulling in a typography plugin.
export default function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ ...props }) => (
          <h1
            className="text-4xl font-bold text-slate-900 mb-6 mt-2"
            {...props}
          />
        ),
        h2: ({ ...props }) => (
          <h2
            className="text-2xl font-semibold text-slate-900 mt-12 mb-4"
            {...props}
          />
        ),
        h3: ({ ...props }) => (
          <h3
            className="text-xl font-semibold text-slate-900 mt-8 mb-3"
            {...props}
          />
        ),
        p: ({ ...props }) => (
          <p className="text-slate-600 leading-relaxed mb-4" {...props} />
        ),
        ul: ({ ...props }) => (
          <ul
            className="list-disc pl-6 space-y-2 mb-4 text-slate-600"
            {...props}
          />
        ),
        ol: ({ ...props }) => (
          <ol
            className="list-decimal pl-6 space-y-2 mb-4 text-slate-600"
            {...props}
          />
        ),
        li: ({ ...props }) => <li className="leading-relaxed" {...props} />,
        a: ({ ...props }) => (
          <a className="text-blue-600 hover:underline" {...props} />
        ),
        strong: ({ ...props }) => (
          <strong className="font-semibold text-slate-900" {...props} />
        ),
        hr: ({ ...props }) => (
          <hr className="my-10 border-slate-200" {...props} />
        ),
        code: ({ ...props }) => (
          <code
            className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 text-sm font-mono break-all"
            {...props}
          />
        ),
        table: ({ ...props }) => (
          <div className="overflow-x-auto mb-6">
            <table
              className="w-full text-left border-collapse text-sm"
              {...props}
            />
          </div>
        ),
        thead: ({ ...props }) => (
          <thead className="bg-slate-50" {...props} />
        ),
        th: ({ ...props }) => (
          <th
            className="border border-slate-200 px-4 py-2 font-semibold text-slate-900"
            {...props}
          />
        ),
        td: ({ ...props }) => (
          <td
            className="border border-slate-200 px-4 py-2 text-slate-600 align-top"
            {...props}
          />
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
