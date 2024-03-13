"use client";

import { useLanguage } from "../contexts/ContextHooks";

const Languages = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <aside className="languages-container">
      <div
        className={
          language === "ES" ? "languages es-active" : "languages en-active"
        }
      >
        <div
          tabIndex={0}
          role="button"
          onKeyDown={(e) => {
            if (e.key === "ES") {
              setLanguage("ES");
            }
          }}
          onClick={() => setLanguage("ES")}
          className="languages-es"
        >
          ES
        </div>
        <div
          tabIndex={0}
          role="button"
          onKeyDown={(e) => {
            if (e.key === "ES") {
              setLanguage("EN");
            }
          }}
          onClick={() => setLanguage("EN")}
          className="languages-en"
        >
          EN
        </div>
      </div>
    </aside>
  );
};

export default Languages;
