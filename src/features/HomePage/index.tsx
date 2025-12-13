"use client";

import { Flex, Typography } from "antd";

export function HomePage() {
  return (
    <Flex vertical gap={24}>
      <Typography.Title level={2}>Bem-vindo ao Bálsamo Real</Typography.Title>
      <Typography.Paragraph>
        Aqui vai entrar a vitrine principal do produto. Use esta área para um
        hero com imagem, call-to-action e uma breve descrição do que o site
        oferece.
      </Typography.Paragraph>
    </Flex>
  );
}
