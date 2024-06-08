import { ConfigProvider } from "antd";

const AntdUiConfig = (props) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#31AA8E",
          colorBgContainer: "31AA8E",
          colorBorder: "#31AA8E",
        },
      
      }}
    >
      {props.children}
    </ConfigProvider>
  );
};

export default AntdUiConfig;
