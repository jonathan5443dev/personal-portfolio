import Head from "next/head";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Col, Row } from "react-styled-flexboxgrid";
import MainLayout from "../components/main-layout/main-layout";
import { Name, Description } from "../styles/home.styled";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <Row bottom="xs">
        <Col md={6} xs={12}>
          <Name>{t("home.name")}</Name>
        </Col>
      </Row>
    </MainLayout>
  );
}
