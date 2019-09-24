import React, { Component } from "react";
import { Form, Checkbox, TextArea } from "semantic-ui-react";

class Departament extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });

    

    console.log("teste");
  };

  handleChange = (e, { value }) =>
    this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            onChange={this.handleChange}
            fluid
            label="Nome do departamento"
            placeholder="Departamento"
            name="name"
          />
          <Form.Input
            fluid
            label="Titulo"
            placeholder="Titulo"
            name="title"
            onChange={this.handleChange}
          />
          <Form.Field
            control={TextArea}
            label="Descrição"
            placeholder="Descrição"
          />
        </Form.Group>
        <Form.Field
          name="active"
          control={Checkbox}
          label={{ children: "Ativo?" }}
          onChange={this.handleChange}
        />
        <Form.Field
          name="showMenu"
          onChange={this.handleChange}
          control={Checkbox}
          label={{ children: "Mostrar no menu?" }}
        />
        <Form.Button>Cadastrar</Form.Button>
      </Form>
    );
  }
}

export default Departament;
