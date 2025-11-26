import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Flex,
  Form,
  Grid,
  Input,
  Typography,
  Upload,
  message,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { InboxOutlined } from "@ant-design/icons";
import AppLayout from "@layouts";
import Services from "@services";
import Constants from "@constants/index";

const { useBreakpoint } = Grid;
const { Dragger } = Upload;

function Signup() {
  const { token } = useSelector((state) => state.auth || {});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const normFile = (e) => {
    if (Array.isArray(e)) return e;
    return e?.fileList?.slice(-1); // keep only latest file
  };

  const onFinish = async (values) => {
    const fd = new FormData();
    fd.append("name", values.name);
    fd.append("email", values.email);
    fd.append("phone", values.phone);
    fd.append("password", values.password);
    fd.append("address", values.address || "");
    fd.append("state", values.state || "");
    fd.append("city", values.city || "");
    fd.append("country", values.country || "");
    fd.append("pincode", values.pincode || "");
    const file = values.profile_image?.[0]?.originFileObj;
    if (file) fd.append("profile_image", file);

    setLoading(true);
    try {
      const response = await Services.signup(fd);
      message.success(response.message || "Signup successful!");
      navigate("/auth/signin");
    } catch (err) {
      const msg =
        err?.messages?.[0] ||
        err?.message ||
        "Signup failed. Please try again.";
      message.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (token) {
      navigate("/profile");
    }
  }, [token, navigate]);

  return (
    <AppLayout footer>
      <Flex className="full-height">
        <Flex flex={1} vertical align="center" justify="center" gap={20}>
          <Card style={{ width: "100%", maxWidth: 640 }}>
            <Flex vertical gap={24}>
              <Flex vertical className="text-center">
                <Typography.Title level={2}>
                  Create your account
                </Typography.Title>
                <Typography.Text>
                  Fill the details to get started.
                </Typography.Text>
              </Flex>
              <Form
                name="signup"
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input placeholder="Type your name" />
                </Form.Item>

                <Form.Item
                  label="Email address"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email address!",
                    },
                    { type: "email", message: "Enter a valid email" },
                  ]}
                >
                  <Input placeholder="Type your email address" />
                </Form.Item>

                <Form.Item
                  label="Phone"
                  name="phone"
                  rules={[
                    { required: true, message: "Please input your phone!" },
                    {
                      pattern: /^\d{7,15}$/,
                      message: "Enter valid phone number",
                    },
                  ]}
                >
                  <Input placeholder="Type your phone number" />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                    {
                      pattern: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
                      message:
                        "Password must be at least 8 characters, include one uppercase letter and one number.",
                    },
                  ]}
                >
                  <Input.Password placeholder="Type your password" />
                </Form.Item>

                <Form.Item label="Address" name="address">
                  <Input placeholder="Street, Apt" />
                </Form.Item>

                <Form.Item label="State" name="state">
                  <Input placeholder="State" />
                </Form.Item>

                <Form.Item label="City" name="city">
                  <Input placeholder="City" />
                </Form.Item>

                <Form.Item label="Country" name="country">
                  <Input placeholder="Country" />
                </Form.Item>

                <Form.Item label="Pincode" name="pincode">
                  <Input placeholder="Pincode" />
                </Form.Item>

                <Form.Item
                  label="Profile Image"
                  name="profile_image"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  extra="PNG/JPG up to ~5MB"
                >
                  <Dragger
                    name="files"
                    multiple={false}
                    accept="image/*"
                    beforeUpload={() => false}
                    maxCount={1}
                  >
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag image to upload
                    </p>
                  </Dragger>
                </Form.Item>

                <Button
                  style={{ marginTop: 8 }}
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  block
                >
                  Signup
                </Button>
              </Form>
              <Typography.Text className="text-center">
                Already have an account? <Link to="/auth/signin">Signin</Link>
              </Typography.Text>
            </Flex>
          </Card>
        </Flex>
      </Flex>
    </AppLayout>
  );
}
export default Signup;
