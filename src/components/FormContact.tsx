import { Button, Form, Input, message } from "antd";

export function FormContact() {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
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
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Form.Item
        label="Nome"
        name="name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, type: "email" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Mensagem"
        name="message"
        rules={[{ required: true }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Enviar
      </Button>
    </Form>
  );
}
