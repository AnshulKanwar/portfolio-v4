import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneLight,
  atomOneDarkReasonable,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";

const Code = ({ children: { props } }) => {
  const [mounted, setMounted] = useState(false);

  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const language = props.className.replace(/language-/, "");

  return (
    <div>
      <ReactSyntaxHighlighter
        language={language}
        style={theme === "dark" ? atomOneDarkReasonable : atomOneLight}
        customStyle={theme === "dark" && { borderWidth: "0.5px", borderColor: "#4E5263" }}
      >
        {props.children}
      </ReactSyntaxHighlighter>
    </div>
  );
};

export default Code;
