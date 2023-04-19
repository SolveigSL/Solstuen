import CheckBox from "components/CheckBox";
import FormField from "components/FormField";
import MessageField from "components/MessageField";
import SendButton from "components/SendButton";
import Header from "components/Header";
import * as React from "react";

export default function Home() {
  return (
    <>
      <Header></Header>
      <FormField></FormField>
      <CheckBox></CheckBox>
      <MessageField></MessageField>
      <SendButton></SendButton>
    </>
  );
}
