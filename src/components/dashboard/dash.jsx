import React from "react";
import { user } from "../../queries/user";
import { useQuery } from "@apollo/react-hooks";

export const Dashboard = ({ id }) => {
  const { loading, error, data } = useQuery(user, {
    variables: { id }
  });

  if (loading) {
    return <p>carregando</p>;
  }

  if (error) {
    return "error";
  }

  console.log(data);

  return <div>Dah</div>;
};
