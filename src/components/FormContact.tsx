"use client";

import { Button, Form, Input, message } from "antd";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export function FormContact() {
  const [form] = Form.useForm();

  const onFinish = async (values: ContactFormValues) => {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: "Contato pela Landing Page",
          ...values,
        }),
      });

      const data = await res.json();
      if (!data.success) throw new Error();

      message.success("Mensagem enviada com sucesso!");
      form.resetFields();
    } catch {
      message.error("Erro ao enviar. Tente novamente.");
    }
  };

  return (
    <section className="bg-[#f4f1ea] py-16 px-6 md:px-10">
      <div className="mx-auto w-full max-w-2xl rounded-2xl border border-[#e6dccb] bg-white/80 p-6 md:p-10 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.4)]">
        <div className="mb-8 space-y-2">
          <h3 className="text-2xl md:text-3xl font-serif text-[#2c2c2c]">
            Fale com a gente
          </h3>
          <p className="text-sm md:text-base text-[#4a4a4a] leading-relaxed">
            Tire dúvidas, peça recomendações ou faça seu pedido. Respondemos o
            quanto antes.
          </p>
        </div>

        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          className="space-y-4"
        >
          <Form.Item
            label={<span className="text-[#2c2c2c]">Nome</span>}
            name="name"
            rules={[{ required: true }]}
          >
            <Input size="large" className="rounded-lg" />
          </Form.Item>

          <Form.Item
            label={<span className="text-[#2c2c2c]">Email</span>}
            name="email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input size="large" className="rounded-lg" />
          </Form.Item>

          <Form.Item
            label={<span className="text-[#2c2c2c]">Mensagem</span>}
            name="message"
            rules={[{ required: true }]}
          >
            <Input.TextArea rows={5} className="rounded-lg" />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            size="large"
            color="danger"
            style={{backgroundColor: "#8B7355"}}
            className="w-full rounded-lg bg-[#8B7355] hover:!bg-[#7a644c]"
          >
            Enviar mensagem
          </Button>
        </Form>
      </div>
    </section>
  );
}
