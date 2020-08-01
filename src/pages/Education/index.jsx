import React from "react";

import "./style.scss";
import Heading from "../../components/atoms/Heading";
import { useSelector } from "react-redux";
import Button from "../../components/molecules/Button";
import Text from "../../components/atoms/Text";

const Education = () => {
  const name = useSelector((state) => state.userName.name);

  return (
    <>
      <div className={"education"}>
        <Heading title={`Welcome to ${name}'s educations page`} size={"big"} />
        <Button
          title={"Add new education"}
          className={"education-button"}
        />
        <Text
          size={"big"}
          className={"education-empty-text"}
          text={"You have not added educations yet, please add new education"}
        />
      </div>
    </>
  );
};

export default Education;
