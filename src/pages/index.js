import Head from "next/head";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Col, Row } from "react-styled-flexboxgrid";
import MainLayout from "../components/main-layout/main-layout";
import { Name, Description, BackgroundImage } from "../styles/home.styled";

export default function Home() {
  const { t } = useTranslation();
  return (
    <MainLayout background="/assets/images/home.jpg">
      <Row bottom="xs">
        <Col md={8} xs={12}>
          <Name>{t("home.name")}</Name>
          <Description>{t("home.description")}</Description>
        </Col>
      </Row>
    </MainLayout>
  );
}
