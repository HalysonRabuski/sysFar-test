import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Button from "../../components/Button";
import Typography from "@material-ui/core/Typography";
import { CustomContainer, TableContainer } from "./styles";
import { apiSysFar } from "../../services/apiSysFar";
import { useAuth } from "../../contexts/useAuth";
import { Link } from "react-router-dom";

function Clients(props) {
  const [clients, setClients] = useState([]);
  const auth = useAuth();

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Nome", width: 230 },
    { field: "birth_date", headerName: "Data de Nascimento", width: 130 },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
    {
      field: "",
      headerName: "Ações",
      width: 200,
      description: "Coluna de ações.",
      sortable: false,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/clients/${params.row.id}`}>
              <Button mr={1} variant="contained" color="primary">
                Edit
              </Button>
            </Link>
            <Button
              onClick={() => deleteItem(params.row.id)}
              variant="contained"
              color="secondary"
            >
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  async function getAllClients() {
    const { data } = await apiSysFar.get("/clients", {
      headers: {
        Authorization: `Bearer ${auth.jwt}`,
      },
    });

    setClients(data);
  }

  async function deleteItem(id) {
    const { data } = await apiSysFar.delete(`/clients/${id}`, {
      headers: {
        Authorization: `Bearer ${auth.jwt}`,
      },
    });

    if (data) getAllClients();
  }

  useEffect(() => {
    getAllClients();
  }, []);

  return (
    <CustomContainer>
      <Typography variant="h2">Clientes</Typography>
      <Typography variant="h3">Tabela de Clientes</Typography>
      <Link to="/clients/novo">
        <Button variant="contained" color="primary">
          Novo Cliente
        </Button>
      </Link>
      <TableContainer>
        <DataGrid rows={clients} columns={columns} pageSize={5} />
      </TableContainer>
    </CustomContainer>
  );
}

export default Clients;
