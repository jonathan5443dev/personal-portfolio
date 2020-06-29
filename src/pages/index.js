import Head from "next/head";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <main>
        <motion.div animate={{ x: 100 }}>
          <h1>{t("home.title")}</h1>
        </motion.div>
      </main>

      <footer>
        <p>{t("home.footer.madeIn")} </p>
      </footer>
    </div>
  );
}
